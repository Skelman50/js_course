'use strict';
let input = document.getElementById("input");
let div = document.getElementById("div");
let input1 = document.getElementById("input1");
let div1 = document.getElementById("div1");
let btn = document.getElementById("btn");
let body = document.getElementsByTagName('body')[0]
let today = new Date();
let arr
let arr1
let arr2
let daysTo;
let monthTo;
let yearsTo;
let date;

function listen1() {
	arr = input1.value.split('.')
	if (input1.value==='') {
	div1.innerText = 'Введите дату в формате(dd.mm или dd,mm)'
}
if (arr.length===2) {
		if ((+arr[0])>31) {
		div1.innerText = "Введите корректные данные (dd.mm или dd,mm)";
		input1.value=''
	}
	daysTo = +arr[0];
		if ((+arr[1])>12) {
		div1.innerText = "Введите корректные данные (dd.mm или dd,mm)";
		input1.value=''
	}
	monthTo = +arr[1] - 1;
	yearsTo = today.getFullYear()	
 	date = new Date(yearsTo,monthTo,daysTo);
 	console.log("date", date);
 	if (today>date) {
 		date = new Date(yearsTo+1,monthTo,daysTo);
 	}
 			if (+arr[1]<13 && +arr[0]<32 && arr[1]!='') {
 				
 		div1.innerText = "До указанной даты осталось: "+ Math.round((date-today)/1000/60/60/24)+" дней"
 	
 	}else if (arr[0]==="") {
div1.innerText = 'Введите дату в формате(dd.mm или dd,mm)'
 	}
}
arr1 = input1.value.split(',')
if (arr1.length===2) {
			if ((+arr1[0])>31) {
		div1.innerText = "Введите корректные данные (dd.mm или dd,mm)";
		input1.value=''
	}
	daysTo = +arr1[0];
		if ((+arr1[1])>12) {
		div1.innerText = "Введите корректные данные (dd.mm или dd,mm)";
		input1.value=''
	}
	monthTo = +arr1[1] - 1;
	yearsTo = today.getFullYear()	
 	date = new Date(yearsTo,monthTo,daysTo);
 	console.log("date", date);
 	if (today>date) {
 		date = new Date(yearsTo+1,monthTo,daysTo);
 	}
 	if (+arr1[1]<13 && +arr1[0]<32 && arr1[1]!='') {
 		
 		div1.innerText = "До указанной даты осталось: "+ Math.round((date-today)/1000/60/60/24)+" дней"
 	
 	}else if (arr1[0]==="") {
div1.innerText = 'Введите дату в формате(dd.mm или dd,mm)'
 	}
}
if (arr.length===3 || arr1.length===3) {
		div1.innerText = "Введите корректные данные (dd.mm или dd,mm)";
		input1.value=''
	}
}


input.addEventListener('input', function(){
	arr = input.value.split('.')

if (input.value==='') {
	div.innerText = 'Введите дату в формате (dd.mm.yyyy или dd,mm,yyyy)'
}
	if (arr.length===3) {
				if ((+arr[0])>31) {
		div.innerText = "Введите корректные данные (dd.mm.yyyy или dd,mm,yyyy)";
		input.value=''
	}
	daysTo = +arr[0];
	if ((+arr[1])>12) {
		div.innerText = "Введите корректные данные (dd.mm.yyyy или dd,mm,yyyy)";
		input.value=''
	}
	monthTo = +arr[1] - 1;
	yearsTo = +arr[2];

	date = new Date(yearsTo,monthTo,daysTo)

	if (+arr[1]<13 && +arr[0]<32 && arr[1]!=''&& arr[2]!='') {
		
 			if (today > date) {
	div.innerText = "С зазначенной даты прошло: "+ Math.round((today-date)/1000/60/60/24)+" дней"
	}else if (today<date) {
		div.innerText = "До указанной даты осталось: "+ Math.round((date-today)/1000/60/60/24)+" дней"
	 }
	
 	}
}
	

	arr1 = input.value.split(',')

	if (arr1.length===3) {
				if ((+arr1[0])>31) {
		div.innerText = "Введите корректные данные (dd.mm.yyyy или dd,mm,yyyy)";
		input.value=''
	}
	daysTo = +arr1[0];
	if ((+arr1[1])>12) {
		div.innerText = "Введите корректные данные (dd.mm.yyyy или dd,mm,yyyy)";
		input.value=''
	}
	monthTo = +arr1[1] - 1;
	yearsTo = +arr1[2];

	date = new Date(yearsTo,monthTo,daysTo)
if (+arr1[1]<13 && +arr1[0]<32 && arr1[1]!=''&& arr1[2]!='') {
	
 			if (today > date) {
	div.innerText = "С зазначенной даты прошло: "+ Math.round((today-date)/1000/60/60/24)+" дней"
	}else if (today<date) {
		div.innerText = "До указанной даты осталось: "+ Math.round((date-today)/1000/60/60/24)+" дней"
	 }
	
 	}

}
if (arr.length===2 || arr1.length===2 || arr[2]===''||arr1[2]==='') {
		div.innerText = "Введите дату в формате(dd.mm.yyyy или dd,mm,yyyy)";
	}
});


input1.addEventListener('input',listen1)
