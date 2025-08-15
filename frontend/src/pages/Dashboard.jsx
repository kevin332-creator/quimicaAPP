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
  const [elementoDetalle, setElementoDetalle] = useState(null);
const [mostrarModalAlumno, setMostrarModalAlumno] = useState(false);
const [nuevoAlumno, setNuevoAlumno] = useState({
  nombre: '',
  apellidos: '',
  correo: '',
  rol: 'estudiante'
});

  const navigate = useNavigate();

  useEffect(() => {
    import('./tablaPeriodica/HeaderList.js');
    import('./tablaPeriodica/PeriodicTable.js');

    const fetchData = async () => {
      try {
        const perfilRes = await API.get('/auth/me');
        const perfil = perfilRes.data;
        setUsuario(perfil);

        const usuariosRes = await API.get('/auth/usuarios');
        setUsuarios(usuariosRes.data);

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

    function handleOpen(e) {
      setElementoDetalle(e.detail);
    }
    document.addEventListener('open-modal', handleOpen);
    return () => document.removeEventListener('open-modal', handleOpen);
  }, []);

  function closeDetalle() {
    setElementoDetalle(null);
  }

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
  <div className="pt-0">
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

    {usuario.rol === 'docente' && (
  <div className="container mt-4">
    {/* NUEVO PANEL DOCENTE */}
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between mb-3">
          <h2>Panel de Gestión Docente</h2>
          <div>
            <Link to="/docente/crear-test" className="btn btn-success me-2">
              Crear Test de Evaluación
            </Link>
            <button className="btn btn-primary">
              Registrar nuevo alumno
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
                <th>Resultados</th>
              </tr>
            </thead>
            <tbody>
              {usuarios
                .filter(u => u.rol === 'estudiante')
                .map(u => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.nombre}</td>
                    <td>{u.apellidos}</td>
                    <td>{u.email || ''}</td>
                    <td>{u.rol}</td>
                    <td>
                      <button className="btn btn-danger btn-sm">
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-info btn-sm text-white">
                        Ver resultados
                      </button>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* Cursos del docente (mantiene lo anterior) */}
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
      <div className="mb-0" style={{ backgroundColor: '#fff', padding: '0px' }}>
        <div className='mt-0'>
          <div className="d-flex justify-content-between align-items-center mb-"></div>
          <div className='bg-gray-100'>
            <header-list></header-list>
            <periodic-table></periodic-table>
          </div>
        </div>
      </div>
    )}

    {/* Aquí siguen los modales y detalles del elemento químico */}
    {elementoDetalle && (
  <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog modal-lg">
      <div className="modal-content" >
        <div className="modal-header d-flex justify-content-between" style={{   
          backgroundColor: 'rgb(216, 216, 216)',
          borderBottomColor: elementoDetalle.color,
          borderBottomWidth: '6px',
          borderBottomStyle: 'solid',
        }}>
          <h5 className="modal-title">
            <span style={{ color: 'black', fontweight: 'bolder', fontfamily: 'monospace' }}>
              Detalles del Elemento:
            </span>  
            <strong>{elementoDetalle.name}</strong> 
          </h5>
          <button type="button" className="btn btn-danger" onClick={closeDetalle}>
            Cerrar
          </button>
        </div>
        <div className="modal-body">
          <h2 className="text-2xl text-center font-bold text-blue-800">
            {elementoDetalle.symbol} - {elementoDetalle.name}
          </h2>
          <div>
            <p className="font-semibold">
              <strong>Descripción:</strong>  
              <span className="font-bold">{elementoDetalle.description}</span> 
            </p>
          </div>
          <div className="row">
            {/* Primera tabla */}
            <div className="col-md-6 mb-3">
              <table className="table table-bordered table-striped table-sm">
                <tbody>
                  <tr>
                    <th>Número atómico</th>
                    <td>{elementoDetalle.atomicNumber}</td>
                  </tr>
                  <tr>
                    <th>Peso atómico</th>
                    <td>{elementoDetalle.atomicWeight}</td>
                  </tr>
                  <tr>
                    <th>Categoría</th>
                    <td>{elementoDetalle.category}</td>
                  </tr>
                  <tr>
                    <th>Período</th>
                    <td>{elementoDetalle.period}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Segunda tabla */}
            <div className="col-md-6 mb-3">
              <table className="table table-bordered table-striped table-sm">
                <tbody>
                  <tr>
                    <th>Estado</th>
                    <td>{elementoDetalle.state}</td>
                  </tr>
                  <tr>
                    <th>Electronegatividad</th>
                    <td>{elementoDetalle.electronegativity}</td>
                  </tr>
                  <tr>
                    <th>Configuración electrónica</th>
                    <td>{elementoDetalle.electronConfig}</td>
                  </tr>
                  <tr>
                    <th>Año de descubrimiento</th>
                    <td>{elementoDetalle.discoveryYear}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <p className="font-semibold"><strong>Usos:</strong></p>
              <ul className="list-disc list-inside ml-4">
                {elementoDetalle.uses.map((u, i) => <li key={i}>{u}</li>)}
              </ul>
            </div>

            <div className="col-md-6 mb-3">
              <p className="font-semibold"><strong>Curiosidades:</strong></p>
              <ul className="list-disc list-inside ml-4">
                {elementoDetalle.facts.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
)}
    {/* Modal para crear curso */}
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
    {/* Modal para unirse a curso */}
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

    {/* Si también quieres que te los copie, dime: “dame los modales” */}
  </div>
);
}

export default Dashboard;
