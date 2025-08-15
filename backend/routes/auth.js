const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verificarToken } = require('../middleware/authMiddleware');

// Ruta para login
router.post('/login', authController.login);

// Ruta para registrar usuarios
router.post('/register', authController.registrarUsuario);

// Ruta protegida para obtener el usuario actual
router.get('/me', verificarToken, authController.me);

// ✅ Nueva ruta: obtener todos los inicios de sesión (requiere token)
router.get('/logins', verificarToken, authController.obtenerLogins);

router.get('/usuarios', verificarToken, authController.obtenerUsuariosPorRol);
// ✅ Eliminar estudiante
router.delete('/usuarios/:id', verificarToken, authController.eliminarEstudiante);

module.exports = router;
