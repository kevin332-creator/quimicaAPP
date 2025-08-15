import React, { useState, useEffect, useRef } from 'react';
import './CoheteQuimico.css';
import preguntas from './elementosQuimicos';

const CoheteQuimico = () => {
  const [indice, setIndice] = useState(0);
  const [disparos, setDisparos] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [deshabilitado, setDeshabilitado] = useState(false);
  const coheteRef = useRef(null);
  const alternativaRefs = useRef([]);

  const preguntaActual = preguntas[indice];

  const manejarDisparo = (alternativaIndex, esCorrecta) => {
    if (deshabilitado) return;
    setDeshabilitado(true);

    const cohete = coheteRef.current;
    const objetivo = alternativaRefs.current[alternativaIndex];

    if (!cohete || !objetivo) return;

    const coheteRect = cohete.getBoundingClientRect();
    const objetivoRect = objetivo.getBoundingClientRect();

    const offsetX = objetivoRect.left + objetivoRect.width / 2 - (coheteRect.left + coheteRect.width / 2);
    const offsetY = objetivoRect.top + objetivoRect.height / 2 - (coheteRect.top + coheteRect.height / 2);

    const newShot = {
      id: Date.now(),
      esCorrecta,
      offsetX,
      offsetY,
    };

    setDisparos(prev => [...prev, newShot]);

    setTimeout(() => {
      setMensaje(esCorrecta ? '¡Correcto! Avanzando...' : '¡Incorrecto! Era otra opción.');

      setTimeout(() => {
        setDisparos([]);
        setMensaje('');
        setDeshabilitado(false);
        setIndice(prev => (prev + 1) % preguntas.length);
      }, 1500);
    }, 1000);
  };

  return (
    <div className="cohete-container">

      <div className="pregunta">{preguntaActual.pregunta}</div>

      <div className="alternativas">
        {preguntaActual.alternativas.map((alt, i) => (
          <div
            key={i}
            className="alternativa"
            ref={el => (alternativaRefs.current[i] = el)}
            onClick={() => manejarDisparo(i, alt.correcta)}
          >
            <p>{alt.texto}</p>
          </div>
        ))}
      </div>

      <div className="cohete" ref={coheteRef}>
        <img src="/nivel3.png" alt="cohete" />
      </div>

      {disparos.map(disparo => (
        <div
          key={disparo.id}
          className={`bala ${disparo.esCorrecta ? 'bala-correcta' : 'bala-error'}`}
          style={{
            transform: `translate(${disparo.offsetX}px, ${disparo.offsetY}px)`,
          }}
        >
          <img src="/bala.png" alt="bala" />
        </div>
      ))}

      {mensaje && <div className="mensaje">{mensaje}</div>}
    </div>
  );
};

export default CoheteQuimico;
