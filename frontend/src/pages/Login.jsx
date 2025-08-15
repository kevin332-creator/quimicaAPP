import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../services/api';

function Login() {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!nombre.trim() || !contraseña.trim()) {
      setError('Completa todos los campos');
      return;
    }

    try {
      const res = await API.post('/auth/login', {
        nombre: nombre.trim(),
        contraseña: contraseña.trim()
      });

      const token = res.data.token;
      localStorage.setItem('token', token);
      console.log('🔐 Token JWT recibido:', token);

      navigate('/dashboard');
    } catch (err) {
      console.error('❌ Error en login:', err.response?.data || err.message);
      const mensaje = err.response?.data?.error || 'Error de conexión';
      setError(mensaje);
    }
  };

  return (
    <div style={styles.loginBackground}>

      <div style={styles.loginContainer}>
        <div className="card-body">
            <div className="card-header">
                <div style={styles.gridContainer}>
        {/* Elementos químicos */}
        <div style={styles.elementItemBlue}>
          <div style={styles.elementSymbol}>I</div>
          <div style={styles.elementText}>Yodo</div>
        </div>
        <div style={styles.elementItemYellow}>
          <div style={styles.elementSymbol}>Ni</div>
          <div style={styles.elementText}>Níquel</div>
        </div>
        <div style={styles.elementItemGreen}>
          <div style={styles.elementSymbol}>C</div>
          <div style={styles.elementText}>Carbono</div>
        </div>
        <div style={styles.elementItemBlue}>
          <div style={styles.elementSymbol}>I</div>
          <div style={styles.elementText}>Yodo</div>
        </div>
        <div style={styles.elementItemRed}>
          <div style={styles.elementSymbol}>Ar</div>
          <div style={styles.elementText}>Argón</div>
        </div>
        <div style={styles.elementItemYellow}>
          <div style={styles.elementSymbol}>Se</div>
          <div style={styles.elementText}>Selenio</div>
        </div>
        <div style={styles.elementItemPink}>
          <div style={styles.elementSymbol}>Si</div>
          <div style={styles.elementText}>Silicio</div>
        </div>
        <div style={styles.elementItemBlue}>
          <div style={styles.elementSymbol}>O</div>
          <div style={styles.elementText}>Oxígeno</div>
        </div>
        <div style={styles.elementItemGreen}>
          <div style={styles.elementSymbol}>N</div>
          <div style={styles.elementText}>Nitrógeno</div>
        </div>
      </div>
            </div>
          

          <form onSubmit={handleLogin} className="login-form">
            <div className="mb-3">
              <input
                type="text"
                placeholder="USUARIO"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                required
                className="form-control"
                style={styles.input}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="PASSWORD"
                value={contraseña}
                onChange={e => setContraseña(e.target.value)}
                required
                className="form-control"
                style={styles.input}
              />
            </div>

            {error && (
              <div className="alert alert-danger mb-3" style={styles.errorMessage}>
                {error}
              </div>
            )}

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={styles.submitButton}
              >
                STAR
              </button>
            </div>
          </form>

          <div className="text-center pt-3">
            <p className="text-muted mb-2">¿No tienes una cuenta?</p>
            <Link 
              to="/register" 
              className="register-link"
              style={styles.registerLink}
            >
              Crear cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  loginBackground: {
    minHeight: '100vh',
    backgroundImage: 'url("/fondo_quimica.jpeg")', // Ruta de la imagen de fondo
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '40px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)', // 5 columnas de elementos
    gap: '10px', // Espacio entre los cuadros
    top: '10%',
    left: '5%',
    right: '5%',
    zIndex: 1, // Asegura que los elementos químicos estén sobre el fondo
    maxWidth: '100%',
  },
  elementItem: {
    borderRadius: '8px',
    padding: '10px', // Ajustado tamaño de padding
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '16px', // Aumentamos el tamaño de la fuente
  },
  elementSymbol: {
    fontSize: '18px', // Aumentamos el tamaño de los símbolos
    fontWeight: 'bold',
  },
  elementText: {
    fontSize: '12px', // Tamaño adecuado para el texto del nombre del elemento
    marginTop: '5px',
  },
  elementItemBlue: {
    backgroundColor: '#b2e0e3',
  },
  elementItemYellow: {
    backgroundColor: '#fbe58b',
  },
  elementItemGreen: {
    backgroundColor: '#b4e3c0',
  },
  elementItemRed: {
    backgroundColor: '#f8b3b2',
  },
  elementItemPink: {
    backgroundColor: '#f1c1d0',
  },
  loginContainer: {
    background: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
    maxWidth: '420px', // Tamaño del formulario
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  submitButton: {
    backgroundColor: '#000000',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    fontWeight: '500',
    textTransform: 'none',
  },
  footerText: {
    marginTop: '25px',
    textAlign: 'center',
  },
  registerLink: {
    display: 'inline-block',
    padding: '6px 12px',
    color: '#1a73e8',
    border: '1px solid #1a73e8',
    borderRadius: '4px',
    textDecoration: 'none',
    marginBottom: '6px',
  },
  errorMessage: {
    color: 'red',
    fontSize: '14px',
    marginTop: '10px',
  },
};

export default Login;