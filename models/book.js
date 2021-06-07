const  mongoose =  require('mongoose');

const bookSchema = mongoose.Schema({
    title  : String,
    link :String,
    book_id : String,
    authors : Array,
    publisher : String,
    publishedDate : String,
    description : String,
    image : String,
    date: {
        type : Date,
        default :new Date()
    }
})
const Book  = mongoose.model('Books', bookSchema);
module.exports = Book;
