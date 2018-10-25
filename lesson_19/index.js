'use strict';

function Human (obj){
	this.name = obj.name;
	this.age = obj.age;
}

Human.prototype.sayHello = function(){
 	console.log(`Hello, my name is ${this.name}, i am ${this.age} years old`)

}

function AlevelStudent (obj){
 Human.call(this, obj);
  this.marks = obj.marks;
}


AlevelStudent.prototype = Object.create(Human.prototype);
AlevelStudent.prototype.constructor = AlevelStudent;

AlevelStudent.prototype.averageMark = function() {
	let sum = 0;
	for (let i = 0; i < this.marks.length; i++) {
		sum = sum + this.marks[i]
	}
	console.log(sum/this.marks.length)
}

/*class Human {
	constructor(obj) {
		this.name = obj.name
		this.age = obj.age
	}
	sayHello() {
		console.log('jgjhh')
	}
}*/
