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

  if (loading || !usuario) return <p>Cargando perfil...</p>;

  return (
    <div>
      <h1>Mi Perfil</h1>
      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Rol:</strong> {usuario.rol}</p>
      <p><strong>Avatar:</strong> {usuario.avatar}</p>
      <p><strong>Estado:</strong> {usuario.estado}</p>
      <p><strong>Teléfono:</strong> {usuario.telefono}</p>
      <p><strong>Dirección:</strong> {usuario.direccion}</p>
      <p><strong>Fecha de registro:</strong> {usuario.created_at}</p>
    </div>
  );
}

export default Perfil;
