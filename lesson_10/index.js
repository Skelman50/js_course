'use strict'

const myAge = 4;
let a;

if (myAge >= 10 && myAge <= 20) {
	a = "лет"
}else if ((myAge + 10) % 10 === 2 || ((myAge) + 10) % 10 === 3 || ((myAge) + 10) % 10 === 4) {
	a = "года";
}else if ((myAge + 10) % 10 === 5 || ((myAge) + 10) % 10 === 6 || ((myAge) + 10) % 10 === 7|| ((myAge) + 10) % 10 === 8 || ((myAge) + 10) % 10 === 9 || ((myAge) + 10) % 10 === 0) {
	a = "лет";
}else {
	a = "год";
}

console.log("Мой возраст " + myAge + " " + a);

const arr1 = [-20, -3, "asus", -56, "xiaomi", -156, -3, null, [], -26];
let obj = {};
let isNumber = [];
let notNumber = [];

for (let i = 0; i < arr1.length; i++) {
	if (typeof(arr1[i]) === "number") {
		isNumber[isNumber.length] = arr1[i];
		}else {
			notNumber[notNumber.length] = arr1[i];
		}
	}
let max = isNumber[0];
let min = isNumber[0];
let sum = 0;
let negative = [];

for (let i = 0; i < isNumber.length; i++) {
	if (max < isNumber[i]) {
		max = isNumber[i];
	}
}

for (let i = 0; i < isNumber.length; i++) {
	if (min > isNumber[i]) {
		min = isNumber[i];
	}
}

for (let i = 0; i < isNumber.length; i++) {
	sum = sum + isNumber[i]
}

for (let i = 0; i < isNumber.length; i++) {
	if (isNumber[i] < 0) {
		negative[negative.length] = isNumber[i];
	}
}

obj['max'] = max;
obj['min'] = min;
obj['avg'] = sum / isNumber.length;
obj['negative'] = negative.length;
obj['not a number'] = notNumber.length;

console.log(obj);


