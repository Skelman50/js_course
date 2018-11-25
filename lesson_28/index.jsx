import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import About from './about';
import NotFound from './not_found';
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';


function Ololo(){
  return(
    <div>
    <Link to="/">Home</Link>
    <Link to="/about">ABOUT</Link>
    </div>
  )
}

class Boss extends React.Component {
 
  render(){
  return(
   
    <Router>
      <div>
      <Ololo />
      <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About} />
      <Route path="/404" component={NotFound} />
      <Redirect from='*' to='/404' />
      </Switch>
      </div>
    </Router>
 
  )
  }
}

ReactDOM.render(<Boss />, document.getElementById('root'));