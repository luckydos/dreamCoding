'use strict';

// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
	// constructor
	constructor(name, age) {
		// fields
		this.name = name;
		this.age = age;
	}

	// methods
	speak() {
		console.log(`Hi, ${this.name}`);
	}
}

const ellie = new Person('ellie', 30);
console.log(`ellie.name: ${ellie.name}`);
console.log(`ellie.age: ${ellie.age}`);
ellie.speak();