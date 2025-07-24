// src/pages/Perfil.jsx
import { useEffect, useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const res = await API.get('/auth/me');
        setUsuario(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar perfil:', error);
        navigate('/');
      }
    };

    fetchPerfil();
  }, []);

  if (loading || !usuario) return <p className="text-center text-gray-600 mt-10">Cargando perfil...</p>;

  return (
    <div className="flex justify-center px-4"style={{ padding: '2px', borderradius: '8pxx', paddingleft: '4px' , paddingright:'4px'}}>
      <div className="max-w-xl w-full mt-10 bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-700">Mi Perfil</h1>
  
        <div className="flex items-center gap-3 justify-center mb-4">
          
        </div>
  
        <div className="flex flex-col gap-3 text-gray-700 text-center">
          <div>
          <img
              src="/user.webp"
              alt="Avatar"
              className="rounded-full"
              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
            /> <br />
            <span className="text-lg font-medium text-center">
              {usuario.nombre} {usuario.apellidos}
            </span>
          </div>
          <br />
          <p>
            <strong>
              <img
                src="/check.png"
                alt="Estado"
                className="inline-block mr-1"
                style={{ width: '20px', height: '20px', objectFit: 'cover' }}
              />
            </strong>
            <span style={{ color: usuario.estado === 1 ? 'green' : 'red' }}>
              {usuario.estado === 1 ? 'Activo' : 'Inactivo'}
            </span>
          </p>
  
          <p><strong>{usuario.rol}</strong> </p>
          <p><strong>Fecha de registro:</strong> {new Date(usuario.fecha_creacion).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
  
}

export default Perfil;
