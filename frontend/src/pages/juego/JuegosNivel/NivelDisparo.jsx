import React from 'react';
import { Link } from 'react-router-dom';
import CoheteQuimico from './CoheteQuimico/CoheteQuimico';

const NivelDisparo = () => {
  return (
    <div className="nivel-container" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Link para salir al menú de juegos */}
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

      <CoheteQuimico />
    </div>
  );
};

export default NivelDisparo;
