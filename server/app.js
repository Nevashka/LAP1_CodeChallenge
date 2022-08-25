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
    if (books[req.params.id-1]) {
        res.send(books[req.params.id-1])
     } else {
        res.status(404).send({error: `Choose a number between 1 and ${books.length}`})
     }
})

module.exports = app;
