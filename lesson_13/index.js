'use strict'


function calculate () {
	let arr = [];
	let obj = {};
	obj['history'] = [];
	
	
	metka: for (let i = 0; i >= 0; i++) {
	let b;
	let k;
	let y;
	let x;
		 arr[i] = prompt("Привет! Какую формулу заюзаем?Если введешь 1 - формула (y = kx + b). Если 2 - (y = x^2). Чтобы выйти введи - exit");
		obj['history'].push(arr[i]);
		if (arr[i] === "exit") {
			break;
		}
		if (arr[i] === "1") {
			let args = {};
			obj['formula'] = "y = kx + b";
			for (let j = 0; isNaN(+x) ||  /^\s*$/.test(x) || x === null; j++) {
				x = prompt('Введите х. Для выхода наберите "exit"');
				obj['history'].push(x);
						if (!isNaN(+x) && x != null && !/^\s*$/.test(x)) {
				args['x'] = +x;
			}
				obj['args'] = args;
			if (x === "exit") { 
				 break metka;
				}
			}
			for(let j = 0; isNaN(+k) ||  /^\s*$/.test(k) || k === null; j++) {
				k = prompt('Введите k. Для выхода наберите "exit"');
				obj['history'].push(k);
					if (!isNaN(+k) && k != null && !/^\s*$/.test(k)) {
				args['k'] = +k;
			}
				obj['args'] = args;
			if (k === "exit") { 
				 break metka;
				}
			}
			for(let j = 0; isNaN(+b) ||  /^\s*$/.test(b) || b === null; j++) {
				b = prompt('Введите b. Для выхода наберите "exit"');
				obj['history'].push(b);
				if (!isNaN(+b) && b != null && !/^\s*$/.test(b)) {
				args['b'] = +b;
			}
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
				for(let j = 0; isNaN(+x) ||  /^\s*$/.test(x) || x === null; j++) {
					x = prompt('Введите х. Для выхода наберите "exit"');
					obj['history'].push(x);
						if (!isNaN(+x) && x != null && !/^\s*$/.test(x)) {
				args['x'] = +x;
			}
					obj['args'] = args;
			if (x === "exit") { 
				 break metka;
				}
			}
			y = +x * +x;
			alert (y);
		}
	}
	return obj;
}