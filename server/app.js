const express = require('express');
const app = express();
const cors = require('cors');
// const router = express.Router();

// const books = require('./api.js'); //API containing books

app.use(cors())
app.use(express.json())

const books = [
    {id:"1", book: "The Black Swan: The Impact of the Highly Improbable", author: "Nassim Nicholas Taleb"},
    {id:"2", book: "The Second Sex", author: "Simone de Beauvoir"},
    {id:"3", book: "Chatter. The voice in Our Head and How to Harness it", author: "Ethan Kross"},
    {id:"4", book: "Persepolis", author: "Marjane Satrapi"},
    {id:"5",book: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari"},
    {id:"6",book: "Utopia for Realists and How We can get There", author: "Rutger Bregman"},
    {id:"7", book: "The Drunkard's Walk: How Randomness Rules Our Live", author: "Leonard Mlodinow"},
    {id:"8", book: "Thinking, Fast and Slow", author:"Daniel Kahneman"},
    {id:"9", book: "Dune", author: "Frank Herbert"},
    {id:"10", book: "The Sacred and The Profane: The Nature of Religion", author: "Mircea Eliade"}
]

function getRandomBook () {
    let book = Math.floor(Math.random()*10);
    return books[book]
}

app.get('/', (req, res) => {
    res.send('Hello Book Lover!')
})

app.get('/books', (req, res) => {
    res.send(books);
})

app.get('/books/:id', (req, res) => {

     try {

        res.send(books[req.params.id])

    } catch(err) {
''
        res.json(err);
        res.status(404).send(err);

      }
})

module.exports = app;
