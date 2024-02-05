// basic way

function addNumbers(x,y,z) {
    return x + y+ z;
}

let numbers = [1,2,3];
let newNumber = [4,5,6,7];

//console.log(addNumbers(numbers[0],numbers[1],numbers[2]));

// using Spread operator // easiest way

console.log(addNumbers(...numbers));

// adding new numbers // spead operator can be used anywhere in an array. Start, end or in middle. while
// rest operator can only be used at the end in an array

let numbers2 = [4,5, ...numbers];

console.log(numbers2);

// concatinate in simple way
console.log(numbers.concat(newNumber));

// concatinate using spread operator
console.log(...numbers,...newNumber);
