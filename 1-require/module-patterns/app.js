//STYLE 1 : 
var greet = require('./greet1'); //Calling the greet 1 function name(params) 

greet();// Calling the greet varing which has     

// STYLE 2 : 
var greet2 = require('./greet2').greet;//Common way : calling the function property of the object
/* First Way
var greet2 = require('./greet2')
greet2.greet(); //not common
*/

// Second Way
greet2();

//STYLE 3 : Functin Constructor
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "Changing to see if new Objects can see!!";

//Cahches the small version of the module
var greet3b = require('./greet3');//Creating another object
greet3b.greet();//TO test if it sees new value


// STYLE 4 : 
var Greet4 = require('./greet4');//Creating a constructor function
var grtr = new Greet4();// Creating an object
grtr.greet();

// STYLE 5 : REVEALING MODULE PATTERN
var greet5 = require('./greet5').greet;
greet5();