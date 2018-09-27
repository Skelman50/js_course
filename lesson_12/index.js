'use strict'


function add (str) {
let sum = 0;
let k = 0;
	if (str === undefined ) {
		str = '🇺🇦❤';
		}
	for (let i = 0; i < str.length; i++) {
			sum = sum + str.charCodeAt(i)
		}

	 str = str.split('');
	 if (str.length <=2) {
	 	k = 1;
	 }else{

	 while(str.length > 2) {
	 	k = k + 1
	 	str.splice(0,2)
	 }
}

 return sum / k;
}


function clearNumbers (arr) {

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (typeof(arr[i][j]) != 'number') {
				 arr[i].splice(j, 1);
				 j--;
			}
		}
		/*if (arr[i].length === 0) { 
			arr.splice(i,1);
			i--;
		}*/
	}
	return arr;
}


function revers () {
	let arr = [];
	for (let i = 0; i < arguments.length; i++ ) {
	 arr[i] = arguments[i].split(', ');
	 	for(let j = 0; j < arr[i].length; j++) {
	 		arr[i][j] = arr[i][j].split('').reverse().join('');
	 	}
	 	arr[i] = arr[i].join('');
	}
	return arr.reverse();
}

console.log(revers('123', '456', '789', '0'));


function splitArray (arr, n) {
	let arr1 = [];
for (let i = 0; arr.length > 0; i++) {
	arr1[i] = arr.splice(0, n);
}
return arr1;
}


