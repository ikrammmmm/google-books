import React,{Component}  from 'react';
import {saveBook,deleteBook} from "../helpers/api_helper"


export default class Bookcard extends Component {
    Addtofav = async (book) =>
    {
     
        var data = await saveBook(book)
        data = data.data
        if(data.error)
        {
            alert(data.message);
        }
        else{
            alert(data.message);
        }
    }
    delete = async (book) =>
    {
        var id = book._id;
        var data = await deleteBook(id)
        data = data.data
        if(!data.error)
        {
            this.props.deleteBook(book.book_id)
            alert(data.message);
        }
        else{
            alert(data.message);
        }
    }
    render()
    {
        var book = this.props.book
        var btn_class = "btn-success";
        var btn_text   = "Save Book"
        if(this.props.saved) {
            btn_class = "btn-danger";
            btn_text   = "Remove"
        }
        var image = "";
        var authorsObject = book.authors;
        var authors = ""
        var link = book.link ? book.link : "#";
        var description = book.description ? book.description.substring(0, 80) : '' ;
        if(authorsObject)
        {  
            authorsObject.map((author,index) =>{
                if(index ==2) authors += ", "
                authors += author;
                })
        }
        if(book.image){} image = book.image;
        return (
            <div className="col col-md-4 card m-1" >
                <img className="card-img-top img-thumbnail" src={image}  alt="Card image cap"/>
                <div class="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">Auhtors : {authors}</p>
                    <p className="card-text">Publisher : {book.publisher}</p>
                    <p className="card-text">Published Year : {book.publishedDate}</p>
                    <p className="card-text" title={book.description}>Description : {description}</p>
                    <div className="card-buton-row">
                        <a  href={link}  className="btn btn-primary">View Book</a>
                        <a className={"btn  float-right "+btn_class} onClick={ this.props.saved ? () => this.delete(book) :  () => this.Addtofav(book)}>{btn_text}</a>
                    </div>
                </div>
            </div>
        )
    }
}