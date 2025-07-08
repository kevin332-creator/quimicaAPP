
// routes/curso.js
const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');
const { verificarToken } = require('../middleware/authMiddleware');

// ✅ Aquí sí accedes a cada función del controlador:
router.get('/docente', verificarToken, cursoController.obtenerCursosDocente);
router.get('/estudiante', verificarToken, cursoController.obtenerCursosEstudiante);
router.post('/crear', verificarToken, cursoController.crearCurso);
router.get('/elementos', verificarToken, cursoController.ElementosQuimicos);
router.get('/:id', verificarToken, cursoController.InfoCurso);
router.get('/:id/estudiantes', verificarToken, cursoController.EstudiantesCurso);
router.post('/:id/registrar-estudiante', verificarToken, cursoController.registrarYAgregarEstudiante);
router.post('/unirse', verificarToken, cursoController.unirseACursoPorCodigo);

module.exports = router;
