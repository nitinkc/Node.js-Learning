//Using Function Constructor: begins with CAPITAL LETTER
function Greetr() {//Regular obj, ECMS 6 has class and new words
    this.greeting = "Greet 3 : From Function Constructor";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();// Replacing the exports object with the newly created one