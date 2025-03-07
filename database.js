const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./todo.db', (err) => {
    if (err) {
        console.error('Error connecting to the database', err.message);
    } else {
        console.log('Connected to the todo database.');
    }
});


db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, title TEXT, description TEXT, isComplete INTEGER DEFAULT 0)", (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Table created or already exists.');
        }
    });
});

module.exports = db;
