const db = require('../database'); // Koneksi ke SQLite

class TodoRepository {
    async add(todo) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO todos (title, description, isComplete) VALUES (?, ?, ?)`;
            db.run(sql, [todo.title, todo.description, todo.isComplete], function (err) {
                if (err) {
                    return reject(err);
                }
                todo.id = this.changes;
                resolve(todo);
            });
        });
    }

    async getAll() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM todos';
            db.all(sql, [], (err, rows) => {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    async getById(id) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM todos WHERE id = ?';
            db.get(sql, [id], (err, row) => {
                if (err) {
                    reject(err);
                }
                resolve(row);
            });
        });
    }

    async update(todo) {
        return new Promise((resolve, reject) => {
            const sql = `UPDATE todos SET title = ?, description = ?, isComplete = ? WHERE id = ?`;
            db.run(sql, [todo.title, todo.description, todo.isComplete, todo.id], function (err) {
                if (err) {
                    reject(err);
                }
                resolve(todo);
            });
        });
    }

    async delete(id) {
        return new Promise((resolve, reject) => {
            const sql = 'DELETE FROM todos WHERE id = ?';
            db.run(sql, [id], function (err) {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }
}

module.exports = new TodoRepository();
