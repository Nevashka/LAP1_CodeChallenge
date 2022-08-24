const express = require('express');
const app = express();
const cors = require('cors');

const books = require('./api.js'); //API containing books

app.use(cors())
app.use(express.json())


function getRandomBook () {
    let book = Math.floor(Math.random()*10);
    return books[book]
}


module.exports = app;
