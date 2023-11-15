
//=> Solve these questions.

// Problem 1: Write a function to calculate the area of a triangle.

function triangle(base,height) {
    let formula = 1/2 * base * height;
    return formula;
}

let result = triangle(12,8);
//console.log(result);


// Problem 2: Write a function to convert degrees to radians.

let degree = 250;
function DegToRad(degree) {
    let radian = degree * (Math.PI/ 180);
    return radian;
}

let result1 = DegToRad(degree).toFixed(2);
//console.log(degree +" Degree = " + result1 + " Radian");
 

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

//getting number from user...

let number = 10;

function calculateFactorial(number) {
    
    if(number < 0) {
        return `Factorial for negative number(${number}) does not exist`;
    }
    else if(number === 0) {
        return `Factorial for ${number} is == 1`;
    }

    else {
        let fact = 1;

        for(i=1; i<=number; i++) {
            fact *= i;
        }
        return `The factorial for ${number} = ${fact}`
    }
}

let fact_result = calculateFactorial(number);

console.log(fact_result);



// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

// Problem 9: Write a function to find the maximum of five numbers.

// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]




// => Answer any 4 questions.

// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

// 2. What is JavaScript, and what is its primary purpose in web development?

// 3. Explain the difference between var, let, and const when declaring variables in JavaScript.

// 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.

// 5. What is the difference between "null" and "undefined" in JavaScript?



// => Assignment Deadline + Marks:
// 1. Each question value is 5 marks.
// 2. The deadline to submit your assignment is October 25, 2023, at 8:00 PM.


