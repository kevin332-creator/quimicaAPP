import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../services/api'; 

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
      <Link to="/dashboard" className="text-white text-decoration-none hover-underline me-3">
        Dashboard
      </Link>
    </div>
    
    {/* Elementos derechos */}
    <div className="d-flex align-items-center gap-3">
      <Link to="/juegos" className='text-white text-decoration-none hover-underline'>Juegar</Link>
      {usuario ? (
        <Link to="/perfil" className="text-white text-decoration-none hover-underline">
          {usuario.nombre}
        </Link>
      ) : (
        <span>Cargando...</span>
      )}

      <button
        onClick={() => setMostrarModal(true)}
        className="btn btn-danger px-3 py-1"
      >
        Cerrar sesión
      </button>
    </div>
  </nav>

  {/* Modal de confirmación (mantener igual) */}
  {mostrarModal && (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h5 className="modal-title mb-3">¿Deseas cerrar sesión?</h5>
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
