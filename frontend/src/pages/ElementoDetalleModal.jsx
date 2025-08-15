

import { useEffect, useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./ElementoDetalleModal.css";

export default function ElementoDetalleModal({ elementoDetalle, closeDetalle }) {
  if (!elementoDetalle) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          {/* Encabezado */}
          <div
            className="modal-header"
            style={{
              backgroundColor: "#e0e0e0",
              borderBottom: `6px solid ${elementoDetalle.color}`,
            }}
          >
            <h5 className="modal-title">
              Detalles del Elemento: <strong>{elementoDetalle.name}</strong>
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeDetalle}
            ></button>
          </div>

          {/* Cuerpo con flechas */}
          <div className="modal-body detalle-container">
            {/* Cuadro central */}
            <div className="elemento-cuadro">
              <div className="numero-atomico">{elementoDetalle.atomicNumber}</div>
              <div className="simbolo">{elementoDetalle.symbol}</div>
              <div className="nombre">{elementoDetalle.name}</div>
            </div>

            {/* Flechas y etiquetas */}
            <div className="info-arriba flecha">
              ↑ Peso atómico: {elementoDetalle.atomicWeight}
            </div>
            <div className="info-abajo flecha">
              ↓ Período: {elementoDetalle.period}
            </div>
            <div className="info-izquierda flecha">
              ← Categoría: {elementoDetalle.category}
            </div>
            <div className="info-derecha flecha">
              Estado: {elementoDetalle.state} →
            </div>
            <div className="info-arriba-derecha flecha">
              ↗ Electronegatividad: {elementoDetalle.electronegativity}
            </div>
            <div className="info-abajo-derecha flecha">
              ↘ Configuración electrónica: {elementoDetalle.electronConfig}
            </div>
            <div className="info-abajo-izquierda flecha">
              ↙ Descubierto en: {elementoDetalle.discoveryYear}
            </div>
          </div>

          {/* Descripción */}
          <div className="p-3">
            <p>
              <strong>Descripción:</strong> {elementoDetalle.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
