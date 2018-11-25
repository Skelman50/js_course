import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';

export default class NotFound extends React.Component {
  constructor(){
    super()
  }

  render(){
  return(
   <h1>404 NOT FOUND</h1>
  )
}
}

