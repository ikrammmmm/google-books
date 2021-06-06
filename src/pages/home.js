import React,{Component}  from 'react';
import getBooks from "../helpers/api_helper"

export default class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state= {
            books : [],
            isLoaded : true,
            searchText: null
        }
    }
    updateSearchText = (event) =>
    {
        this.setState({searchText : event.target.value})
    }
  
    searchBooks = () =>
    {
        var searchText = this.state.searchText;
        getBooks(searchText)
            .then(data =>{
                this.setState({books : data.data.items})
                this.setState({isLoaded : false})

            })
    }
    render()
    {
        var  {isLoaded,books,searching,searchText} = this.state;
        return (
          <div className="container mt-4">
              <div className="row">
                  <h1>Google Book Search</h1>
                  <div className="form-group col-md-6">
                      <input type="text" value={this.searchText}  onChange={e => this.updateSearchText(e)} className="form-control"/>
                      <button type="button" className="btn btn-success" onClick={this.searchBooks}>Search</button>
                  </div>
              </div>
              <div className="row  d-flex justify-content-center">

              {isLoaded ? (
                   <div>Loading...</div>
                    
                ) : (
                    
                    books.map( (book,index) =>{
                        var image = "";
                        var authorsObject = book.volumeInfo.authors;
                        console.log(book);
                        var authors = ""
                        var link = book.volumeInfo.canonicalVolumeLink ? book.volumeInfo.canonicalVolumeLink : "#";
                        var description = book.volumeInfo.description ? book.volumeInfo.description.substring(0, 80) : '' ;
                        if(authorsObject)
                        {  
                            authorsObject.map((author,index) =>{
                                if(index ==2) authors += ", "
                                authors += author;
                             })
                        }
                        //console.log(book.volumeInfo)
                        if(book.volumeInfo.imageLinks) image = book.volumeInfo.imageLinks.smallThumbnail;
                        return (
                            <div className="col col-md-3 card m-1" >
                                <img className="card-img-top img-thumbnail" src={image}  alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                                    <p className="card-text">Auhtors : {authors}</p>
                                    <p className="card-text">Publisher : {book.volumeInfo.publisher}</p>
                                    <p className="card-text">Published Year : {book.volumeInfo.publishedDate}</p>
                                    <div className="card-buton-row">
                                        <a  href={link}  className="btn btn-primary">View Book</a>
                                        <a className="btn btn-success float-right">Add to Fav</a>
                                    </div>
                                </div>
                            </div>
                    )
                    })
                        
                        
                )}
                    </div>

             
          </div>
        )
    }
}