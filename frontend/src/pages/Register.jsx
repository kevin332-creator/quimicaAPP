
import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Register() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [rol, setRol] = useState('estudiante');
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');

    try {
      await API.post('/auth/register', { nombre, apellidos, contraseña, rol });
      setMensaje('✅ Registro exitoso. Redirigiendo...');
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError(err.response?.data?.mensaje || '❌ Error al registrar');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h3 className="text-center text-primary mb-3"><i className="bi bi-mortarboard-fill"></i> Química App</h3>
        <h5 className="text-center mb-4">Registro de Usuario</h5>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellidos</label>
            <input type="text" className="form-control" value={apellidos} onChange={e => setApellidos(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" value={contraseña} onChange={e => setContraseña(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Rol</label>
            <select className="form-select" value={rol} onChange={e => setRol(e.target.value)}>
              <option value="estudiante">Estudiante</option>
              <option value="docente">Docente</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

          {mensaje && <div className="alert alert-success py-1">{mensaje}</div>}
          {error && <div className="alert alert-danger py-1">{error}</div>}

          <button type="submit" className="btn btn-primary w-100">Registrarse</button>
        </form>

        <div className="text-center mt-3">
          <small>¿Ya tienes cuenta? <a href="/">Inicia sesión aquí</a></small>
        </div>
        <div className="text-center mt-3 text-muted small">
            © {new Date().getFullYear()} Tu Institución. Todos los derechos reservados.
          </div>
      </div>
      
    </div>
    
  );
  
}

export default Register;
