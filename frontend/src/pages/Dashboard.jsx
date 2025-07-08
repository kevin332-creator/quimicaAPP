import { useEffect, useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [usuario, setUsuario] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [logins, setLogins] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevoCurso, setNuevoCurso] = useState({
    nombre: '', codigo: '', fecha_inicio: '', fecha_fin: ''
  });
  const [mostrarModalClase, setMostrarModalClase] = useState(false);
  const [codigoCurso, setCodigoCurso] = useState('');
  const [mensajeUnirse, setMensajeUnirse] = useState('');


  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const perfilRes = await API.get('/auth/me');
        const perfil = perfilRes.data;
        setUsuario(perfil);

        const usuariosRes = await API.get('/auth/usuarios');
        setUsuarios(usuariosRes.data);

        const loginsRes = await API.get('/auth/logins');
        setLogins(loginsRes.data);

        // Obtener cursos según el rol
        if (perfil.rol === 'docente') {
          const cursosRes = await API.get('/cursos/docente');
          setCursos(Array.isArray(cursosRes.data) ? cursosRes.data : cursosRes.data.cursos || []);
        } else if (perfil.rol === 'estudiante') {
          const cursosRes = await API.get('/cursos/estudiante');
          setCursos(Array.isArray(cursosRes.data) ? cursosRes.data : cursosRes.data.cursos || []);
        }

      } catch (error) {
        console.error('❌ Error al cargar dashboard:', error);
        navigate('/');
      }
    };

    fetchData();
  }, []);

  const handleCrearCurso = async () => {
    try {
      await API.post('/cursos/crear', nuevoCurso);
      setMostrarModal(false);
      setNuevoCurso({ nombre: '', codigo: '', fecha_inicio: '', fecha_fin: '' });

      const cursosRes = await API.get('/cursos/docente');
      setCursos(cursosRes.data);
    } catch (err) {
      alert('Error al crear curso');
    }
  };

  const unirseACurso = async () => {
    try {
      const res = await API.post('/cursos/unirse', { codigo: codigoCurso });
      setMensajeUnirse('✅ Te has unido correctamente a la clase');
      setCodigoCurso('');
      setMostrarModalClase(false);
    } catch (err) {
      console.error('❌ Error al unirse al curso:', err);
      setMensajeUnirse('❌ No se pudo unir. Verifica el código o si ya estás inscrito.');
    }
  };
  

  if (!usuario) return <p>Cargando...</p>;

  return (
    <div className="container p-4">
      

      {/* Tabla de usuarios */}
      {usuario?.rol === 'docente' || usuario.rol === 'admin' && (
        <div className="card mb-4">
            <div className="card-body">
            <h2 className="h4 mb-3">Usuarios visibles</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-hover table-sm">
                <thead className="table-light">
                    <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((u) => (
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.nombre}</td>
                        <td>{u.apellidos}</td>
                        <td>{u.rol}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>
      )}
      

      {/* Sección para docentes */}
{usuario.rol === 'docente' && (
  <div className="container mt-4">
    <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '16px' }}>
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="h4 mb-1" style={{ color: '#202124' }}>
              <i className="bi bi-journals text-primary me-2"></i>Tus Cursos
            </h2>
            <p className="text-muted small mb-0">
              {cursos.length} {cursos.length === 1 ? 'curso' : 'cursos'} activos
            </p>
          </div>
          <button 
            onClick={() => setMostrarModal(true)} 
            className="btn text-white d-flex align-items-center"
            style={{
              backgroundColor: '#1a73e8',
              borderRadius: '20px',
              padding: '8px 16px',
              fontWeight: '500'
            }}
          >
            <i className="bi bi-plus-lg me-2"></i>Nuevo curso
          </button>
        </div>

        {cursos.length === 0 ? (
          <div className="text-center py-5">
            <i className="bi bi-journal-x display-5 text-muted mb-3"></i>
            <h3 className="h5 text-muted mb-2">No tienes cursos creados</h3>
            <p className="text-muted">Comienza creando tu primer curso</p>
            <button 
              onClick={() => setMostrarModal(true)}
              className="btn btn-primary mt-2"
              style={{ borderRadius: '20px' }}
            >
              <i className="bi bi-plus-lg me-1"></i>Crear curso
            </button>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {cursos.map(curso => (
              <div key={curso.id} className="col">
                <div 
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: '12px',
                    transition: 'transform 0.2s',
                    borderTop: `4px solid #${Math.floor(Math.random()*16777215).toString(16)}`
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = ''}
                >
                  <Link 
                    to={`/cursos/${curso.id}`} 
                    className="text-decoration-none text-dark"
                  >
                    <div className="card-body">
                      <div className="d-flex align-items-start mb-3">
                        <div className="flex-shrink-0 me-3">
                          <div 
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              width: '48px',
                              height: '48px',
                              backgroundColor: '#e8f0fe',
                              color: '#1a73e8'
                            }}
                          >
                            <i className="bi bi-journal-bookmark-fill fs-5"></i>
                          </div>
                        </div>
                        <div>
                          <h5 className="card-title mb-1">{curso.nombre}</h5>
                          <p className="text-muted small mb-2">Código: {curso.codigo}</p>
                          <span className="badge bg-light text-dark small">
                            <i className="bi bi-people-fill me-1"></i>
                            {curso.estudiantes || 0} estudiantes
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer bg-transparent border-top-0">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="small text-muted">
                          <i className="bi bi-calendar3 me-1"></i>
                          Creado: {new Date(curso.fecha_inicio).toLocaleDateString()}
                        </span>
                        <i className="bi bi-chevron-right text-muted"></i>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
    </div>
</div>
)}

      {/* Sección para estudiantes */}
        {usuario.rol === 'estudiante' && (
        <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h4 mb-0">Mis cursos</h2>
            <button
                onClick={() => setMostrarModalClase(true)}
                className="btn btn-primary"
                style={{ 
                backgroundColor: '#1a73e8',
                borderColor: '#1a73e8',
                borderRadius: '24px',
                padding: '8px 24px',
                fontWeight: '500'
                }}
            >
                <i className="bi bi-plus-lg me-2"></i> Unirme a clase
            </button>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {cursos.map(curso => (
                <div key={curso.id} className="col">
                <div 
                    className="card h-100 shadow-sm border-0"
                    style={{
                        backgroundColor:'gray',
                    borderRadius: '12px',
                    transition: 'transform 0.2s',
                    cursor: 'pointer',
                    borderTop: '8px solid ##' + Math.floor(Math.random()*16777215).toString(16) // Color aleatorio
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = ''}
                >
                    <Link 
                    to={`/cursos/${curso.id}/`} 
                    className="text-decoration-none text-dark"
                    >
                    <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                        <div 
                            className="rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{
                            width: '48px',
                            height: '48px',
                            backgroundColor: '#f1f3f4',
                            color: '#5f6368'
                            }}
                        >
                            <i className="bi bi-journal-bookmark-fill fs-4"></i>
                        </div>
                        <div>
                            <h5 className="card-title mb-0" style={{ color: '#202124' }}>{curso.nombre}</h5>
                            <small className="text-muted">Código: {curso.codigo}</small>
                        </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-light text-dark">
                            <i className="bi bi-people-fill me-1"></i> 25 estudiantes
                        </span>
                        <span className="text-muted small">Últ. actividad: hoy</span>
                        </div>
                    </div>
                    </Link>
                </div>
                </div>
            ))}
            </div>
        </div>
        )}

      {/* Historial de logins */}
      {usuario.rol === 'docente' || usuario.rol === 'admin' && (
        <div className="card">
          <div className="card-body">
            <h2 className="h4 mb-3">Historial de inicios de sesión</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-hover table-sm">
                <thead className="table-light">
                    <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Nombre</th>
                    <th>Rol</th>
                    <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {logins.map((log) => (
                    <tr key={log.id}>
                        <td>{log.id}</td>
                        <td>{log.apellidos}</td>
                        <td>{log.nombre}</td>
                        <td>{log.rol}</td>
                        <td>{new Date(log.fecha_login).toLocaleString()}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>
      )}
      

      {/* Modal Crear Curso */}
      {mostrarModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Crear Curso</h5>
                <button type="button" className="btn-close" onClick={() => setMostrarModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={nuevoCurso.nombre}
                    onChange={e => setNuevoCurso({ ...nuevoCurso, nombre: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Código</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={nuevoCurso.codigo}
                    onChange={e => setNuevoCurso({ ...nuevoCurso, codigo: e.target.value })}
                  />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label">Fecha inicio</label>
                    <input 
                      type="date" 
                      className="form-control" 
                      value={nuevoCurso.fecha_inicio}
                      onChange={e => setNuevoCurso({ ...nuevoCurso, fecha_inicio: e.target.value })}
                    />
                  </div>
                  <div className="col">
                    <label className="form-label">Fecha fin</label>
                    <input 
                      type="date" 
                      className="form-control" 
                      value={nuevoCurso.fecha_fin}
                      onChange={e => setNuevoCurso({ ...nuevoCurso, fecha_fin: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setMostrarModal(false)}>
                  Cancelar
                </button>
                <button type="button" className="btn btn-primary" onClick={handleCrearCurso}>
                  Crear
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Unirse a Clase */}
      {mostrarModalClase && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Unirse a una clase</h5>
                <button type="button" className="btn-close" onClick={() => setMostrarModalClase(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Código del curso</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresa el código"
                    value={codigoCurso}
                    onChange={(e) => setCodigoCurso(e.target.value)}
                  />
                </div>
                {mensajeUnirse && <div className="alert alert-info">{mensajeUnirse}</div>}
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => setMostrarModalClase(false)}
                  className="btn btn-secondary"
                >
                  Cancelar
                </button>
                <button
                  onClick={unirseACurso}
                  className="btn btn-primary"
                >
                  Unirse
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
