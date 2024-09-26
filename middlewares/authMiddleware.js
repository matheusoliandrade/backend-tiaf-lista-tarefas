const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'Nenhum token fornecido!' });
  }

  jwt.verify(token, 'secreta-chave', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido!' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;