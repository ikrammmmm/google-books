import axios from 'axios';
require("dotenv").config()

var appPort = process.env.PORT || 3000;
export  function getBooks(searchText)
{
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+searchText+"&maxResults=20&key=AIzaSyCf-hE4wospNNs_NCIQOlX2LceaXcWYgdE");
}
export async function saveBook(book)
{
    const data  = await axios.post(`http://localhost:3000/api/books`,  book);
    return data;
}
export async function getSavedBooks()
{
    return await axios.get(`http://localhost:3000/api/books`);
}
export async function deleteBook(id)
{
    return axios.post(`http://localhost:3000/api/books/`+id);
}