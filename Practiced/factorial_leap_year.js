// write a function that returns true if a number is even and false if a number is odd.

function isEven(number) {
    if(number%2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(48));
console.log(isEven(57));
console.log(isEven(0));

// Create a function isLeapYear that takes a year as a parameter and returns true if it's a leap year or false if it's not.

function isLeapYear(year) {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0) {
        return true;
    }
    else {
        return false
    }
}

console.log(isLeapYear(2020)); 
console.log(isLeapYear(1100));
console.log(isLeapYear(2023));

// Find the sum of the numbers from 1 to 10 (using loop and function).

function total() {
    let sum =0;
    for(let i=1; i<=10; i++) {
        sum =sum + i;
    }
    return sum;
}
console.log(total());


// Create a function calculateFactorial that takes a positive numbereger as a parameter and calculates and returns its factorial.
//getting the value from user

let number = parseInt(prompt("Enter a number to get its factorial: "));

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