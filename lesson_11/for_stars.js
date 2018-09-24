'use strict'
function join() {
	let obj = {};
	let arr = [];

	for(let i = 0; i < arguments.length; i++) {
		arr[i] = arguments[i];
		}

	for (let i = 0; i < arr.length; i++) {
		if (typeof(arr[i]) === "object" && Array.isArray(arr[i]) === false){	
		obj = arr[i];	
		arr.splice(i,1);
		break;
	}
}
	for(let i = 0; i < arr.length; i++) {
		if (typeof(arr[i]) === "object" && Array.isArray(arr[i]) === false) {
		for (let key in arr[i]) {
			if (obj[key] === undefined) {
					obj[key] = arr[i][key];
				} else {
		
			if (Array.isArray(arr[i][key]) && Array.isArray(obj[key])) {
				 obj[key] = obj[key].concat(arr[i][key]);
				}else if (typeof(obj[key]) === 'object' && !Array.isArray(obj[key]) && typeof(arr[i][key]) === 'object' && !Array.isArray(arr[i][key])) {
					obj[key] = arr[i][key];
				}else if (typeof(obj[key]) === 'number' && typeof(arr[i][key]) === 'number') {
					obj[key] = obj[key] + arr[i][key];
				}else if (typeof(obj[key]) === 'string' && typeof(arr[i][key]) === 'string') {
					obj[key] = obj[key] + arr[i][key];
				}else {
					obj[key] = arr[i][key];
				}

				}
			}
		}
	}
	return obj;
}

