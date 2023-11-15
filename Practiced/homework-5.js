//=> Solve Those Problems 

//Problem 1: Create a function greet that takes a name as a parameter and returns a greeting message.

function greet(msg) {
    return msg = "Thank you for your message! We will get back to you soon. Kind regards.";
}
let message = greet();
document.write(message);

//Problem 2: Create a function add that takes two numbers as parameters and returns their sum.

function add(p1,p2) {
    return (p1 +p2 );
}
let sum = add(10,20);
document.write(sum);


//Problem 3: Create an object person with properties name and age.

const person = {
    "name" : "arif",
    "age"  : 33
}
console.log(person.name)


//Problem 4: Create a function isAdult that takes a person object as a parameter and 
//returns true if the person's age is 18 or older, and false otherwise.

const arif = {
    "name" : "Arif Hassan",
    "age"  : 17
}

function isAdult(person) {
    return person.age >= 18;
}
console.log(isAdult(arif));


//Problem 5: Create a function getFullName that takes a person object as a parameter and returns their full name.

const fullName =  {
    "firstName" : "Afiya",
    "lastName" : "Ibnat"
}

function getFullName(person) {
    return person.firstName + " " + person.lastName;
}

console.log(getFullName(fullName));


//Problem 6: Create a function calculateArea that takes the width and height of a rectangle as 
//parameters and returns its area.

function calculateArea(width, height) {
    return width * height;
}

console.log(calculateArea(30,40));


//Problem 7: Create an object book with properties title, author, and year.

const book = {
    "title" : "Bahubrihi",
    "author" : "Humayon Ahmed",
    "year" : "1990"
}

console.log(book.title);


//Problem 8: Create a function getBookInfo that takes a book object as a parameter and 
//returns a string with its title, author, and year.

const bookInfo = {
    "title" : "Shankhanil Karagar",
    "author" : "Humayon Ahmed",
    "year" : "1973",
}

function getBookInfo(book) {
    return book.title + " by "+ book.author + " in "+ book.year;
}

console.log(getBookInfo(bookInfo));


//Problem 9: Create an object student with properties name and grade. Create a function 
//promoteStudent that takes a student object as a parameter and increases their grade by 1.

const student = {
    "name" : "Riyad",
    "grade" : 4.5
}

function promoteStudent(student) {
    return student.grade++;
}
console.log(student.grade);

    //checking the increment value

    promoteStudent(student);
    console.log(student.grade);

//Problem 10: Create an object circle with a property radius. Create a function calculateArea that 
//takes the circle object as a parameter and calculates and returns its area.

const circle = {
    radius : 4.5
}

function calculateArea(circle) {
    const area = Math.PI * Math.pow(circle.radius, 2 )
    return area;   
}

console.log(calculateArea(circle));