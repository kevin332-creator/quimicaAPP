import React from 'react';

function Nivel1() {
  return (
    <div
      className=" mt-0 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/nivel_1.jpeg')", // reemplaza con tu ruta
        minHeight: '100vh',
      }}
    >
      <div className="relative z-10 bg-white/80 p-6 rounded-xl shadow-md">
        <h2 className="text-center mb-4 text-xl font-bold text-blue-800">🔰 Nivel 1: Básico</h2>
        <p className="text-center text-gray-700">Aquí se mostrarán preguntas básicas de química (tipo test).</p>
        {/* Aquí irá la lógica del juego */}
      </div>
    </div>
  );
}

export default Nivel1;
