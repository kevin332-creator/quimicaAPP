import React from 'react';
import { Link } from 'react-router-dom';

const Ranking = () => {
  return (
    <div className="container-fluid py-0" style={{
      width: '100%',       
      height: '100%',      
      objectFit: 'cover',  
      objectPosition: 'center',
      fontFamily: '"Segoe UI", Roboto, sans-serif',
      backgroundImage: "url('/fondo_quimica.jpeg')",
      minHeight: '100vh' 
    }}>
      {/* Enlace izquierdo: Tabla periódica */}
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <Link
          to="/dashboard"
          className="nav-link-hover text-white text-decoration-none d-flex align-items-center gap-2"
        >
          <img
            src="/tabla.png"
            alt="tabla"
            className="rounded-circle"
            style={{ width: '32px', height: '32px', objectFit: 'cover' }}
          />
          <span>Ver tabla periódica</span>
        </Link>
      </div>

      {/* Enlace derecho: Ranking */}
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <Link
          to="/ranking"
          className="nav-link-hover text-white text-decoration-none d-flex align-items-center gap-2"
        >
          <img
            src="/ranking.png"
            alt="ranking"
            className="rounded-circle"
            style={{ width: '32px', height: '32px', objectFit: 'cover' }}
          />
          <span>Ranking</span>
        </Link>
      </div>
      <h5 className="text-center mb-5 " style={{
        fontWeight: 'bold',
        color: '#343a40',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
      }}>Ranking</h5>
      
      <div className="row justify-content-center px-4">
        {/* Rankings */}
      </div>
    </div>
  );
};

export default Ranking;

