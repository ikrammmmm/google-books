import React,{Component}  from 'react';
import {getBooks} from "../helpers/api_helper"
import Bookcard from "../templates/bookcard"

export default class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state= {
            books : [],
            isLoaded : true,
            searchText: null,
            isEmpty: true
        }
    }
    
    updateSearchText = (event) =>
    {
        
        if(event.target.value)
        {
            this.setState({isLoaded : false})
            this.setState({searchText : event.target.value})
        }
        else
        {
            this.setState({isLoaded : true})
            this.setState({isEmpty : true})
        }
        
    }
  
    searchBooks = () =>
    {
        var searchText = this.state.searchText;
        getBooks(searchText)
            .then(data =>{
               if(data.data.items)
               {
                    this.setState({books : data.data.items})   
                    this.setState({isEmpty : false}) 
                    this.setState({isLoaded : true})
               }
               else{
                this.setState({books : []})   
                 this.setState({isEmpty : true})
                 this.setState({isLoaded : true})
               }
                
              
                

            })
    }
    render()
    {
        var  {isEmpty,books,isLoaded,searchText} = this.state;
        return (
          <div className="container mt-4">
              <div className="row  d-flex justify-content-center">
                    <div className="col ">
                        <center><h1>Google Book Search</h1></center>
                    </div>
              </div>
              <div className="row  d-flex justify-content-center">

                      <div className="col col-md-6">
                      <input type="text" value={this.searchText}  onChange={e => this.updateSearchText(e)} className="form-control"/>

                      </div>
                      <div className="col col-md-3">
                      <button type="button" className="btn btn-success" onClick={this.searchBooks}>Search</button>

                      </div>
              </div>
              <div className="row  d-flex justify-content-center">

              {searchText && !isLoaded ? (
                   <div className="row  d-flex justify-content-center mt-4">
                       <div className="col">
                            <center>Searching...</center>
                        </div>
                   </div>
                    
                ) : isEmpty ? 
                    <div className="row  d-flex justify-content-center mt-4">
                         <div className="col">
                            <center>No Books Found...</center>
                         </div>
                     </div>   : 
                     (
                    <div className="row  d-flex justify-content-center mt-4">
                    {books.map( (book,index) =>{
                        var image = "";
                        var authorsObject = book.volumeInfo.authors;
                        var link = book.volumeInfo.canonicalVolumeLink ? book.volumeInfo.canonicalVolumeLink : "#";
                        if(book.volumeInfo.imageLinks) image = book.volumeInfo.imageLinks.smallThumbnail;
                        var viewingbook =
                            {
                                title: book.volumeInfo.title,
                                image: image,
                                book_id: book.id,
                                link:link,
                                description : book.volumeInfo.description,
                                authors : authorsObject,
                                publisher : book.volumeInfo.publisher,
                                publishedDate : book.volumeInfo.publishedDate
                            }
                        
                        return (
                            <Bookcard book={viewingbook} saved={false}/>
                    )
                    })}
                    </div>
                        
                        
                )}
                    </div>

             
          </div>
        )
    }
}