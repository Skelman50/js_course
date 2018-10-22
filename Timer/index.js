'use strict';

function Timer(sec) {
  this.sec = sec;
}

Timer.prototype.onTick = function() {
	let this2 = this;
	clearInterval(this.id)
	this.id1 = setInterval(function(){
		console.log(this2.sec);
		console.log("Say Hello");
		this2.sec--
	},1000)
}

Timer.prototype.stop = function() {
  clearInterval(this.id);
  clearInterval(this.id1);

};

Timer.prototype.start = function() {
	clearInterval(this.id1)
  let this1 = this;
  this.id = setInterval(function() {
    console.log(this1.sec--)
  }, 1000);
};

let b = new Timer(60)
let c = new Timer(100)

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

