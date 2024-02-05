// foreach loop 

const value = [10,20,30,40,50];

value.forEach(myFunction);

function myFunction(x) {
    //console.log(x)
}

// below code will work same but way is easy


const numbers = [10,20,30,40,50];

numbers.forEach(function(x) {
    console.log(x);
});

// set the new value in another array

const num = [10,20,30,40,50,60];
const resultArray = [];

num.forEach(function(x) {
    resultArray.push(x*x);
});
console.log(resultArray)

// add plus 5 to each numbers and push them in a new array

const num2 = [10,20,30,40,50,60];

num2.forEach(function(x, index, arr) {
    arr[index] = x+5;
    
});
console.log(num2);
