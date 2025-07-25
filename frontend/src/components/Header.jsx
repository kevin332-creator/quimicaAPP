import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../services/api'; 
import './StyleHeader.css';

function Header() {
  const [usuario, setUsuario] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const res = await API.get('/auth/me');
        setUsuario(res.data);
      } catch (error) {
        console.error('Error al obtener usuario autenticado:', error);
      }
    };

    obtenerUsuario();
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    setMostrarModal(false);
    navigate('/');
  };

  return (
    <header className="bg-primary text-white pt-1 pl-3 pr-3 pb-1 d-flex justify-content-between align-items-center w-100">
  <nav className="container-fluid d-flex justify-content-between align-items-center">
    {/* Elemento izquierdo */}
    <div className="d-flex align-items-center">
      <Link to="/dashboard" className="nav-link-hover text-white text-decoration-none d-flex align-items-center gap-2 me-3">
      <img
            src={'/tabla.png'}
            alt="avatar"
            className="rounded-circle"
            style={{ width: '32px', height: '32px', objectFit: 'cover' }}
          />
          <span>Quimica APP</span>
        
      </Link>
    </div>
    
    {/* Elementos derechos */}
    <div className="d-flex align-items-center gap-3">
      <Link to="/juegos" className='nav-link-hover text-white text-decoration-none d-flex align-items-center gap-2e'>
        <img
            src={'/juego.jpg'}
            alt="avatar"
            className="rounded-circle"
            style={{ width: '32px', height: '32px', objectFit: 'cover' }}
          />
          <span>Nivel de Juegos</span>
        </Link>
      {usuario ? (
        <Link to="/perfil" className="nav-link-hover text-white text-decoration-none d-flex align-items-center gap-2">
          <img
            src={'/user.webp'}
            alt="avatar"
            className="rounded-circle"
            style={{ width: '32px', height: '32px', objectFit: 'cover' }}
          />
          <span>{usuario.nombre}</span>
        </Link>
      ) : (
        <span>Cargando...</span>
      )}

      <button
        onClick={() => setMostrarModal(true)}
        className="btn btn-danger text-white text-decoration-none d-flex align-items-center gap-2 px-3 py-1"
      >
        <img
            src={'/cerrar.png'}
            alt="avatar"
            className="rounded-circle"
            style={{ width: '32px', height: '32px', objectFit: 'cover' }}
          />
          <span>Cerrar sesión</span>
      </button>
    </div>
  </nav>

  {/* Modal de confirmación (mantener igual) */}
  {mostrarModal && (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body d-flex align-items-center">
          
            <h5 className="modal-title mb-3 d-flex align-items-center gap-2">
            <img
                src={'/cerrar.png'}
                alt="avatar"
                className="rounded-circle"
                style={{ width: '32px', height: '32px', objectFit: 'cover' }}
              />
              <strong>¿Deseas cerrar sesión?</strong>
              
              </h5>
            
          </div>
          <div className='modal-header d-flex justify-content-end'>
            <div className="d-flex justify-content-end gap-2">
              <button
                onClick={() => setMostrarModal(false)}
                className="btn btn-secondary"
              >
                Cancelar
              </button>
              <button
                onClick={cerrarSesion}
                className="btn btn-danger"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</header>
    
  );
}

export default Header;
