// controllers/preguntasController.js

exports.listarPreguntas = (req, res) => {
    res.json([
      { id: 1, pregunta: '¿Qué es un átomo?', opciones: ['Molécula', 'Elemento básico', 'Protón'], respuesta: 'Elemento básico' },
      { id: 2, pregunta: '¿Qué es el H2O?', opciones: ['Ácido', 'Base', 'Agua'], respuesta: 'Agua' }
    ]);
  };
  
  exports.crearPregunta = (req, res) => {
    const { pregunta, opciones, respuesta } = req.body;
    res.status(201).json({ mensaje: 'Pregunta creada', pregunta, opciones, respuesta });
  };
  