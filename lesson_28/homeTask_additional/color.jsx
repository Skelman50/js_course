import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';


export class Color extends React.Component {

    render(){
       let color = this.props.match.params.color;
        if(color==="rand") {
            let red = Math.round(-0.5 + Math.random() * 256);
            let green = Math.round(-0.5 + Math.random() * 256);
            let blue = Math.round(-0.5 + Math.random() * 256);
            color = `rgb(${red},${green},${blue})`
        }
        
        return(
            <div style={{background:color,width:"100vw",height:"100vh",paddingTop:"50%"}}>
            
            </div>
        )
    }
}

export class Text extends React.Component {

    render(){
        let text = this.props.match.params.text;
        let color = this.props.match.params.color;
        if(color==="rand") {
            let red = Math.round(-0.5 + Math.random() * 256);
            let green = Math.round(-0.5 + Math.random() * 256);
            let blue = Math.round(-0.5 + Math.random() * 256);
            color = `rgb(${red},${green},${blue})`
        }
       
        return(
           <div style={{background:color,width:"100vw",height:"100vh",paddingTop:"50%"}}>
           <h1 style={{textAlign:"center"}}>{text}</h1>
           </div>
        )
    }
}

