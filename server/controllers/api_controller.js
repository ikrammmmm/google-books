var express = require('express');
var Book = require('../models/book.js');

var router      = express.Router();


async function getBooks() {
    let books = await Book.find();
    return books;
}
async function saveBook(book) {
    const newBook  = new Book(book);
    var  newbook = await newBook.save()
    return newbook;
}



router.get('/api/books/', async function (req, res) { 
        const books  = await getBooks()
        res.json(books)
   
})

router.post('/api/books/', async function (req, res) {
    var book_save  = req.body;
    const alreadyexist = await Book.findOne({"book_id" : book_save.book_id})
    if(alreadyexist)
    {
        res.status(201).json({message : "Book already exist ",error :true}); 
    }
    else
    {
        var book  = await saveBook(book_save)

        res.status(201).json({message : "Book added ",error :false}); 
        
    }
    
    
})
router.post('/api/books/:id', async function (req, res) {
    var book_save  = req.params;
    const book = await Book.findById(book_save.id)
    if (book) {
        await book.remove()
        res.json({ message: 'Book removed',error :false })
      } else {
        res.status(201).json({message : "Invalid Book",error :true})
      }
    
})

module.exports = router;