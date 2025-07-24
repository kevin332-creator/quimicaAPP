import { Outlet, Link } from 'react-router-dom';

function JuegoLayout() {
  return (
    <div className=" py-0">
        <nav className="mt-16 relative d-flex justify-end gap-3 z-50">
        <Link to="/dashboard" className="nav-link-hover text-white text-decoration-none d-flex align-items-center gap-2 me-3">
          <img
                src={'/tabla.png'}
                alt="avatar"
                className="rounded-circle"
                style={{ width: '32px', height: '32px', objectFit: 'cover' }}
              />
              <span>Ver tabla periodica</span>
        </Link>
        <Link to="/juegos" className='nav-link-hover text-white text-decoration-none d-flex align-items-center gap-2e'>
        <img
            src={'/juego.jpg'}
            alt="avatar"
            className="rounded-circle"
            style={{ width: '32px', height: '32px', objectFit: 'cover' }}
          />
          <span>Nivel de Juegos</span>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default JuegoLayout;
