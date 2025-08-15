import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../services/api'; 
import './StyleHeader.css';


function Header() {
  const [usuario, setUsuario] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [mostrarRanking, setMostrarRanking] = useState(false);
  const [ranking, setRanking] = useState([]);
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

  useEffect(() => {
    if (mostrarRanking) {
      const obtenerRanking = async () => {
        try {
          const res = await API.get('/preguntas/ranking');
          setRanking(res.data);
        } catch (error) {
          setRanking([]);
        }
      };
      obtenerRanking();
    }
  }, [mostrarRanking]);

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    setMostrarModal(false);
    navigate('/');
  };

  return (
    <header className="bg-primary text-white pt-2 px-3 pb-2 w-100">
      <nav className="container-fluid d-flex justify-content-between align-items-center">
        {/* Izquierda */}
        <div className="d-flex align-items-center">
          <Link to="/dashboard" className="nav-link-hover text-white text-decoration-none d-flex align-items-center gap-2 me-3">
            <img src="/tabla.png" alt="tabla" className="rounded-circle" style={{ width: '32px', height: '32px', objectFit: 'cover' }} />
            <span>Quimica APP</span>
          </Link>
        </div>

        {/* Botón hamburguesa solo visible en móvil */}
        <button
          className="btn btn-outline-light d-md-none"
          onClick={() => setMostrarMenu(!mostrarMenu)}
          aria-label="Menú"
        >
          ☰
        </button>

        {/* Menú de navegación */}
        <div className={`menu-nav d-flex align-items-center gap-3 ${mostrarMenu ? 'mostrar' : ''}`}>
          <Link to="/juegos" className="nav-link-hover text-white text-decoration-none d-flex align-items-center gap-2">
            <img src="/juego.jpg" alt="juego" className="rounded-circle" style={{ width: '32px', height: '32px', objectFit: 'cover' }} />
            <span>¡A JUGAR!</span>
          </Link>

          <button
            onClick={() => setMostrarRanking(true)}
            className="btn btn-warning text-dark d-flex align-items-center gap-2 px-3 py-1"
          >
            <img src="/ranking.png" alt="ranking" className="rounded-circle" style={{ width: '32px', height: '32px', objectFit: 'cover' }} />
            <span>Ranking</span>
          </button>

          {usuario ? (
            <Link to="/perfil" className="nav-link-hover text-white text-decoration-none d-flex align-items-center gap-2">
              <img src="/user.webp" alt="usuario" className="rounded-circle" style={{ width: '32px', height: '32px', objectFit: 'cover' }} />
              <span>{usuario.nombre}</span>
            </Link>
          ) : (
            <span>Cargando...</span>
          )}

          <button
            onClick={() => setMostrarModal(true)}
            className="btn btn-danger text-white d-flex align-items-center gap-2 px-3 py-1"
          >
            <img src="/cerrar.png" alt="cerrar" className="rounded-circle" style={{ width: '32px', height: '32px', objectFit: 'cover' }} />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </nav>

      {/* Modal de confirmación de cierre de sesión */}
      {mostrarModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body d-flex align-items-center">
                <h5 className="modal-title mb-3 d-flex align-items-center gap-2">
                  <img src="/cerrar.png" alt="cerrar" className="rounded-circle" style={{ width: '32px', height: '32px', objectFit: 'cover' }} />
                  <strong>¿Deseas cerrar sesión?</strong>
                </h5>
              </div>
              <div className="modal-header d-flex justify-content-end">
                <div className="d-flex justify-content-end gap-2">
                  <button onClick={() => setMostrarModal(false)} className="btn btn-secondary">Cancelar</button>
                  <button onClick={cerrarSesion} className="btn btn-danger">Cerrar sesión</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Ranking */}
      {mostrarRanking && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{ background: '#f7c948', borderRadius: '10px', minWidth: '350px', maxWidth: '400px' }}>
              <div className="modal-header" style={{ borderBottom: '2px solid #333', background: '#f7c948' }}>
                <h5 className="modal-title" style={{ fontWeight: 'bold', color: '#333' }}>Ranking</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setMostrarRanking(false)}></button>
              </div>
              <div className="modal-body" style={{ padding: '0.5rem 1rem', maxHeight: '300px', overflowY: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', background: '#f7c948', color: '#333', fontWeight: 'bold' }}>
                  <thead>
                    <tr style={{ background: '#e1a700', color: '#222' }}>
                      <th style={{ textAlign: 'center', padding: '6px', border: '1px solid #333' }}>ORDEN<br/>MERITO</th>
                      <th style={{ textAlign: 'center', padding: '6px', border: '1px solid #333' }}>NOMBRES</th>
                      <th style={{ textAlign: 'center', padding: '6px', border: '1px solid #333' }}>PUNTAJES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ranking.length === 0 ? (
                      <tr><td colSpan="3" style={{ textAlign: 'center', padding: '10px' }}>No hay datos</td></tr>
                    ) : (
                      ranking.map((item, idx) => (
                        <tr key={item.id || idx}>
                          <td style={{ textAlign: 'center', border: '1px solid #333', background: '#fffbe6' }}>
                            {idx === 0 && <img src="/nivel1.png" alt="oro" style={{ width: '32px' }} />}
                            {idx === 1 && <img src="/nivel2.png" alt="plata" style={{ width: '32px' }} />}
                            {idx === 2 && <img src="/nivel3.png" alt="bronce" style={{ width: '32px' }} />}
                          </td>
                          <td style={{ textAlign: 'center', border: '1px solid #333', background: '#fffbe6' }}>{item.nombre}</td>
                          <td style={{ textAlign: 'center', border: '1px solid #333', background: '#fffbe6' }}>{item.puntaje}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer" style={{ borderTop: '2px solid #333', background: '#f7c948' }}>
                <button className="btn btn-secondary" onClick={() => setMostrarRanking(false)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
