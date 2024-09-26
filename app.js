const express = require('express');
const app = express();
const tarefaRoutes = require('./routes/tarefaRoutes');

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/api', tarefaRoutes);

// Exporta o app para ser utilizado no server.js
module.exports = app;