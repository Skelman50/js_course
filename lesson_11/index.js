'use strict'
function removeKeys1 (obj, arr) {
	for (let key in obj) {
	for(let i = 0; i < arr.length; i++) {
		if (key === arr[i]) {
		delete obj[key];
		}
	}
}
return obj;
}

function removeKeys2 (obj, arr) {
	let obj1 = {};
	for (let key in obj) {
		obj1[key] = obj[key];
	}
	for (let key in obj1) {
	for(let i = 0; i < arr.length; i++) {
		if (key === arr[i]) {
		delete obj1[key];
		}
	}
}
return obj1;
}


function absDiff (a) {
	return function (b) {
		return Math.abs(a - b);
	}
}


