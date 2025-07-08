const db = require('../database');
const bcrypt = require('bcrypt');

// ✅ Obtener cursos creados por un docente autenticado
exports.obtenerCursosDocente = async (req, res) => {
  try {
    const docenteId = req.usuario.id;
    console.log('📘 Cursos del docente:', docenteId);

    const [cursos] = await db.query(
      'SELECT * FROM cursos WHERE docente_id = ?', [docenteId]
    );

    if (cursos.length === 0) {
      return res.status(200).json({ mensaje: 'Sin cursos creados aún', cursos: [] });
    }

    res.json(cursos);
  } catch (error) {
    console.error('❌ Error al obtener cursos del docente:', error);
    res.status(500).json({ error: 'Error interno al obtener cursos del docente' });
  }
};

// ✅ Obtener cursos donde está inscrito el estudiante
exports.obtenerCursosEstudiante = async (req, res) => {
  try {
    const estudianteId = req.usuario.id;
    const [cursos] = await db.query(`
      SELECT c.*
      FROM cursos c
      JOIN curso_estudiantes ce ON c.id = ce.curso_id
      WHERE ce.estudiante_id = ?
    `, [estudianteId]);

    if (cursos.length === 0) {
        return res.status(200).json({ mensaje: 'No tienes cusos', cursos: [] });
      }
    res.json(cursos);
  } catch (error) {
    console.error('❌ Error al obtener cursos del estudiante:', error);
    res.status(500).json({ error: 'Error interno al obtener cursos del estudiante' });
  }
};

// ✅ Crear curso (solo docente)
exports.crearCurso = async (req, res) => {
  try {
    const { nombre, codigo, fecha_inicio, fecha_fin } = req.body;
    const docenteId = req.usuario.id;

    const [result] = await db.query(`
      INSERT INTO cursos (nombre, codigo, docente_id, fecha_inicio, fecha_fin)
      VALUES (?, ?, ?, ?, ?)
    `, [nombre, codigo, docenteId, fecha_inicio, fecha_fin]);

    res.status(201).json({ id: result.insertId, nombre, codigo });
  } catch (error) {
    console.error('❌ Error al crear curso:', error);
    res.status(500).json({ error: 'Error al crear curso' });
  }
};

//
exports.InfoCurso = async (req, res) => {
    const cursoId = req.params.id;
    try {
      const [curso] = await db.query('SELECT * FROM cursos WHERE id = ?', [cursoId]);
  
      if (curso.length === 0) {
        return res.status(404).json({ mensaje: 'Curso no encontrado' });
      }
  
      res.json(curso[0]);
    } catch (error) {
      console.error('❌ Error al obtener curso:', error);
      res.status(500).json({ error: 'Error interno al obtener el curso' });
    }
  };

//
exports.EstudiantesCurso = async (req, res) => {
    const cursoId = req.params.id;
    try {
      const [estudiantes] = await db.query(`
        SELECT u.id, u.nombre, u.email
        FROM usuarios u
        INNER JOIN curso_estudiantes ce ON u.id = ce.estudiante_id
        WHERE ce.curso_id = ?
      `, [cursoId]);
  
      if (estudiantes.length === 0) {
        return res.status(404).json({ mensaje: 'No hay estudiantes registrados para el Curso.' });
      }

      res.json(estudiantes);
    } catch (error) {
      console.error('❌ Error al obtener estudiantes del curso:', error);
      res.status(500).json({ error: 'Error interno al obtener estudiantes' });
    }
  };
  

  exports.registrarYAgregarEstudiante = async (req, res) => {
    const cursoId = req.params.id;
    const { nombre, email, contraseña } = req.body;
  
    try {
      // Verificar si ya existe ese usuario
      const [usuariosExistentes] = await db.query('SELECT id FROM usuarios WHERE email = ?', [email]);
      if (usuariosExistentes.length > 0) {
        return res.status(400).json({ error: 'El email ya está registrado' });
      }
  
      // Crear estudiante
      const hash = await bcrypt.hash(contraseña, 10);
      const [resultado] = await db.query(
        'INSERT INTO usuarios (nombre, email, contraseña_hash, rol) VALUES (?, ?, ?, "estudiante")',
        [nombre, email, hash]
      );
      const estudianteId = resultado.insertId;
  
      // Agregarlo al curso
      await db.query('INSERT INTO curso_estudiantes (curso_id, estudiante_id) VALUES (?, ?)', [
        cursoId,
        estudianteId,
      ]);
  
      res.json({ mensaje: 'Estudiante registrado e inscrito correctamente' });
    } catch (error) {
      console.error('❌ Error al registrar estudiante:', error);
      res.status(500).json({ error: 'Error al registrar e inscribir estudiante' });
    }
  };
  

  exports.unirseACursoPorCodigo = async (req, res) => {
    const estudianteId = req.usuario.id;
    const { codigo } = req.body;
  
    try {
      // Buscar curso por código
      const [cursos] = await db.query('SELECT id FROM cursos WHERE codigo = ?', [codigo]);
      if (cursos.length === 0) {
        return res.status(404).json({ error: 'Curso no encontrado con ese código' });
      }
  
      const cursoId = cursos[0].id;
  
      // Verificar si ya está inscrito
      const [yaInscrito] = await db.query(
        'SELECT * FROM curso_estudiantes WHERE curso_id = ? AND estudiante_id = ?',
        [cursoId, estudianteId]
      );
      if (yaInscrito.length > 0) {
        return res.status(400).json({ error: 'Ya estás inscrito en este curso' });
      }
  
      // Inscribir estudiante
      await db.query(
        'INSERT INTO curso_estudiantes (curso_id, estudiante_id) VALUES (?, ?)',
        [cursoId, estudianteId]
      );
  
      res.json({ mensaje: 'Inscripción exitosa' });
    } catch (error) {
      console.error('❌ Error al unirse al curso:', error);
      res.status(500).json({ error: 'Error al unirse al curso' });
    }
  };
  

//
exports.ElementosQuimicos = async (req, res) => {
    try {
      const [elementos] = await db.query('SELECT * FROM elementos_quimicos');
      res.json(elementos); // <-- esto debe ser un array
    } catch (err) {
      console.error('❌ Error al obtener elementos:', err);
      res.status(500).json({ error: 'Error al obtener elementos químicos' });
    }
  };
  
  

