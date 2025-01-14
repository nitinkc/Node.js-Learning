//Using Function Constructor and replacing the exports object with the function constructor itself
function Greetr() {//Regular obj, ECMS 6 has class and new words
    this.greeting = "Greet 4 : From Function Constructor replacing the exports object with the function constructor itself ";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = Greetr;