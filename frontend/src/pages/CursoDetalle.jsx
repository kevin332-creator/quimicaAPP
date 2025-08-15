import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

function CursoDetalle() {
  const [usuario, setUsuario] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [logins, setLogins] = useState([]);
  const { id } = useParams();
  const [estudiantes, setEstudiantes] = useState([]);
  const [curso, setCurso] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [emailEstudiante, setEmailEstudiante] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [nuevoEstudiante, setNuevoEstudiante] = useState({
    nombre: '',
    email: '',
    contraseña: '',
  });
  const [elementos, setElementos] = useState([]);
  const [modalElemento, setModalElemento] = useState(false);
  const [elementoSeleccionado, setElementoSeleccionado] = useState(null);


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
            const cursoRes = await API.get(`/cursos/${id}`);
            setCurso(Array.isArray(cursoRes.data) ? cursoRes.data[0] : cursoRes.data);
    
            const estRes = await API.get(`/cursos/${id}/estudiantes`);
            setEstudiantes(estRes.data || []);
        } else if (perfil.rol === 'estudiante') {
            const cursoRes = await API.get(`/cursos/${id}`);
            setCurso(Array.isArray(cursoRes.data) ? cursoRes.data[0] : cursoRes.data);

            const estRes = await API.get(`/cursos/${id}/estudiantes`);
            setEstudiantes(estRes.data || []);

            const elementosRes = await API.get(`/cursos/elementos`);
            console.log('🧪 Elementos recibidos:', elementosRes.data);
            setElementos(Array.isArray(elementosRes.data) ? elementosRes.data : []);

        }

      } catch (error) {
        console.error('❌ Error al cargar:', error);
      }
    };

    fetchData();
  }, [id, mostrarModal]);
  


  const agregarEstudiante = async () => {
    try {
      const res = await API.post(`/cursos/${id}/registrar-estudiante`, nuevoEstudiante);
      setMensaje('✅ Estudiante registrado e inscrito correctamente');
      setNuevoEstudiante({ nombre: '', email: '', contraseña: '' });
      setMostrarModal(false);
    } catch (err) {
      console.error('❌ Error:', err);
      setMensaje('❌ No se pudo registrar al estudiante');
    }
  };
  

  if (!curso) return <p>Cargando curso...</p>;

  return (
    <div className="container p-4">
        {/* Encabezado del curso */}
        <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h2 className="h2 mb-1" style={{ color: '#202124' }}>{curso.nombre}</h2>
                <p className="text-muted mb-0">Código: {curso.codigo}</p>
            </div>
            {usuario?.rol === 'docente' && (
                <button
                    onClick={() => setMostrarModal(true)}
                    className="btn text-white"
                    style={{
                        backgroundColor: '#1a73e8',
                        borderRadius: '24px',
                        padding: '8px 24px',
                        fontWeight: '500'
                    }}
                >
                    <i className="bi bi-plus-lg me-2"></i> Agregar estudiante
                </button>
            )}
        </div>

        {/* Sección para docentes */}
        {usuario?.rol === 'docente' && (
            <div className="card mb-4 border-0 shadow-sm">
                <div className="card-body">
                    <h3 className="h5 mb-3" style={{ color: '#202124' }}>
                        <i className="bi bi-people-fill me-2"></i> Estudiantes inscritos
                    </h3>
                    
                    {estudiantes.length === 0 ? (
                        <div className="text-center py-4">
                            <i className="bi bi-emoji-frown fs-1 text-muted mb-2"></i>
                            <p className="text-muted">No hay estudiantes inscritos aún</p>
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {estudiantes.map(est => (
                                        <tr key={est.id}>
                                            <td>{est.nombre}</td>
                                            <td>{est.email}</td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-danger">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* Sección para estudiantes - Tabla Periódica */}
        {usuario?.rol === 'estudiante' && (
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <h3 className="h5 mb-4" style={{ color: '#202124' }}>
                        <i className="bi bi-flask me-2"></i> Tabla Periódica
                    </h3>
                    
                    {elementos.length === 0 ? (
                        <div className="text-center py-4">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                            <p className="mt-2 text-muted">Cargando elementos...</p>
                        </div>
                    ) : (
                        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3">
                            {elementos.map(el => (
                                <div key={el.id} className="col">
                                    <div 
                                        className="card h-100 text-center p-2 cursor-pointer"
                                        style={{
                                            transition: 'transform 0.2s',
                                            borderTop: `4px solid #${Math.floor(Math.random()*16777215).toString(16)}`
                                        }}
                                        onClick={() => {
                                            setElementoSeleccionado(el);
                                            setModalElemento(true);
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = ''}
                                    >
                                        <div className="card-body">
                                            <p className="card-title fw-bold mb-1 fs-5">{el.simbolo}</p>
                                            <p className="card-text small mb-1">{el.nombre}</p>
                                            <p className="card-text text-muted small">Z={el.numero_atomico}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* Modal Agregar Estudiante */}
        {mostrarModal && (
            <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Agregar estudiante</h5>
                            <button type="button" className="btn-close" onClick={() => setMostrarModal(false)}></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Nombre completo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre completo"
                                    value={nuevoEstudiante.nombre}
                                    onChange={(e) => setNuevoEstudiante({ ...nuevoEstudiante, nombre: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Correo electrónico</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo electrónico"
                                    value={nuevoEstudiante.email}
                                    onChange={(e) => setNuevoEstudiante({ ...nuevoEstudiante, email: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    value={nuevoEstudiante.contraseña}
                                    onChange={(e) => setNuevoEstudiante({ ...nuevoEstudiante, contraseña: e.target.value })}
                                />
                            </div>
                            {mensaje && <div className="alert alert-info">{mensaje}</div>}
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-secondary" 
                                onClick={() => setMostrarModal(false)}
                            >
                                Cancelar
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-primary"
                                onClick={agregarEstudiante}
                            >
                                <i className="bi bi-plus-lg me-1"></i> Agregar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Modal Detalle Elemento */}
        {modalElemento && elementoSeleccionado && (
            <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {elementoSeleccionado.nombre} ({elementoSeleccionado.simbolo})
                            </h5>
                            <button type="button" className="btn-close" onClick={() => setModalElemento(false)}></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <strong>Número atómico:</strong> {elementoSeleccionado.numero_atomico}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Peso atómico:</strong> {elementoSeleccionado.peso_atomico}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Grupo:</strong> {elementoSeleccionado.grupo}
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <strong>Período:</strong> {elementoSeleccionado.periodo}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Tipo:</strong> {elementoSeleccionado.tipo}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Configuración electrónica:</strong> {elementoSeleccionado.configuracion_electronica}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={() => setModalElemento(false)}
                            >
                                <i className="bi bi-x-lg me-1"></i> Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
);
}

export default CursoDetalle;
