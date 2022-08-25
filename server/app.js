const express = require('express');
const books = require('./api.json')
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())

function getRandomBook() {
    let book = Math.floor(Math.random() * 10);
    return books[book]
}

app.get('/', (req, res) => {
    res.send('Hello Book Lover!')
})

app.get('/books', (req, res) => {
    res.send(books);
})

app.get('/random-book', (req, res) => {
    res.send(getRandomBook(books));
})

app.get('/books/:id', (req, res) => {
    if (req.params.id < 0 || req.params.id > 9) {
        throw Error('book id: ' + req.params.id + ' does not exist')
    }
    res.send(books[req.params.id])
})

module.exports = app;
