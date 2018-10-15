'use strict';

 function itsMe(a) {
  	if (a === undefined) {
  		console.log ("It's me, Skelman50");
  	return "It's me, Skelman50"
  	}
  	console.log("It's me, " + a);
  	return "It's me, " + a;
  }


function compare (a, b) {
	if (typeof(a) != 'number' || typeof(b) != 'number' ) {
		console.log ("НЕ ЧИСЛО");
		return "НЕ ЧИСЛО"
	}else if (a > b) {
		console.log (a + " > "+ b);
		return a + " > " + b;
		
	}else if (a < b) {
		console.log (a + " < "+ b);
		return a + " < " +  b;
		
	}else if (a === b) {
		console.log (a + " == "+ b);
		return a + " == " +  b;
	}
}


function row (a,b,c,str) {
	let arr = [a,b,c]
	if (str ==="<") {
		function compareNumeric(a, b) {
  		return a - b;
}
arr.sort(compareNumeric)
return arr[0] + "<" + arr[1]+ "<" + arr[2]
	}else if(str === ">") {
		function compareNumeric(a, b) {
  		return b - a;
}
arr.sort(compareNumeric)
return arr[0] + ">" + arr[1]+ ">" + arr[2]
	}
}


function fact(n) {
  return (n != 1) ? n * fact(n - 1) : 1;
}


function matrixDiff (array1, array2) {
	let absDif = 0;
	if (array1.length != array2.length) {
		return NaN;
	}
	for (let i = 0; i < array1.length; i++) {
			if (array1[i].length != array2[i].length) {
			return NaN;
				break;
			}else{
				for(let j=0; j < array1[i].length; j++) {
				absDif = absDif + Math.abs(array1[i][j] - array2[i][j]);
				}
			}
		}
		return absDif
	}


function strangeSearch (array) {
	let body = document.getElementsByTagName('body')[0];
	for (let i = 0; i < array.length; i++) {
		
		 let blok = document.createElement('div');
		 body.append(blok);
		 let input = document.createElement('input');
		 //blok.innerText = array[i];
		 blok.append(input);
		 input.type = 'number';
		 input.value = 0;
		 input.setAttribute('data-name', array[i]);
		 blok.innerHTML = blok.innerHTML + ' '+ array[i]
		 
	}

	let btn = document.createElement('button');
	body.append(btn);
	btn.id = 'go'
	btn.innerText = "Search";

	btn.addEventListener('click', function() {
		let arr = [];
		let inputs = document.getElementsByTagName('input');

		for (let i = 0; i < inputs.length; i++){
			if (inputs[i].value <= 0 /*|| inputs[i].value === undefined*/) {
				continue;
			}
			arr.push(inputs[i]);
		}

		function compareNumeric (a, b) {
			return a.value - b.value;
		}

		arr.sort(compareNumeric);
		
		let str = arr[0].getAttribute('data-name');
			for (let i = 1; i < arr.length; i++) {
			str = str + '+'+ arr[i].getAttribute('data-name')
		}
		
		let href = 'https://www.youtube.com/results?search_query=' + str;
		window.location.href = href;
	});

}

strangeSearch(["котя", "злая"])

