'use strict';

function Human (name,age){
	this.name = name;
	this.age = age;
}

Human.prototype.sayHello = function(){
 	console.log(`Hello, my name is ${this.name}, i am ${this.age} years old`)

}

function AlevelStudent (name,age,marks){
 Human.call(this, name,age);
  this.marks = marks;
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

let human1 = new Human("Игорь",30)
let student1 = new AlevelStudent("Игорь",30,[5,4,3,4])