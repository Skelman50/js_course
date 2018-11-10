'use strict';

import MaskInput from 'mask-input'
import UIController from './ui_controller.js'


const uiController = new UIController();
 
const maskImput = new MaskInput (document.querySelector('.js-input-selector'), {
  mask: '0000-0000-0000-0000',
  alwaysShowMask: true,
  maskChar: '_',
  onChange() {
 uiController.checkCardInput()
  }
});


uiController.checkNameInput ()
uiController.useButton()


let getStr = JSON.parse(localStorage.getItem("table"));

	for (let key in getStr) {
			uiController.getTable(getStr,key)
			
		}
	if (localStorage.getItem("table")) {
		uiController.getClear()
	}



/*btn.addEventListener('click', function(){
	let r = document.getElementById('clear')
	if (r!=null) {r.remove()}
	
	let result = maskImput.input._visibleValue.split('-').join('')
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

})*/





