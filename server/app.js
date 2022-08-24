const express = require('express');
const app = express();
const cors = require('cors');
// const router = express.Router();

const books = require('./api.js'); //API containing books

app.use(cors())
app.use(express.json())


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

// app.get('/books/:id', (req, res) => {
   
//     const bookId = parseInt(req.params.id);
//     const selectedBook = books.findById(bookId)

//     res.send(selectedBook);
   
    // try {
        
    // } catch(err) {
    //     console.log(err);
    //     res.status(404).send('Sorry this book is not in our repository')
    // }
})

module.exports = app;
