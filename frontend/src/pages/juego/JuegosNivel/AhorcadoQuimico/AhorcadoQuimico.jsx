import React, { useEffect, useMemo } from 'react';
import { useAhorcado } from './useAhorcado';
import './estylo.css';

const AhorcadoQuimico = () => {
  const {
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
    indicePregunta,
    totalPreguntas,
    pasarASiguientePregunta,
  } = useAhorcado();

  const letras = useMemo(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), []);

  useEffect(() => {
    iniciarJuego(false); // No reiniciar todo al cargar
    return () => {};
  }, [iniciarJuego]);

  const getButtonState = useMemo(() => {
    return (letra) => {
      const adivinada = letrasAdivinadas.includes(letra);
      return {
        disabled: adivinada || juegoTerminado,
        className: `letra-btn ${
          adivinada
            ? palabraOculta.includes(letra) ? 'acertada' : 'fallada'
            : ''
        }`
      };
    };
  }, [letrasAdivinadas, juegoTerminado, palabraOculta]);

  const manejarSiguiente = () => {
    pasarASiguientePregunta();
  };

  return (
    <div className="ahorcado-container">

      {/* Progreso del juego */}
      <div className="progreso-juego">
        Pregunta {indicePregunta + 1} de {totalPreguntas} 
        
        <div className="contador-intentos">
        <p>Intentos restantes: {6 - intentos}/6</p>
        <div className="progress-bar-container">
          <div 
            className="progress-bar"
            style={{ 
              width: `${(intentos / 6) * 100}%`,
              backgroundColor: intentos >= 5 ? '#e74c3c' : 
                              intentos >= 3 ? '#f39c12' : '#2ecc71'
            }}
          ></div>
        </div>
      </div>
      </div>

      <p className="pista"> <strong>{pistaActual} </strong> </p>

      <div className="imagen-ahorcado">

        <h1 >
        [ {simboloActual} ]<span></span>
        </h1>
        
      </div>

      <div className="palabra-oculta" aria-live="polite">
        {palabraOculta}
      </div>

      <div className="teclado" role="group" aria-label="Teclado virtual">
        {letras.map(letra => {
          const { disabled, className } = getButtonState(letra);
          return (
            <button
              key={letra}
              onClick={() => probarLetra(letra)}
              disabled={disabled}
              className={className}
              aria-label={`Letra ${letra}`}
            >
              {letra}
            </button>
          );
        })}
      </div>

      {juegoTerminado && (
      <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content-error">
        <h2 className={ganado ? 'titulo-ganar' : 'titulo-perder'}>
          {ganado ? '¡Ganaste!' : '¡Perdiste!'}
        </h2>
        <p style={{ color: 'rgb(0, 0, 0)' }}>La palabra era: <strong>{palabraCompleta}</strong></p>
        <button
          onClick={manejarSiguiente}
          aria-label="Siguiente pregunta o reiniciar"
          className="modal-btn"
        >
          {indicePregunta + 1 < totalPreguntas ? 'Siguiente Pregunta' : 'Reiniciar Juego'}
        </button>
      </div>
    </div>
    
    )}

    </div>
  );
};

export default React.memo(AhorcadoQuimico);
