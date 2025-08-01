// src/pages/juego/JuegosNivel/RellenarTabla/useTablaInteractiva.js

import { useState } from "react";

export function useTablaInteractiva(elementos) {
  const [ubicados, setUbicados] = useState([]);

  const manejarSoltar = (elemento, fila, columna) => {
    if (elemento.fila === fila && elemento.columna === columna) {
      setUbicados((prev) => [...prev, { ...elemento, fila, columna }]);
      return true;
    }
    return false;
  };

  return {
    ubicados,
    manejarSoltar
  };
}
