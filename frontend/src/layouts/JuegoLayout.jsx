import { Outlet, Link } from 'react-router-dom';

function JuegoLayout() {
  return (
    <div className="container py-0">
        <nav className="mb-4 d-flex justify-content-center gap-3">
        <Link to="/dashboard" className="btn btn-outline-success text-primary text-decoration-none hover-underline me-3">Dashboard</Link>
        <Link to="/juegos" className='btn btn-outline-success text-primary text-decoration-none hover-underline'>Jugar</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default JuegoLayout;
