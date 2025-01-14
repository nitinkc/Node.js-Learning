// const is like Final java variables. Cannot be changed
const name = 'Nitin';
//name = "C"; //Uncaught TypeError: Assignment to constant variable.

let x = 10;
x = 11;//Value can be reassigned
console.log(x)

//Arrays
const sports = ['Hockey', 'Tennis','Football','Cricket'];

//Iterate through an array
for(let singleSport of sports){
    console.log(singleSport);
}

sports.push('Badminton');//Able to push even though const

//Map takes a labmda like a Consumer in Java
console.log(sports.map(singleSport => 'Sport is : ' + singleSport));


const arrayClone1= [sports];//Creates an array of Array or Nested Array
console.log(arrayClone1)

const arrayClone2 = [...sports];// 3 Dot operator takes out all the elements out
console.log(arrayClone2)