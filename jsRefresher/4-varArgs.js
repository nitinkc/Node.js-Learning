//Arrays
const sports = ['Hockey', 'Tennis','Football','Cricket'];

const arrayClone2 = [...sports];// 3 Dot operator takes out all the elements out
console.log(arrayClone2);

// Limited to 2 variables only
const toArray = (a,b) => {
    return [a,b];
}

console.log(toArray(1,2,3,4,5));//JS Allows more numver or args without issues

// ...args is variable args array like Java
const toArray2 = (...args) => {
    return args;
}
console.log(toArray2(1,2,3,4,5));//JS Allows more numver or args without issues
