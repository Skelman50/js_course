
'use strict';

(function() {
let seconds = 0;
let count = document.getElementById('count');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let stopBtn = document.getElementById('stop');
let x1Btn = document.getElementById('x1');
let x2Btn = document.getElementById('x2');
let x3Btn = document.getElementById('x3');
let numbersParent = document.getElementById('numbers');
let id;
let speed = 1000;
pauseBtn.disabled = true;
stopBtn.disabled = true;
x1Btn.disabled = true;
x2Btn.disabled = true;
x3Btn.disabled = true;

startBtn.addEventListener ('click', function() {
id = setInterval (function() {
	const index = seconds % (numOfNum*2);
	if(index < numOfNum) {
		items[index].style.background = 'green'
	
}else if (items[numOfNum*2 - index - 1]) {
	items[numOfNum*2 - index - 1].style.background = 'black'
}

	count.innerText = ++seconds + ' seconds';
},speed);
	startBtn.disabled = true;
	pauseBtn.disabled = false;
	stopBtn.disabled = false;
	x2Btn.disabled = false;
	x3Btn.disabled = false;
});

pauseBtn.addEventListener ('click', function(){
	startBtn.disabled = false;
	pauseBtn.disabled = true;
	stopBtn.disabled = false;
	x1Btn.disabled = true;
	x2Btn.disabled = true;
	x3Btn.disabled = true;
	clearInterval(id);
});

stopBtn.addEventListener ('click', function(){
	startBtn.disabled = false;
	pauseBtn.disabled = true;
	stopBtn.disabled = true;
	x1Btn.disabled = true;
	x2Btn.disabled = true;
	x3Btn.disabled = true;
	clearInterval(id);
	seconds = 0;
	count.innerText = '0 seconds';
	for (let i = 0; i < numOfNum; i++) {
		items[i].style.background = '';
	}
});

x1Btn.addEventListener ('click', function(){
	startBtn.disabled = true;
	pauseBtn.disabled = false;
	stopBtn.disabled = false;
	x1Btn.disabled = true;
	x2Btn.disabled = false;
	x3Btn.disabled = false;
	clearInterval(id);
	id = setInterval (function() {
	const index = seconds % (numOfNum*2);
	if(index < numOfNum) {
		items[index].style.background = 'green'
	
}else if (items[numOfNum*2 - index - 1]) {
	items[numOfNum*2 - index - 1].style.background = 'black'
}

	count.innerText = ++seconds + ' seconds';
},speed);

});

x2Btn.addEventListener ('click', function(){
	startBtn.disabled = true;
	pauseBtn.disabled = false;
	stopBtn.disabled = false;
	x1Btn.disabled = false;
	x2Btn.disabled = true;
	x3Btn.disabled = false;
	clearInterval(id);
	id = setInterval (function() {
	const index = seconds % (numOfNum*2);
	if(index < numOfNum) {
		items[index].style.background = 'green'
	
}else if (items[numOfNum*2 - index - 1]) {
	items[numOfNum*2 - index - 1].style.background = 'black'
}

	count.innerText = ++seconds + ' seconds';
},speed/2);

});

x3Btn.addEventListener ('click', function(){
	startBtn.disabled = true;
	pauseBtn.disabled = false;
	stopBtn.disabled = false;
	x1Btn.disabled = false;
	x2Btn.disabled = false;
	x3Btn.disabled = true;
	clearInterval(id);
	id = setInterval (function() {
	const index = seconds % (numOfNum*2);
	if(index < numOfNum) {
		items[index].style.background = 'green'
	
}else if (items[numOfNum*2 - index - 1]) {
	items[numOfNum*2 - index - 1].style.background = 'black'
}

	count.innerText = ++seconds + ' seconds';
},speed/3);

});


let items = [];
let numOfNum = 10;

for (let i = 0; i < numOfNum; i++) {
	let item = document.createElement('span');
	numbersParent.append(item);
	item.innerText = i + 1;
	items.push(item);
	if (i != numOfNum - 1) {
		let coma = document.createElement('span');
		numbersParent.append(coma)
		coma.innerText = ', '
	}
}

}());

