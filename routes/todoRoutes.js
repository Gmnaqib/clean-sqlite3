const express = require('express');
const router = express.Router();
const TodoController = require('../controller/todoController');

router.post('/todos', TodoController.create);
router.get('/todos', TodoController.getAll);
router.patch('/todos/:id', TodoController.updateStatus);
router.delete('/todos/:id', TodoController.delete);

module.exports = router;
