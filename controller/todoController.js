const TodoService = require('../usecase/todoServices');

class TodoController {
    async create(req, res) {
        const { title, description } = req.body;
        try {
            const todo = await TodoService.createTodo(title, description);
            res.status(201).json(todo);
        } catch (err) {
            res.status(500).json({ error: 'Error creating todo' });
        }
    }

    async getAll(req, res) {
        try {
            const todos = await TodoService.getAllTodos();
            res.status(200).json(todos);
        } catch (err) {
            res.status(500).json({ error: 'Error retrieving todos' });
        }
    }

    async updateStatus(req, res) {
        const { id } = req.params;
        try {
            const todo = await TodoService.updateTodoStatus(id);
            if (!todo) {
                return res.status(404).json({ error: 'Todo not found' });
            }
            res.status(200).json(todo);
        } catch (err) {
            res.status(500).json({ error: 'Error updating todo status' });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            await TodoService.deleteTodo(id);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: 'Error deleting todo' });
        }
    }
}

module.exports = new TodoController();
