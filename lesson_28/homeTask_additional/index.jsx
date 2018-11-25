import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';
import {Color, Text} from './color'

class Main extends React.Component {

  render(){
    return(
      <Router>
         <div>
         <Route path="/color/:color/" exact component = {Color} />  
         <Route path="/color/:color/:text/:text" component = {Text} /> 
         </div>
      </Router>
    )
  }
}


ReactDOM.render(<Main />, document.getElementById('root'));