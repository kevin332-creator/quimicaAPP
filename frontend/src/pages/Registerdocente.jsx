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
    <div style={styles.registerBackground}>
      <div style={styles.registerContainer}>
        {/* Elementos Químicos dentro del Registro */}
        <div style={styles.gridContainer}>
          <div style={styles.elementItemBlue}>
            <div style={styles.elementSymbol}>C</div>
            <div style={styles.elementText}>Carbono</div>
            <div style={styles.elementNumber}>6</div>
            <div style={styles.elementCategory}>No metal</div>
          </div>
          <div style={styles.elementItemYellow}>
            <div style={styles.elementSymbol}>Re</div>
            <div style={styles.elementText}>Renio</div>
            <div style={styles.elementNumber}>75</div>
            <div style={styles.elementCategory}>Metal de transición</div>
          </div>
          <div style={styles.elementItemBlue}>
            <div style={styles.elementSymbol}>Ar</div>
            <div style={styles.elementText}>Argón</div>
            <div style={styles.elementNumber}>18</div>
            <div style={styles.elementCategory}>Gas noble</div>
          </div>
          <div style={styles.elementItemOrange}>
            <div style={styles.elementSymbol}>Cu</div>
            <div style={styles.elementText}>Cobre</div>
            <div style={styles.elementNumber}>29</div>
            <div style={styles.elementCategory}>Metal de transición</div>
          </div>
          <div style={styles.elementItemPink}>
            <div style={styles.elementSymbol}>En</div>
            <div style={styles.elementText}>Erbio</div>
            <div style={styles.elementNumber}>68</div>
            <div style={styles.elementCategory}>Lantanido</div>
          </div>
          <div style={styles.elementItemPurple}>
            <div style={styles.elementSymbol}>Ts</div>
            <div style={styles.elementText}>Tennessine</div>
            <div style={styles.elementNumber}>117</div>
            <div style={styles.elementCategory}>Halógeno</div>
          </div>
        </div>

        {/* Formulario de registro */}
        <h2></h2>
        <form onSubmit={handleRegister} style={{ width: '100%' }}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Apellidos"
            value={apellidos}
            onChange={e => setApellidos(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={e => setContraseña(e.target.value)}
            required
            style={styles.input}
          />

          <select
            value={rol}
            onChange={e => setRol(e.target.value)}
            required
            style={styles.input}
          >
          <option value="docente">Docente</option>
          </select>

          <button type="submit" style={styles.submitButton}>Registrar</button>

          {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

const styles = {
  registerBackground: {
    minHeight: '100vh',
    backgroundImage: 'url("fondo_quimica.jpeg")', // Ruta de la imagen de fondo
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '40px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)', // 6 columnas
    gap: '10px',
    marginBottom: '20px',
    maxWidth: '100%',
  },
  elementItem: {
    borderRadius: '8px',
    padding: '15px', // Tamaño ajustado para hacerlo más pequeño
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '16px', // Fuente ajustada para tamaño más pequeño
  },
  elementSymbol: {
    fontSize: '24px', // Símbolos más pequeños
    fontWeight: 'bold',
  },
  elementText: {
    fontSize: '12px',
    marginTop: '5px',
  },
  elementNumber: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '5px',
  },
  elementCategory: {
    fontSize: '10px',
    fontStyle: 'italic',
    marginTop: '5px',
  },
  elementItemBlue: {
    backgroundColor: '#A2D9F7', // Azul
  },
  elementItemYellow: {
    backgroundColor: '#F9E79F', // Amarillo
  },
  elementItemOrange: {
    backgroundColor: '#F0C77B', // Naranja
  },
  elementItemPink: {
    backgroundColor: '#F5C8D1', // Rosa
  },
  elementItemPurple: {
    backgroundColor: '#D2B4DE', // Morado
  },
  registerContainer: {
    background: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
    maxWidth: '420px',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 2, // Asegura que el formulario esté por encima de los elementos químicos
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '18px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  submitButton: {
    width: '100%',
    marginTop: '12px',
    padding: '12px',
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
};

export default Register;