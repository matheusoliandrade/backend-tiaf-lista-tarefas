const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

// Rota para criar nova tarefa
router.post('/tarefas', tarefaController.createTarefa);

// Rota para listar todas as tarefas
router.get('/tarefas', tarefaController.getTarefas);

// Rota para obter uma tarefa específica
router.get('/tarefas/:id', tarefaController.getTarefaById);

// Rota para atualizar uma tarefa
router.put('/tarefas/:id', tarefaController.updateTarefa);

// Rota para deletar uma tarefa
router.delete('/tarefas/:id', tarefaController.deleteTarefa);

module.exports = router;