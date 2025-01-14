//Extremely Popular
// REVEALING MODULE PATTERN
var greeting = "Greet 5 : Revealing Module Pattern : Extremely Popular";

function greet () {
    console.log(greeting);    
}

module.exports = {
    greet : greet 
};