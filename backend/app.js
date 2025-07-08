// app.js
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const dotenv = require('dotenv');

// Configurar variables de entorno
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: { origin: '*' },
});

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta raíz para prueba
app.get('/', (req, res) => {
  res.send('✅ API del juego de química funcionando');
});

// Rutas principales
app.use('/api/auth', require('./routes/auth'));
app.use('/api/cursos', require('./routes/curso'));


// WebSockets
io.on('connection', (socket) => {
  console.log('🧠 Nuevo cliente conectado');

  socket.on('puntaje', (data) => {
    io.emit('actualizar-ranking', data);
  });

  socket.on('disconnect', () => {
    console.log('❌ Cliente desconectado');
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
