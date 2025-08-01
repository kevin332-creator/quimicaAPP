import React, { useState } from "react";
import elementosQuimicos from "./elementosQuimicos";
import { useTablaInteractiva } from "./useTablaInteractiva";
import "./estilos.css";

const filas = 7;
const columnas = 18;

function RellenarTabla() {
  const totalElementos = elementosQuimicos.length;
  const { ubicados, manejarSoltar } = useTablaInteractiva(elementosQuimicos);
  const [errores, setErrores] = useState(0);
  const [aciertos, setAciertos] = useState(0);
  const [feedback, setFeedback] = useState({}); // { "1-1": "acierto" | "error" }

  const estaUbicado = (simbolo) =>
    ubicados.find((el) => el.simbolo === simbolo);

  const handleDrop = (e, fila, columna) => {
    e.preventDefault();
    const simbolo = e.dataTransfer.getData("text/plain");
    const elemento = elementosQuimicos.find((el) => el.simbolo === simbolo);

    // Validar si es la posición correcta
    if (elemento.fila === fila && elemento.columna === columna) {
      manejarSoltar(elemento, fila, columna);
      setAciertos(aciertos + 1);
      setFeedback({ ...feedback, [`${fila}-${columna}`]: "acierto" });
    } else {
      setErrores(errores + 1);
      setFeedback({ ...feedback, [`${fila}-${columna}`]: "error" });
    }
  };

  const handleDragStart = (e, simbolo) => {
    e.dataTransfer.setData("text/plain", simbolo);
  };

  return (
    <div className="contenedor-juego">
  <div className="panel-superior">
    <div className="contador aciertos">✅ Aciertos: {aciertos}</div>
    <div className="contador errores">❌ Errores: {errores}</div>
    <div className="contador progreso">
      Progreso: {((aciertos / totalElementos) * 100).toFixed(0)}%
    </div>
  </div>

  <div className="zona-juego">
    <div className="tabla-periodica">
      {[...Array(filas)].map((_, filaIndex) => (
        <div key={filaIndex} className="fila">
          {[...Array(columnas)].map((_, colIndex) => {
            const fila = filaIndex + 1;
            const columna = colIndex + 1;
            const elemento = ubicados.find(
              (el) => el.fila === fila && el.columna === columna
            );
            const key = `${fila}-${columna}`;
            const estado = feedback[key];

            return (
              <div
                key={colIndex}
                className={`celda ${
                  estado === "acierto"
                    ? "acierto"
                    : estado === "error"
                    ? "error"
                    : ""
                }`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, fila, columna)}
              >
                {elemento ? <span>{elemento.simbolo}</span> : ""}
              </div>
            );
          })}
        </div>
      ))}
    </div>

    <div className="banco-elementos">
      <h3> Elementos para arrastrar:</h3>
      <div className="elementos-lista">
        {elementosQuimicos
          .filter((el) => !estaUbicado(el.simbolo))
          .map((elemento) => (
            <div
              key={elemento.simbolo}
              className="elemento"
              draggable
              onDragStart={(e) => handleDragStart(e, elemento.simbolo)}
            >
              {elemento.simbolo}
            </div>
          ))}
      </div>
    </div>
  </div>
</div>

  );
}

export default RellenarTabla;
