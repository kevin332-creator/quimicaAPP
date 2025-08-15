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
  const [validNombre, setValidNombre] = useState(false);
  const [validApellidos, setValidApellidos] = useState(false);
  const [validContraseña, setValidContraseña] = useState(false);
  const navigate = useNavigate();

  // Expresiones regulares
  const nombreRegex = /^[a-zA-Z\s]+$/; // Solo letras y espacios
  const apellidosRegex = /^[a-zA-Z\s]+$/; // Solo letras y espacios
  const dniRegex = /^[0-9]{8}$/; // 8 dígitos numéricos (DNI)

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

  // Validaciones en tiempo real
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
    setValidNombre(nombreRegex.test(e.target.value)); // Verificar si el nombre solo tiene letras y espacios
  };

  const handleApellidosChange = (e) => {
    setApellidos(e.target.value);
    setValidApellidos(apellidosRegex.test(e.target.value)); // Verificar si los apellidos solo tienen letras y espacios
  };

  const handleContraseñaChange = (e) => {
    setContraseña(e.target.value);
    setValidContraseña(dniRegex.test(e.target.value)); // Verificar si la contraseña es un DNI (8 dígitos)
  };

  return (
    <div style={styles.registerBackground}>
      <div style={styles.registerContainer}>
        {/* Elementos Químicos dentro del Registro */}
        <div style={styles.gridContainer}>
          <div style={styles.elementItemBlue}>
            <div style={styles.elementSymbol}>C</div>
            <div style={styles.elementText}>Carbono</div>
            <div style={styles.elementNumber}></div>
            <div style={styles.elementCategory}></div>
          </div>
          <div style={styles.elementItemYellow}>
            <div style={styles.elementSymbol}>Re</div>
            <div style={styles.elementText}>Renio</div>
            <div style={styles.elementNumber}></div>
            <div style={styles.elementCategory}></div>
          </div>
          <div style={styles.elementItemBlue}>
            <div style={styles.elementSymbol}>Ar</div>
            <div style={styles.elementText}>Argón</div>
            <div style={styles.elementNumber}></div>
            <div style={styles.elementCategory}></div>
          </div>
          <div style={styles.elementItemOrange}>
            <div style={styles.elementSymbol}>Cu</div>
            <div style={styles.elementText}>Cobre</div>
            <div style={styles.elementNumber}></div>
            <div style={styles.elementCategory}></div>
          </div>
          <div style={styles.elementItemPink}>
            <div style={styles.elementSymbol}>En</div>
            <div style={styles.elementText}>Erbio</div>
            <div style={styles.elementNumber}></div>
            <div style={styles.elementCategory}></div>
          </div>
          <div style={styles.elementItemPurple}>
            <div style={styles.elementSymbol}>Ts</div>
            <div style={styles.elementText}>Tennessine</div>
            <div style={styles.elementNumber}></div>
            <div style={styles.elementCategory}></div>
          </div>
        </div>


        {/* Formulario de registro */}
        <form onSubmit={handleRegister} style={{ width: '100%' }}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={handleNombreChange}
            required
            style={styles.input}
          />
          {/* Mensaje de error si el nombre no es válido */}
          {!validNombre && nombre.length > 0 && (
            <p style={{ color: 'red' }}>El nombre solo puede contener letras y espacios.</p>
          )}

          <input
            type="text"
            placeholder="Apellidos"
            value={apellidos}
            onChange={handleApellidosChange}
            required
            style={styles.input}
          />
          {/* Mensaje de error si los apellidos no son válidos */}
          {!validApellidos && apellidos.length > 0 && (
            <p style={{ color: 'red' }}>Los apellidos solo pueden contener letras y espacios.</p>
          )}

          <input
            type="password"
            placeholder="Contraseña (DNI)"
            value={contraseña}
            onChange={handleContraseñaChange}
            required
            style={styles.input}
          />
          {/* Mensaje de error si la contraseña no es válida */}
          {!validContraseña && contraseña.length > 0 && (
            <p style={{ color: 'red' }}>La contraseña debe ser un DNI válido (8 dígitos).</p>
          )}

          <select
            value={rol}
            onChange={e => setRol(e.target.value)}
            required
            style={styles.input}
          >
            <option value="estudiante">Estudiante</option>
          </select>

          <button
            type="submit"
            style={styles.submitButton}
            disabled={!validNombre || !validApellidos || !validContraseña} // Deshabilitar el botón hasta que todos los campos sean válidos
          >
            Registrar
          </button>

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
    backgroundImage: 'url("/fondo_quimica.jpeg")', // Ruta de la imagen de fondo
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
