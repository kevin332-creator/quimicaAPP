
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';
import API from '../services/api';

function Login() {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!nombre.trim() || !contraseña.trim()) {
      setError('Completa todos los campos');
      setLoading(false);
      return;
    }

    try {
      const res = await API.post('/auth/login', {
        nombre: nombre.trim(),
        contraseña: contraseña.trim()
      });

      const token = res.data.token;
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } catch (err) {
      const mensaje = err.response?.data?.error || 'Error de conexión';
      setError(mensaje);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow border-0 p-4" style={{ borderRadius: '16px' }}>
            <div className="card-body">
              <div className="text-center mb-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                  alt="Logo"
                  style={{ width: '60px' }}
                  className="mb-2"
                />
                <h3 className="fw-bold">Iniciar sesión</h3>
                <p className="text-muted">Accede con tu cuenta institucional</p>
              </div>

              <form onSubmit={handleLogin}>
                <div className="form-group mb-3 position-relative">
                  <FaUser className="position-absolute text-muted" style={{ top: '12px', left: '12px' }} />
                  <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="form-control ps-5 py-2"
                    style={{ borderRadius: '8px' }}
                    required
                  />
                </div>

                <div className="form-group mb-4 position-relative">
                  <FaLock className="position-absolute text-muted" style={{ top: '12px', left: '12px' }} />
                  <input
                    type="password"
                    placeholder="DNI"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    className="form-control ps-5 py-2"
                    style={{ borderRadius: '8px' }}
                    required
                  />
                </div>

                {error && <div className="alert alert-danger">{error}</div>}

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 d-flex justify-content-center align-items-center"
                  disabled={loading}
                  style={{ borderRadius: '8px', fontWeight: '500' }}
                >
                  {loading ? <ImSpinner2 className="spinner-border spinner-border-sm me-2" /> : 'Ingresar'}
                </button>
              </form>

              <div className="text-center mt-4">
                <p className="mb-2">¿No tienes una cuenta?</p>
                <Link to="/register" className="btn btn-outline-primary btn-sm px-4" style={{ borderRadius: '6px' }}>
                  Crear cuenta
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 text-muted small">
            © {new Date().getFullYear()} Nombre de la Institución. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
