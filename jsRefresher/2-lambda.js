function sumFunction(a,b){
    //Concatenate Strings or add two numbers
    return (a+b);//Overloaded Operator
}

console.log(sumFunction(1,2))
console.log(sumFunction('Denver', ' ,CO'))

// Lambda helps with 'this' keyword
const sumLambda = (a,b) => {
    return a+b;
}

console.log(sumFunction(3,4))
console.log(sumFunction('Nashville', ' ,TN'))