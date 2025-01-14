// Taking the core module Taking

//For custom module, ypu need a path
var util = require('util');//No path is required!!

var myName = "Nitin";

var greeting = util.format("Hello %s, You are Learning Node.JS :)", myName);

console.log(greeting);


//Creating a log using the util module
util.log(greeting);