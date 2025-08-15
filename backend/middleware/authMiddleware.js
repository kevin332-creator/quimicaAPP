const jwt = require('jsonwebtoken');

exports.verificarToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log('🔐 Authorization Header:', authHeader);

  if (!authHeader) return res.status(403).json({ error: 'No se proporcionó token' });

  const token = authHeader.split(' ')[1];
  console.log('🔐 Token extraído:', token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('✅ Token decodificado:', decoded);

    req.usuario = decoded;
    next();
  } catch (error) {
    console.error('❌ Error al verificar token:', error.message);
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};
