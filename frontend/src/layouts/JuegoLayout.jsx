import { Outlet } from 'react-router-dom';

function JuegoLayout({ intentos }) {
  return (
    <div
      style={{
        backgroundColor: 'rgb(0, 0, 0)',
        color: 'white',
        minHeight: '100vh', // altura mínima igual a la altura de la pantalla
      }}
    >
      <Outlet />
    </div>
  );
}

export default JuegoLayout;
