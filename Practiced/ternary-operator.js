
// ternary operation for two condition //

// var number = Number(prompt("Enter your number"));

// var result = number>0 ? "Positive" : "Negative"

// document.write(result);


// ternary operator multiple condition //

// var number = Number(prompt("Enter your number"));

// var result = number>0 ? "Positive" : number <0 ? "Negative" : number == 0 ? "zero" : "not a number";

// document.write(result);


// Greater number among three numbers

var num1 = Number(prompt("Enter your first Number: "));
var num2 = Number(prompt("Enter your second Number: "));
var num3 = Number(prompt("Enter your third Number: "));

var result = num1>num2 ? num1 : num2>num3 ? num2: num3;

document.write(result);