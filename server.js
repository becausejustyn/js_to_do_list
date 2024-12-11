// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '.')));

// Array to store todos (in a real app, you'd use a database)
let todos = [];

// Routes for todo operations
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const newTodo = req.body.todo;
    todos.push(newTodo);
    res.json(todos);
});

app.delete('/todos/:index', (req, res) => {
    const index = parseInt(req.params.index);
    todos.splice(index, 1);
    res.json(todos);
});

// Start the server
app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
});