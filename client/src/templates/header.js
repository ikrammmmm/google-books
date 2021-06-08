import React,{Component}  from 'react';


export default class Header extends Component {
  componentDidMount() {
    document.title = 'Google Book Search';
  }
    render()
    {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Google Books Saver</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link " href="/">Search </a>
                <a class="nav-item nav-link" href="/saved">Saved Books</a>
            
              </div>
            </div>
          </nav>
        )
    }
}