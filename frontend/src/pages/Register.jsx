import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

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
      await API.post('/auth/register', {
        nombre,
        apellidos,
        contraseña,
        rol
      });

      setMensaje('✅ Usuario registrado correctamente');
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      console.error('❌ Error en registro:', err.response?.data || err.message);
      setError(err.response?.data?.mensaje || 'Error al registrar');
    }
  };

  return (
    <div className="container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
        <input type="text" placeholder="apellidos" value={apellidos} onChange={e => setApellidos(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={contraseña} onChange={e => setContraseña(e.target.value)} required />

        <select value={rol} onChange={e => setRol(e.target.value)} required>
          <option value="admin">Administrador</option>
          <option value="docente">Docente</option>
          <option value="estudiante">Estudiante</option>
        </select>

        <button type="submit">Registrar</button>
        {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Register;
