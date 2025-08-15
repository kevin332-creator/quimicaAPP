const mysql = require('mysql2/promise');
require('dotenv').config({ path: '.env', override: true });

// Debug: muestra las variables cargadas
console.log('Configuración DB:', {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME
});

const pool = mysql.createPool({
  host: process.env.DB_HOST,
   port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, // ¡Esta línea es crucial!
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  charset: 'utf8mb4'
});

// Verificación mejorada
pool.getConnection()
  .then(conn => {
    console.log('✅ Conexión exitosa a:', conn.config.database);
    conn.release();
  })
  .catch(err => {
    console.error('❌ Error de conexión:', {
      message: err.message,
      code: err.code,
      stack: err.stack
    });
    process.exit(1);
  });

module.exports = pool;