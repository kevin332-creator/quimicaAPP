// src/pages/Niveles.jsx
import { Link } from 'react-router-dom';

function Niveles() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🎮 Niveles del Juego</h2>
      <div className="row justify-content-center">
        
        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">🔰 Nivel 1: Básico</h5>
              <p className="card-text">Responde preguntas básicas de química y gana puntos.</p>
              <Link to="/juegos/nivel1" className="btn btn-primary">Jugar Nivel 1</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">⚗️ Nivel 2: Avanzado</h5>
              <p className="card-text">Preguntas avanzadas relacionadas a elementos y configuraciones electrónicas.</p>
              <Link to="/juegos/nivel2" className="btn btn-warning text-white">Jugar Nivel 2</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">🎯 Nivel 3: Disparo</h5>
              <p className="card-text">¡Apunta, dispara y acierta al elemento correcto!</p>
              <Link to="/juegos/disparo" className="btn btn-danger">Jugar Nivel 3</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Niveles;
