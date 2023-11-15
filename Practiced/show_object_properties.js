//show object properties in js

//In JavaScript, you can define object properties in several ways, and you can access or modify those properties 
//using dot notation or bracket notation. Here's how you can define, access, and modify object properties:

//Creating an Object:
//You can create an object in JavaScript using object literal notation:

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

//Accessing Object Properties:
//You can access object properties using dot notation or bracket notation.

//Using Dot Notation:

console.log(person.firstName); // "John"
console.log(person.lastName);  // "Doe"
console.log(person.age);       // 30


//Using Bracket Notation:

console.log(person["firstName"]); // "John"
console.log(person["lastName"]);  // "Doe"
console.log(person["age"]);       // 30


//Modifying Object Properties:
//You can change the value of an object property using assignment with dot or bracket notation.

//Using Dot Notation:

person.age = 31;
person.job = "Developer"; // Adding a new property


//Using Bracket Notation:

person["age"] = 31;
person["job"] = "Developer";


//Deleting Object Properties:
//You can delete object properties using the delete operator.

delete person.job;

//Now, if you want to see all the properties of an object, you can use a for...in loop or the Object.keys(), 
//Object.values(), or Object.entries() methods.

//Using for...in loop:

for (let key in person) {
  console.log(key, person[key]);
}


//Using Object.keys():

const keys = Object.keys(person);
console.log(keys); // ["firstName", "lastName", "age"]


//Using Object.values():

const values = Object.values(person);
console.log(values); // ["John", "Doe", 31]


//Using Object.entries():

const entries = Object.entries(person);
console.log(entries);

// [
//   ["firstName", "John"],
//   ["lastName", "Doe"],
//   ["age", 31]
// ]
//These methods allow you to inspect and work with the properties of an object in JavaScript.





