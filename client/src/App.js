import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

import Header from './templates/header';
import Home from './pages/home';
import Saved from './pages/saved';

function App() {
  
  return (
    <Router>
      <Header/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/saved" component={Saved}/>
      </Switch>
    </Router>
  );
}

export default App;
