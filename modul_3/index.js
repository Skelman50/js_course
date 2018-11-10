'use strict';

import MaskInput from 'mask-input';

 
const UIController = new MaskInput (document.querySelector('.js-input-selector'), {
  mask: '0000-0000-0000-0000',
  alwaysShowMask: true,
  maskChar: '_',
  onChange() {
 
  	if (inputCard.value.match(/^(\d{4}-){3}\d{4}/) && name.value>1) {
  		btn.disabled = false;
  	}else{
  		  btn.disabled = true;
  	}
  	
        if (inputCard.value.match(/^(\d{4}-){3}\d{4}/)) {
            inputCard.style.outlineColor = "green";
   
        } else {
       
            inputCard.style.outlineColor = "red";
          
        }

  }
});



const name = document.getElementById('name')
const btn = document.getElementById('btn')
btn.disabled = true;
const inputCard = document.getElementById('place');
let divResult = document.getElementById('result');
let table = document.getElementById('table');

let getStr = JSON.parse(localStorage.getItem("table"));

	for (let key in getStr) {
			let tr = document.createElement('tr')
			table.append(tr)
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
	if (localStorage.getItem("table")) {
		let clear = document.createElement('button')
		clear.innerText = 'очистить'
		clear.id = "clear"
		divResult.append(clear)
		clear.addEventListener('click',function(){
			table.innerText = "";
			clear.remove()
			localStorage.clear()
		})
	}

name.addEventListener('input', function(){
if (name.value.length > 1 && inputCard.value.match(/^(\d{4}-){3}\d{4}/)) {
	name.style.border = "1px solid grey";
		name.style.outlineColor = "green";
		btn.disabled = false;
		
}else{
		name.style.border = "1px solid red";
		name.style.outlineColor = "red";
		btn.disabled = true;
	}

})

btn.addEventListener('click', function(){
	let r = document.getElementById('clear')
	if (r!=null) {r.remove()}
	
	let result = UIController.input._visibleValue.split('-').join('')
	table.innerText = 'LOADING...'
	fetch (`https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=${result}`)
	.then(res=> res = {
 "bin": "515735",
 "bank": "CITIBANK N.A.",
 "card": "MASTERCARD",
 "type": "CREDIT",
 "level": "WORLD",
 "country": "UNITED STATES",
 "countrycode": "US",
 "website": "",
 "phone": "",
 "valid": "true"
}
)
	//.then(res => res.json())
	.then(res => {
		let lstrgSer = JSON.stringify(res)
		localStorage.setItem("table", lstrgSer)
		table.innerText = "";
		for (let key in res) {
			let tr = document.createElement('tr')
			table.append(tr)
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
		divResult.append(clear)
		clear.addEventListener('click',function(){
			table.innerText = "";
			clear.remove()
			localStorage.clear()
		})

		
		btn.disabled = false;
		name.disabled = false;
		inputCard.disabled = false;
	})

})





