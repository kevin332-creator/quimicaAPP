const express = require('express');
const router = express.Router();
const { listarPreguntas, crearPregunta } = require('../controllers/preguntasController');

router.get('/', listarPreguntas);
router.post('/', crearPregunta);

module.exports = router;
