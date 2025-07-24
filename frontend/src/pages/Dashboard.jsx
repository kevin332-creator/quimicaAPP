import { useEffect, useState } from 'react'; 
import API from '../services/api';
import { useNavigate, Link } from 'react-router-dom';


function Dashboard() {
  const [usuario, setUsuario] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarModalAlumno, setMostrarModalAlumno] = useState(false);
  const [nuevoAlumno, setNuevoAlumno] = useState({
    nombre: '', apellidos: '', email: '', password: '', rol: 'estudiante'
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const perfilRes = await API.get('/auth/me');
        setUsuario(perfilRes.data);

        const usuariosRes = await API.get('/auth/usuarios');
        setUsuarios(usuariosRes.data);
      } catch (error) {
        console.error('❌ Error al cargar dashboard:', error);
        navigate('/');
      }
    };
    fetchData();
  }, []);

  const handleRegistrarAlumno = async () => {
    try {
      await API.post('/auth/registrar-alumno', nuevoAlumno);
      setMostrarModalAlumno(false);
      setNuevoAlumno({ nombre: '', apellidos: '', email: '', password: '', rol: 'estudiante' });

      const usuariosRes = await API.get('/auth/usuarios');
      setUsuarios(usuariosRes.data);

      alert('✅ Alumno registrado correctamente');
    } catch (err) {
      alert('❌ Error al registrar alumno');
    }
  };

  const eliminarAlumno = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este alumno?')) {
      try {
        await API.delete(`/auth/usuarios/${id}`);

        const usuariosRes = await API.get('/auth/usuarios');
        setUsuarios(usuariosRes.data);

        alert('✅ Alumno eliminado');
      } catch (err) {
        alert('❌ Error al eliminar alumno');
      }
    }
  };

  if (!usuario) return <p>Cargando...</p>;

  return (
    <div className="container p-4">
      {/* Panel de gestión docente */}
      {usuario.rol === 'docente' && (
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="h4 mb-3">Panel de Gestión Docente</h2>

            <button 
              className="btn btn-primary mb-3"
              onClick={() => setMostrarModalAlumno(true)}
            >
              <i className="bi bi-person-plus-fill me-2"></i>Registrar nuevo alumno
            </button>

            <div className="table-responsive">
              <table className="table table-bordered table-hover table-sm">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Acciones</th>
                    <th>Resultados</th>
                  </tr>
                </thead>
                <tbody>
                 {/* filtrar solo estudiantes */}
                     {usuarios.filter(u => u.rol === 'estudiante').map((u) => (
                    <tr key={u.id}>
                      <td>{u.id}</td>
                      <td>{u.nombre}</td>
                      <td>{u.apellidos}</td>
                      <td>{u.email}</td>
                      <td>{u.rol}</td>
                      <td>
                        <button className="btn btn-danger btn-sm" onClick={() => eliminarAlumno(u.id)}>
                          Eliminar
                        </button>
                      </td>
                      <td>
                        <Link to={`/resultados/${u.id}`} className="btn btn-info btn-sm">
                          Ver resultados
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      )}

      {/* Modal Registrar Alumno */}
      {mostrarModalAlumno && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Registrar Alumno</h5>
                <button type="button" className="btn-close" onClick={() => setMostrarModalAlumno(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input 
                    type="text"
                    className="form-control"
                    value={nuevoAlumno.nombre}
                    onChange={e => setNuevoAlumno({ ...nuevoAlumno, nombre: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Apellidos</label>
                  <input 
                    type="text"
                    className="form-control"
                    value={nuevoAlumno.apellidos}
                    onChange={e => setNuevoAlumno({ ...nuevoAlumno, apellidos: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                    type="email"
                    className="form-control"
                    value={nuevoAlumno.email}
                    onChange={e => setNuevoAlumno({ ...nuevoAlumno, email: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input 
                    type="password"
                    className="form-control"
                    value={nuevoAlumno.password}
                    onChange={e => setNuevoAlumno({ ...nuevoAlumno, password: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setMostrarModalAlumno(false)}>
                  Cancelar
                </button>
                <button type="button" className="btn btn-primary" onClick={handleRegistrarAlumno}>
                  Registrar
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
