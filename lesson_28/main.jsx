import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';

export default class Main extends React.Component {
  constructor(){
    super()
  }

  render(){
  return(
   <h1>Hello! I am Main component</h1>
  )
}
}

