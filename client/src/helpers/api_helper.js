import axios from 'axios';

var appPort = process.env.PORT || 3000;

export  function getBooks(searchText)
{
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+searchText+"&key=AIzaSyBymRwgPrhIEygU7jCgkl1imHCjMwlO1gA&maxResults=18");
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