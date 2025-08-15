const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const dotenv = require('dotenv');
const os = require('os');

// Configurar variables de entorno
dotenv.config();

const app = express();
const server = http.createServer(app);

// 1. Detección automática de interfaces de red
const getNetworkInterfaces = () => {
  const interfaces = os.networkInterfaces();
  const results = [];

  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]) {
      // Solo IPv4 y no es localhost
      if (net.family === 'IPv4' && !net.internal) {
        results.push({
          name,
          address: net.address,
          netmask: net.netmask
        });
      }
    }
  }
  return results;
};

// 2. Configuración dinámica de CORS
const allowedOrigins = new Set([
  'http://localhost:5173',
  'http://127.0.0.1:5173'
]);

// Agregar todas las IPs locales automáticamente
getNetworkInterfaces().forEach(net => {
  allowedOrigins.add(`http://${net.address}:5173`);
  console.log(`🔌 Red detectada: ${net.name} - ${net.address}`);
});

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.has(origin)) {
      callback(null, true);
    } else {
      console.warn(`⚠️ Intento de conexión bloqueado desde: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// 3. Configuración de WebSocket con CORS dinámico
const io = socketio(server, {
  cors: {
    origin: Array.from(allowedOrigins),
    methods: ['GET', 'POST']
  }
});

// Ruta raíz mejorada con info de red
app.get('/', (req, res) => {
  const networkInfo = getNetworkInterfaces().map(net => ({
    interface: net.name,
    ip: net.address,
    accessible: `http://${net.address}:${PORT}`
  }));

  res.json({
    status: '✅ API del juego de química funcionando',
    networks: networkInfo,
    websocket: `ws://${req.hostname}:${PORT}`
  });
});

// Rutas principales
app.use('/api/auth', require('./routes/auth'));
app.use('/api/cursos', require('./routes/curso'));

// 4. WebSockets con logger mejorado
io.on('connection', (socket) => {
  const clientIp = socket.handshake.headers['x-forwarded-for'] || socket.handshake.address;
  console.log(`🧠 Nuevo cliente conectado desde: ${clientIp}`);

  socket.on('puntaje', (data) => {
    console.log(`🏆 Puntaje recibido: ${JSON.stringify(data)}`);
    io.emit('actualizar-ranking', data);
  });

  socket.on('disconnect', (reason) => {
    console.log(`❌ Cliente desconectado (${reason}) - IP: ${clientIp}`);
  });

  socket.on('error', (err) => {
    console.error(`💥 Error en Socket: ${err.message} - IP: ${clientIp}`);
  });
});

// 5. Iniciar servidor con detección automática
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

server.listen(PORT, HOST, () => {
  console.log(`🚀 Servidor principal corriendo en http://localhost:${PORT}`);
  
  // Mostrar todas las URLs accesibles
  getNetworkInterfaces().forEach(net => {
    console.log(`🌐 Accesible en la red local: http://${net.address}:${PORT}`);
  });
});

// 6. Manejo de errores global
process.on('unhandledRejection', (err) => {
  console.error('⚠️ Error no manejado:', err);
});

process.on('uncaughtException', (err) => {
  console.error('💥 Excepción no capturada:', err);
});