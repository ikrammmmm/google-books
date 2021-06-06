import axios from 'axios';



export default function getBooks(searchText)
{
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+searchText+"&key=AIzaSyBymRwgPrhIEygU7jCgkl1imHCjMwlO1gA&maxResults=18")
}