import React from 'react';
import ReactDOM from 'react-dom';

// n | suits | nominal | color
// 1 | hurts | 10 | red
// 2 | clabs | queen | black




function Imagies (props){
    return (
        <img src={`https://dummyimage.com/250x250/000/fff&text=${props.word}`} />
      )
 }

function Show(){

  return (
      
    <div>
      <div id="header"></div>
      <input id="input" type="text"></input>
      <button onClick=
      {function Asd(){
          new Promise(function(res,rej){
          res(fetch (`https://api.datamuse.com/words?ml=${document.getElementById('input').value}`));
        })
        .then(res => res.json())
        .then(function(res) {
         res.map(function(elem) {
         function SSD() {
           return (
             <div>
              <Imagies {...elem} />
             </div>
           )
         }
        ReactDOM.render(<SSD/>,document.getElementById('img'))
      })
     
     })
          }}>Отобразить</button>    
      <div id="img"></div>
     </div>
  )
}

/*dfddf*/
ReactDOM.render(<Show />,document.getElementById('root'))

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

