const student = {
    name: 'John Doe',
    branch: 'Computer Science',
};


//Function taking Object as param
const printName = (anyObject) => {
    return anyObject.name;
}

console.log(printName(student))

//USing object de-structuring syntax
const printName2 = ({name}) => {//Taking the name property from the invoked object
    console.log('Using Object Destructuring')
    return name;
}

console.log(printName2(student))

//Destructuring Object
const {name, branch} = student;//Property name should match the property of the student object7
console.log(name + ' : '+branch);

const sports = ['Hockey', 'Tennis','Football','Cricket'];

//Destructuring Arrays
const [hobby6] = sports;//Property name should match the property of the student object7
console.log(hobby6);//position of the variable is equal to the Index of the Array 