import { useState, useCallback, useMemo } from 'react';
import { palabrasQuimicas } from './PalabrasQuimicas';

// throttle para evitar múltiples clicks rápidos
const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export const useAhorcado = () => {
  const totalPreguntas = palabrasQuimicas.length;
  const [indicePregunta, setIndicePregunta] = useState(0);

  const [palabraActual, setPalabraActual] = useState('');
  const [pistaActual, setPistaActual] = useState('');
  const [simboloActual, setSimboloActual] = useState('');
  const [letrasAdivinadas, setLetrasAdivinadas] = useState([]);
  const [intentos, setIntentos] = useState(0);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [ganado, setGanado] = useState(false);
  const [ultimaLetra, setUltimaLetra] = useState(null);

  const palabraCompleta = palabraActual;

  const cargarPregunta = useCallback((indice) => {
    const pregunta = palabrasQuimicas[indice];
    if (!pregunta) return;

    setPalabraActual(pregunta.palabra);
    setPistaActual(pregunta.pista);
    setSimboloActual(pregunta.simbolo);
    setLetrasAdivinadas([]);
    setIntentos(0);
    setJuegoTerminado(false);
    setGanado(false);
    setUltimaLetra(null);
  }, []);

  const iniciarJuego = useCallback((reiniciarTodo = false) => {
    if (reiniciarTodo) {
      setIndicePregunta(0);
      cargarPregunta(0);
    } else {
      cargarPregunta(indicePregunta);
    }
  }, [cargarPregunta, indicePregunta]);

  const pasarASiguientePregunta = useCallback(() => {
    const siguiente = indicePregunta + 1;
    if (siguiente < totalPreguntas) {
      setIndicePregunta(siguiente);
      cargarPregunta(siguiente);
    } else {
      // Si se terminó todo, reiniciar
      setIndicePregunta(0);
      cargarPregunta(0);
    }
  }, [indicePregunta, totalPreguntas, cargarPregunta]);

  const probarLetra = useCallback(
    throttle((letra) => {
      if (juegoTerminado || letrasAdivinadas.includes(letra) || ultimaLetra === letra) return;

      setUltimaLetra(letra);
      const nuevasLetras = [...letrasAdivinadas, letra];
      setLetrasAdivinadas(nuevasLetras);

      if (!palabraActual.includes(letra)) {
        const nuevosIntentos = intentos + 1;
        setIntentos(nuevosIntentos);
        if (nuevosIntentos >= 6) {
          setJuegoTerminado(true);
        }
        return;
      }

      const haGanado = palabraActual.split('').every((l) => nuevasLetras.includes(l));
      if (haGanado) {
        setGanado(true);
        setJuegoTerminado(true);
      }
    }, 300),
    [juegoTerminado, letrasAdivinadas, palabraActual, intentos, ultimaLetra]
  );

  const palabraOculta = useMemo(() => {
    return palabraActual
      .split('')
      .map((letra) => (letrasAdivinadas.includes(letra) ? letra : '_'))
      .join(' ');
  }, [palabraActual, letrasAdivinadas]);

  return {
    palabraOculta,
    palabraCompleta,
    pistaActual,
    simboloActual,
    letrasAdivinadas,
    intentos,
    juegoTerminado,
    ganado,
    iniciarJuego,
    probarLetra,
    pasarASiguientePregunta,
    indicePregunta,
    totalPreguntas,
  };
};
