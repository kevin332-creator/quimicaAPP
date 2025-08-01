import React from 'react';
import { Link } from 'react-router-dom';
import AhorcadoQuimico from './AhorcadoQuimico/AhorcadoQuimico';

const Nivel1 = () => {
  return (
    <div className="nivel-container" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Link en la esquina superior derecha */}
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <Link
          to="/juegos"
          className="nav-link-hover text-white text-decoration-none d-flex align-items-center gap-2"
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

      <AhorcadoQuimico />
    </div>
  );
};

export default Nivel1;

