import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';

export default class About extends React.Component {
  constructor(){
    super()
  }

  render(){
  return(
   <h1>And I am About component</h1>
  )
}
}

