// src/services/api.js
import axios from 'axios';

// Función para detectar automáticamente el entorno
const getBaseURL = () => {
  // En producción, usa ruta relativa
  if (import.meta.env.PROD) return '/api';
  
  // Detección automática para desarrollo
  const { hostname } = window.location;
  
  // Si se accede desde IP local (otro dispositivo en LAN)
  if (hostname.match(/^192\.168\.|^10\.|^172\.(1[6-9]|2[0-9]|3[0-1])\./)) {
    return `http://${hostname}:3000/api`; // Mismo host, puerto del backend
  }
  
  // Si es localhost pero desde un dispositivo móvil en la misma red
  const localIP = sessionStorage.getItem('localBackendIP');
  if (localIP) return `http://${localIP}:3000/api`;
  
  // Default para desarrollo local
  return 'http://localhost:3000/api';
};

const API = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000,
});

// Interceptores (igual que antes)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;