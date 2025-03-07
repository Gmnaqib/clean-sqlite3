class Todo {
    constructor(id, title, description, isComplete = 0) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isComplete = isComplete;
    }

    complete() {
        this.isComplete = 1;
    }

    uncomplete() {
        this.isComplete = 0;
    }
}

module.exports = Todo;
