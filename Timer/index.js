'use strict';

let btn_on_b = document.getElementById('btn_on_b')
let btn_on_c = document.getElementById('btn_on_c')
let btn_off_b = document.getElementById('btn_off_b')
let btn_off_c = document.getElementById('btn_off_c')
let btn_ontick_b = document.getElementById('btn_ontick_b')
let btn_ontick_c = document.getElementById('btn_ontick_c')

function Timer(sec) {
  this.sec = sec;
}

Timer.prototype.onTick = function() {
	let this2 = this;
	clearInterval(this.id)
	this.id = undefined;
	if (this.id1 === undefined) {
			this.id1 = setInterval(function(){
		console.log(this2.sec);
		console.log("Say Hello");
		this2.sec--
	},1000)
	}

}

Timer.prototype.stop = function() {
  clearInterval(this.id);
  this.id = undefined;
  clearInterval(this.id1);
  this.id1 = undefined;

};

Timer.prototype.start = function() {
	clearInterval(this.id1)
	this.id1 = undefined;
  let this1 = this;
   if (this.id === undefined) {
   	this.id = setInterval(function() {
    console.log(this1.sec--)
  }, 1000);
  
  }
  
};

let b = new Timer(60)
let c = new Timer(100)

btn_on_b.addEventListener('click', function() {
	b.start();
})

btn_on_c.addEventListener('click', function() {
	c.start();
})

btn_off_b.addEventListener('click', function() {
	b.stop();
})

btn_off_c.addEventListener('click', function() {
	c.stop();
})
btn_ontick_b.addEventListener('click', function() {
	b.onTick();
})
btn_ontick_c.addEventListener('click', function() {
	c.onTick();
})
//2 способ
/*let a = new Timer(20)

let c = new Timer(50)

function Timer (sec) {
	this.sec = sec
}

Timer.prototype.start = function(){
	clearInterval(this.id1)
		this.id = setInterval(() => {console.log(this.sec--);}, 1000);
	}

Timer.prototype.onTick = function(){
	clearInterval(this.id)
		this.id1 = setInterval(() => {
			console.log("Say Hello");
			console.log(this.sec)
			this.sec--
		}, 1000);
		}
Timer.prototype.stop = function(){
	 	clearInterval(this.id)
	 	clearInterval(this.id1)
	}

let b = new Timer(60)
let a = new Timer(40)
let c = new Timer(100)*/

