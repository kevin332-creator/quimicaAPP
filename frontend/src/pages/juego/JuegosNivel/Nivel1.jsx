import React from 'react';
import { Link } from 'react-router-dom';
import AhorcadoQuimico from './AhorcadoQuimico/AhorcadoQuimico';

const Nivel1 = () => {
  return (
    <div className="nivel-container" style={{ 
      background: 'linear-gradient(135deg, #1E90FF, #0066CC)',
      color: 'white',
      padding: '1rem',
      minHeight: '100vh',
    }}>
      

      <AhorcadoQuimico />
    </div>
  );
};

export default Nivel1;

