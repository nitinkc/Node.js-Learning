'use strict'

var util = require('util');

//Class in ES6
//Class is just a syntactic suger
class Person {
    constructor(firstname, lastname){
        this.firstname = 'John';
	    this.lastname = 'Doe';
    }
    
    // Automatically put in the prototype
    greet(){
        	console.log('Hello ' + this.firstname + ' ' + this.lastname);
    }
}

var john = new Person('John','Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
