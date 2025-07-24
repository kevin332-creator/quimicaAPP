// src/pages/juego/JuegosNivel/NivelDisparo.jsx
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import API from '../../../services/api';
import Player from '../../../components/JuegoDisparo/Player';
import Opcion from '../../../components/JuegoDisparo/Opcion';
import Disparo from '../../../components/JuegoDisparo/Disparo';
import bgImage from '../../../assets/7.jpg';

const socket = io('http://localhost:3000');

function NivelDisparo() {
  const { idCurso } = useParams(); // en caso se pase id por ruta
  const [preguntas, setPreguntas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [disparo, setDisparo] = useState(null);
  const [acertado, setAcertado] = useState(null);
  const [puntaje, setPuntaje] = useState(0);
  const [partidaId, setPartidaId] = useState(null);
  const [background] = useImage(bgImage);

  // Obtener estudiante desde token o localStorage
  const estudianteId = localStorage.getItem('userId');

  useEffect(() => {
    async function iniciarPartida() {
      try {
        const { data: partida } = await API.post('/partidas', {
          estudiante_id: estudianteId,
          juego_id: 3 // Disparo
        });
        setPartidaId(partida.id);

        const { data } = await API.get(`/preguntas?tipo=disparo&curso_id=${idCurso}`);
        setPreguntas(data);
      } catch (err) {
        console.error('Error iniciando partida o cargando preguntas', err);
      }
    }

    iniciarPartida();
  }, [idCurso, estudianteId]);

  const pregunta = preguntas[preguntaActual];

  const manejarDisparo = (x, texto) => {
    setDisparo({ x, y: 400, texto });
  };

  useEffect(() => {
    if (!disparo || !pregunta) return;

    const interval = setInterval(() => {
      setDisparo((prev) => {
        if (!prev) return null;
        const nuevaY = prev.y - 10;

        if (nuevaY < 120) {
          const esCorrecta = prev.texto === pregunta.respuesta_correcta;
          setAcertado(esCorrecta);
          if (esCorrecta) setPuntaje((prev) => prev + pregunta.puntos);

          // Guardar respuesta
          API.post('/respuestas', {
            partida_id: partidaId,
            pregunta_id: pregunta.id,
            respuesta_dada: prev.texto,
            es_correcta: esCorrecta,
            puntos: esCorrecta ? pregunta.puntos : 0
          });

          socket.emit('puntaje', {
            estudiante_id: estudianteId,
            juego_id: 3,
            puntaje: esCorrecta ? pregunta.puntos : 0
          });

          setTimeout(() => {
            setDisparo(null);
            setAcertado(null);
            setPreguntaActual((prev) => prev + 1);
          }, 1000);

          clearInterval(interval);
        }

        return { ...prev, y: nuevaY };
      });
    }, 50);

    return () => clearInterval(interval);
  }, [disparo, pregunta, partidaId, estudianteId]);

  if (!preguntas.length) {
    return <div className="text-center mt-5">🔄 Cargando preguntas...</div>;
  }

  if (preguntaActual >= preguntas.length) {
    API.put(`/partidas/${partidaId}`, { completado: true });
    return (
      <div className="text-center mt-5">
        <h2>🎉 ¡Juego Finalizado!</h2>
        <p className="fs-4">Tu puntaje: <strong>{puntaje}</strong></p>
        <button className="btn btn-primary mt-3" onClick={() => window.location.reload()}>
          🔁 Jugar otra vez
        </button>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h2 className="mt-3">🔫 Nivel Disparo</h2>
      <p className="mb-3 fs-5">{pregunta.texto}</p>

      <Stage width={window.innerWidth} height={500}>
        <Layer>
          {background && (
            <KonvaImage image={background} width={window.innerWidth} height={500} />
          )}

          {pregunta.opciones.map((op, idx) => (
            <Opcion
              key={idx}
              x={150 + idx * 220}
              y={100}
              texto={op}
              onClick={manejarDisparo}
            />
          ))}

          <Player />
          {disparo && <Disparo x={disparo.x} y={disparo.y} />}
        </Layer>
      </Stage>

      {acertado !== null && (
        <div
          className={`alert ${acertado ? 'alert-success' : 'alert-danger'} mx-auto mt-3 w-50`}
          style={{ fontSize: '1.2rem' }}
        >
          {acertado ? '✅ ¡Correcto!' : '❌ Incorrecto'}
        </div>
      )}
    </div>
  );
}

export default NivelDisparo;