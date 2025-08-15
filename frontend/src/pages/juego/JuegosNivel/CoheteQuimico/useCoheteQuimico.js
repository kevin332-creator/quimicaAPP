import { useState } from "react";
import preguntas from "./elementosQuimicos";

export const useCoheteQuimico = () => {
  const [indice, setIndice] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [disparo, setDisparo] = useState(false);

  const preguntaActual = preguntas[indice];

  const verificarRespuesta = (respuesta) => {
    setDisparo(true);

    setTimeout(() => {
      const esCorrecta = respuesta === preguntaActual.correcta;
      setMensaje(esCorrecta ? "✅ ¡Correcto!" : "❌ Incorrecto");
      setMostrarResultado(true);

      setTimeout(() => {
        setDisparo(false);
        setMostrarResultado(false);
        setMensaje("");

        if (indice < preguntas.length - 1) {
          setIndice(indice + 1);
        } else {
          alert("🎉 Juego terminado");
          setIndice(0); // Reiniciar juego
        }
      }, 1000);
    }, 1000);
  };

  return {
    preguntaActual,
    verificarRespuesta,
    disparo,
    mostrarResultado,
    mensaje,
  };
};
