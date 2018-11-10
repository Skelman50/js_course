
import CardData from './card_data'
let cardData = new CardData();

export default class UIController {
  constructor() {
  this.cardInput = document.getElementById('place');
  this.nameInput = document.getElementById('name');
  //this.nameInput.value = "";
  this.btn = document.getElementById('btn');
  this.table = document.getElementById('table');
  this.btn.disabled = true;
  this.result = document.getElementById('result');
}

checkCardInput(){
  if (this.cardInput.value.match(/^(\d{4}-){3}\d{4}/) && this.nameInput.value.length>1) {
      this.btn.disabled = false;
  }else{
      this.btn.disabled = true;
  }
    
      if (this.cardInput.value.match(/^(\d{4}-){3}\d{4}/)) {
          this.cardInput.style.outlineColor = "green";
   
      } else {
       
          this.cardInput.style.outlineColor = "red";
          
      }
        
}
checkNameInput (){
  let this1 = this;
    this.nameInput.addEventListener('input', function(){
if (this1.nameInput.value.length > 1) {
    this1.nameInput.style.outlineColor = "green";  
     this1.nameInput.style.border = "1px solid grey"; 
}else{   
    this1.nameInput.style.border = "1px solid red";
    this1.nameInput.style.outlineColor = "red";
}
    if (this1.cardInput.value.match(/^(\d{4}-){3}\d{4}/) && this1.nameInput.value.length>1) {
      this1.btn.disabled = false;
    }else{
      this1.btn.disabled = true;
    }

  })
}

useButton(){

        let this1= this;
        this.btn.addEventListener('click',function(){
        this1.cardInput.disabled = true;
        this1.nameInput.disabled = true;
        this1.btn.disabled = true;
        let r = document.getElementById('clear')
        if (r!=null) {r.remove()}
        
        let result = this1.cardInput.value.split('-').join('')
        this1.table.innerText = 'LOADING...'
        let promise = new Promise(function(res,rej){
        res(cardData.getInfo(result))
        })
    .then(res => {
        let lstrgSer = JSON.stringify(res)
        localStorage.setItem("table", lstrgSer)
        table.innerText = "";
        for (let key in res) {
        let tr = document.createElement('tr')
        this1.table.append(tr)
        let td1 = document.createElement('td')
        tr.append(td1)
        td1.innerText = key[0].toUpperCase() + key.slice(1);
        let td2 = document.createElement('td')
        tr.append(td2)
        td2.innerText = res[key];
        if (res[key]==="") {
          td2.innerText = "Unknown"
          }
        }
        let clear = document.createElement('button')
        clear.innerText = 'очистить'
        clear.id = "clear"
        this1.result.append(clear)
        clear.addEventListener('click',function(){
        this1.table.innerText = "";
        clear.remove()
        localStorage.clear()

      })
        this1.cardInput.disabled = false;
        this1.nameInput.disabled = false;
        this1.btn.disabled = false;
    })
  })
}

  getClear() {
    let r = document.getElementById('clear')
    if (r!=null) {r.remove()}
    let this1 = this;
    let clear = document.createElement('button')
    clear.innerText = 'очистить'
    clear.id = "clear"
    this1.result.append(clear)
    clear.addEventListener('click',function(){
    this1.table.innerText = "";
    clear.remove()
    localStorage.clear()
    })
  }
  getTable(getStr,key){

      let tr = document.createElement('tr')
      this.table.append(tr)
      let td1 = document.createElement('td')
      tr.append(td1)
      td1.innerText = key[0].toUpperCase() + key.slice(1);
      let td2 = document.createElement('td')
      tr.append(td2)
      td2.innerText = getStr[key];
      if (getStr[key]==="") {
        td2.innerText = "Unknown"
      }
  }

}



