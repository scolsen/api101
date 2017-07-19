const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const books = require('./resources/books');

app.use(bodyParser.json());

notFound = {
    Error: "Could not find the specified resource"
};

app.get('/', (req, res)=>{
    res.json({Error: 'Please specify a valid endpoint'});
});

app.get('/books', (req, res)=>{
    res.json(books);
});

app.get('/books/:id', (req, res)=>{
    if (books.hasOwnProperty(req.params.id)){
        res.json(books[req.params.id]);
    } else {
        res.json(notFound);
    }
});

app.get('books/:author', (req, res)=>{
    if (books.hasOwnProperty(req.params.author)){
        res.json(books[req.params.author]);
    } else {
        res.json(notFound);
    }
});

app.post('/books/:id/comments', (req, res)=>{
    let nextCommentIndex = books[req.params.id].Comments.length; 
   if(req.body.hasOwnProperty('user') && req.body.hasOwnProperty('content')){
        books[req.params.id].Comments[nextCommentIndex] = req.body; 
   } 
   res.json(books[req.params.id].Comments);
});

app.get('/books/filter', (req, res)=>{
    let result = {};
    for (book in books) {
        if (book.Availible === req.query.availible && book.Rating >= req.query.rating){
            result[book] = book;
        }
    } 
    res.json(result);
});
