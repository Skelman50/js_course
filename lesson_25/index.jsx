import React from 'react';
import ReactDOM from 'react-dom';


let arr = []
function Imagies(props){
  return(
    <div>
    <img src={`https://dummyimage.com/250x250/000/fff&text=${props.word}`} />
    </div>
  )
}

function Show(){
  return(
    <div> 
      <div id="header"></div>
    <input id="input"></input>
    <button onClick={asd}>Нажать</button>
    <div id='img'></div>
    </div>
   
  )
}

ReactDOM.render(<Show />,document.getElementById('root'))

function asd(){
  new Promise(function(res,rej){
    res(fetch (`https://api.datamuse.com/words?ml=${document.getElementById('input').value}`));
  })
  .then(res => res.json())
  .then(res=>res.map(function(element){
    arr.push(element)
    return arr;
   }))
   .then(function(res) {
   function ShowIMG(){
    return(
      <div>
      {arr.map((element,index)=>(
        <Imagies key={index} {...element} />
      ))}
      </div>
    )
  }
  
  ReactDOM.render(<ShowIMG />,document.getElementById('img'))
} 
    
    )
    .then(res=>arr=[])
  
}

function tick() {
  const element = (
    <div>
      <h1>Текущее время {new Date().toLocaleTimeString()}.</h1>
      <h2>Введите название картинки, которую желаете найти.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('header'));
}

setInterval(tick, 1000);




