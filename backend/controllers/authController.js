const db = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Login de usuario
exports.login = async (req, res) => {
    const { nombre, contraseña } = req.body;
    try {
      const [rows] = await db.query('SELECT * FROM usuarios WHERE nombre = ?', [nombre]);
      const usuario = rows[0];
  
      if (!usuario) {
        return res.status(401).json({ error: 'Usuario no encontrado' });
      }
  
      const match = await bcrypt.compare(contraseña, usuario.contraseña_hash);
      if (!match) {
        return res.status(401).json({ error: 'Contraseña incorrecta' });
      }
  
      // ✅ GUARDAR LOG DEL INICIO DE SESIÓN
      await db.query(
        'INSERT INTO login_logs (usuario_id, nombre) VALUES (?, ?)',
        [usuario.id, usuario.nombre]
      );
  
      // Generar token
      const token = jwt.sign(
        { id: usuario.id, rol: usuario.rol },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.json({ token });
    } catch (error) {
      console.error('❌ Error en login:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };
  

// Registrar nuevo usuario
exports.registrarUsuario = async (req, res) => {
  const { nombre, apellidos, contraseña, rol } = req.body;
  try {
    const hash = await bcrypt.hash(contraseña, 8);
    await db.query(
      'INSERT INTO usuarios (nombre, apellidos, contraseña_hash, rol) VALUES (?, ?, ?, ?)',
      [nombre, apellidos, hash, rol]
    );
    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('❌ Error en registro:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
};

// Obtener perfil (usado por el frontend)
exports.getPerfil = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id, nombre, apellidos, rol FROM usuarios WHERE id = ?', [req.user.id]);
    const usuario = rows[0];

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    console.error('❌ Error al obtener perfil:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

// Ruta protegida para obtener usuario autenticado
exports.me = async (req, res) => {
  try {
    console.log('🔎 Usuario desde token:', req.usuario);
    const idUsuario = req.usuario.id;

    const [rows] = await db.query(
      'SELECT id, nombre, apellidos, estado, rol FROM usuarios WHERE id = ?',
      [idUsuario]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    return res.json(rows[0]);
  } catch (error) {
    console.error('❌ Error en /me:', error.message);
    return res.status(500).json({ error: 'Error del servidor al obtener el usuario' });
  }
};

exports.obtenerLogins = async (req, res) => {
    try {
      const { id: usuarioId, rol } = req.usuario;
  
      let query = `
        SELECT l.id,  l.fecha, u.nombre, u.apellidos, u.rol
        FROM login_logs l
        JOIN usuarios u ON l.usuario_id = u.id
      `;
  
      let where = '';
      let params = [];
  
      if (rol === 'docente') {
        where = `WHERE u.rol IN (?, ?) OR u.id = ?`;
        params = ['estudiante', 'docente', usuarioId]; // Su propio login + estudiantes
      } else if (rol === 'estudiante') {
        where = `WHERE u.rol = ?`;
        params = ['estudiante'];
      }
  
      query += where ? ` ${where}` : '';
      query += ' ORDER BY l.fecha DESC';
  
      const [logs] = await db.query(query, params);
      res.json(logs);
    } catch (error) {
      console.error('❌ Error al obtener logins:', error);
      res.status(500).json({ mensaje: 'Error al obtener logins' });
    }
  };
  
  
  exports.obtenerUsuariosPorRol = async (req, res) => {
    try {
      const rolUsuario = req.usuario.rol;
  
      let query = 'SELECT id, nombre, apellidos, rol FROM usuarios';
      let params = [];
  
      if (rolUsuario === 'docente') {
        query += ' WHERE rol IN (?, ?)';
        params = ['docente', 'estudiante'];
      } else if (rolUsuario === 'estudiante') {
        query += ' WHERE rol = ?';
        params = ['estudiante'];
      }
  
      const [usuarios] = await db.query(query, params);
      res.json(usuarios);
    } catch (error) {
      console.error('❌ Error al obtener usuarios por rol:', error);
      res.status(500).json({ mensaje: 'Error al obtener usuarios' });
    }
  };
  // ✅ Eliminar estudiante por ID
exports.eliminarEstudiante = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    const usuario = rows[0];

    if (usuario.rol !== 'estudiante') {
      return res.status(403).json({ mensaje: 'Solo se pueden eliminar estudiantes' });
    }

    // Solo docentes o admin pueden eliminar
    if (req.usuario.rol !== 'docente' && req.usuario.rol !== 'admin') {
      return res.status(403).json({ mensaje: 'No autorizado para eliminar estudiantes' });
    }

    await db.query('DELETE FROM usuarios WHERE id = ?', [id]);

    res.json({ mensaje: 'Estudiante eliminado correctamente' });
  } catch (error) {
    console.error('❌ Error al eliminar estudiante:', error);
    res.status(500).json({ mensaje: 'Error al eliminar estudiante' });
  }
};