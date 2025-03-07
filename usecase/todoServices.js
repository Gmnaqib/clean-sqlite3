const TodoRepository = require('../repository/todoRepository');
const Todo = require('../domain/todo');

class TodoService {
    async createTodo(title, description) {
        const todo = new Todo(null, title, description); // Membuat entitas Todo baru
        return await TodoRepository.add(todo); // Menyimpan ke repository
    }

    async getAllTodos() {
        return await TodoRepository.getAll();
    }

    async updateTodoStatus(id) {
        const todo = await TodoRepository.getById(id);
        if (todo) {
            todo.complete();
            return await TodoRepository.update(todo);
        }
        return null;
    }

    async deleteTodo(id) {
        return await TodoRepository.delete(id);
    }
}

module.exports = new TodoService();
