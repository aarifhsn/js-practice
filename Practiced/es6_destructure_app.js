// array destructure use [], while object destructure use {}
// array destructure

let numbers = [10,20,30,40,50]

let [num1, num2, num3, num4, num5] = numbers

console.log(num3)

// swap variable

let a=10, b=20;
[a,b] = [b,a];
console.log(a);

// object destructure

let studentInfo = {
    name : 'arif',
    id    : 239,
    address : 'brahmanbaria'
}

//console.log(studentInfo.id) // traditional way

//es6 way

let {id, name, address} = studentInfo;

console.log(id);


// function destructure
// receiving student object in the function stdInfo 
const stdInfo = ({name, language}) => {
    console.log(`${name}, ${language}`);
}

const student = {
    name : "arif hassan",
    language: "bangla"
}

// pass the student value into stdInfo function
stdInfo(student);