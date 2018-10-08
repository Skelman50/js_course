'use strict'

  function init (arr,n) {
	let ul = document.createElement('ul');
    document.body.append(ul);

	for (let i = 0; i < arr.length; i++) {
	let className;
	let content;
	let atributes = {};
		for(let keys in arr[i]) {
			if (keys === "className") {		
				className = arr[i][keys];
			}else if (keys === "content") {
				content = arr[i][keys];
			}if (keys === "attributes") {
				for (let key in arr[i][keys]) {
					atributes[key] = arr[i][keys][key]
				}
			}
		}

	  for(let j = 0; j < n; j++) {
	  	 let li = document.createElement('li');
	  	 if (/*typeof(className) === 'string' &&*/ className != undefined) {
	  	 li.className = className;
	  	}
	  	if (content != undefined) {
	  	 li.innerText = content;
	  	}
	  	for (let keys in atributes) {
	  		li.setAttribute(keys, atributes[keys])
	  	}
	  	 ul.append(li);
	    }
	}
}

function listen(){

let button = document.getElementsByTagName('button');
let click = button[0];
click.addEventListener('click',function(){
	let el = document.getElementsByTagName('ul');
	let elem = el[0];
	if (elem) {
	elem.remove();
	return console.log(true);
}
console.log(false);
});	
}

/*let button = document.getElementsByTagName('button');
let click = button[0];
click.addEventListener('click',listen);*/
