import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
      <div className='header-name-juegos'>
        {/* Progreso del juego */}
        <div className="progreso-juego">
          <div className="contador-intentos">
            <p className='name-intentos'>Vidas: <span className='intentos'>[ {6 - intentos} ] </span> de 6</p>
            
            <div className="corazones-container">
              {[...Array(6)].map((_, index) => (
                <img 
                  key={index}
                  src="https://cdn-icons-png.flaticon.com/512/833/833472.png" // URL de corazón
                  alt="Vida"
                  style={{
                    width: '30px',
                    height: '30px',
                    opacity: index < 6 - intentos ? 1 : 0.3,
                    transition: 'opacity 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='numero-pregunta'>
            <p className='contador-pregunta'>Pregunta {indicePregunta + 1} de {totalPreguntas} </p>
        </div>
        <div>
          <div className='btn-sali-gamer'>
            <Link
              to="/juegos"
              className="color-fonfo-salir nav-link-hover text-white text-decoration-none d-flex align-items-center gap-2"
            >
              <img
                src="/juego.jpg"
                alt="avatar"
                className="rounded-circle"
                style={{ width: '32px', height: '32px', objectFit: 'cover' }}
              />
              <span>Salir</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className='container-preguntas'>

      <p className="pista"> <strong>{pistaActual} </strong> </p>

    
      </div>
      <div className="imagen-ahorcado">

        <h1 className='simbolo'>
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
