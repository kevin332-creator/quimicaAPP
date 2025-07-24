// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// 👉 Interceptor para añadir el token en cada petición
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
