import React,{Component}  from 'react';
import {getSavedBooks} from "../helpers/api_helper"
import Bookcard from "../templates/bookcard"

export default class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state= {
            books : [],
            isEmpty : true,
        }
    }
    componentDidMount() {
        getSavedBooks()
        .then(data =>{
            this.setState({books : data.data})
            if(data.data.length>0)  this.setState({isEmpty : false})
              
        })
    }
     deleteBook = (book_id)=>
    {
        var books = this.state.books;
       var newbooks = books.filter(function(book){ 
            return book_id != book.book_id;
        });
    
        this.setState({books : newbooks})
        if(newbooks.length>0)  this.setState({isEmpty : false})
        else this.setState({isEmpty : true})
    }
    
    render()
    {
        var  {isEmpty,books} = this.state;
        return (
          <div className="container mt-4">
              <div className="row  d-flex justify-content-center">
                    <div className="col ">
                        <center><h1>Google Book Search</h1></center>
                    </div>
              </div>
              <div className="row  d-flex justify-content-center mt-4">

              {isEmpty ? (
                   <center>No Books Found</center>
                    
                ) : (
                    
                    books.map( (book,index) =>{
                        
                        
                        
                        return (
                            <Bookcard key={index} book={book} saved={true} deleteBook={this.deleteBook}/>
                    )
                    })
                        
                        
                )}
                    </div>

             
          </div>
        )
    }
}