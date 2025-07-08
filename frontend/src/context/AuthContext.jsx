import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    axios.get('http://localhost:3000/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      setUsuario(response.data); // { id, nombres, rol, ... }
    }).catch(err => {
      console.error('❌ Error al obtener usuario:', err);
      setUsuario(null);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
