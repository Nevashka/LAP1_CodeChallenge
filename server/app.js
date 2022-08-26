const express = require('express');
// const books = require('./api.json')
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())

const books = [
    {book: "The Black Swan: The Impact of the Highly Improbable", author: "Nassim Nicholas Taleb"},
    {book: "The Second Sex", author: "Simone de Beauvoir"},
    {book: "Chatter. The voice in Our Head and How to Harness it", author: "Ethan Kross"},
    {book: "Persepolis", author: "Marjane Satrapi"},
    {book: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari"},
    {book: "Utopia for Realists and How We can get There", author: "Rutger Bregman"},
    {book: "The Drunkard's Walk: How Randomness Rules Our Live", author: "Leonard Mlodinow"},
    {book: "Thinking, Fast and Slow", author:"Daniel Kahneman"},
    {book: "Dune", author: "Frank Herbert"},
    {book: "The Sacred and The Profane: The Nature of Religion", author: "Mircea Eliade"}
]

function getRandomBook () {
    let book = Math.floor(Math.random() * books.length-1);

    return books[book]
}

app.get('/', (req, res) => {
    res.send('Hello Book Lover!')
})

app.get('/books', (req, res) => {
    res.send(books).status(200);
})

app.get('/random', (req, res) => {
    res.send(getRandomBook()).status(200)
})

// app.get('/random-book', (req, res) => {
//     res.send(getRandomBook(books));
// })

app.get('/books/:id', (req, res) => {

    
     if (books[req.params.id-1]) {

        res.send(books[req.params.id-1])

     } else {

        res.status(404).send({error: `Choose a number between 1 and ${books.length}`})
        
     }
})

module.exports = app;
