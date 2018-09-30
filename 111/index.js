'use strict'


function calculate () {
	let arr = [];
	let obj = {};
	
	metka: for (let i = 0; i >= 0; i++) {
	let b;
	let k;
	let y;
	let x;
		 arr[i] = prompt("Привет! Какую формулу заюзаем?Если введешь 1 - формула (y = kx + b). Если 2 - (y = x^2). Чтобы выйти введи - exit");
		obj['history'] =  arr;
		if (arr[i] === "exit") {
			break;
		}
		if (arr[i] === "1") {
			let args = {};
			obj['formula'] = "y = kx + b";
			for(let j = 0; isNaN(+x); j++) {
				x = prompt('Введите х. Для выхода наберите "exit"');
				obj['history'].push(x);
				args['x'] = +x;
				obj['args'] = args;
			if (x === "exit") { 
				 break metka;
				}
			}
			for(let j = 0; isNaN(+k); j++) {
				k = prompt('Введите k. Для выхода наберите "exit"');
				obj['history'].push(k);
				args['k'] = +k;
				obj['args'] = args;
			if (k === "exit") { 
				 break metka;
				}
			}
			for(let j = 0; isNaN(+b); j++) {
				b = prompt('Введите b. Для выхода наберите "exit"');
				obj['history'].push(b);
				args['b'] = +b;
				obj['args'] = args;
			if (b === "exit") { 
				 break metka;
				}
			}
			 y = +k*+x + +b;
			 alert (y);
		}
		if (arr[i] === "2") {
			let args = {};
			obj['formula'] = "y = x^2";
				for(let j = 0; isNaN(+x); j++) {
					x = prompt('Введите х. Для выхода наберите "exit"');
					obj['history'].push(x);
					args['x'] = +x;
					obj['args'] = args;
			if (x === "exit") { 
				 break metka;
				}
			}
			y = +x * +x;
			alert (y);
		}
	}
	return console.log(obj)
}

calculate();

