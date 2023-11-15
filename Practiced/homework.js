//1. Declare a variable called name and assign your name to it.

var name = "Md Arif Hassan";

document.write(name);


// 2. Create a variable age and assign your age to it.

var age = 33;

document.write(age);

// 3. Calculate the sum of two numbers, num1 and num2.

var num1 = 34;
var num2 = 23;

let sum = num1+ num2;
document.write(sum);


// 4. Calculate the product of two numbers, num1 and num2.

var num1 = 22;
var num2 = 98;

let mult = num1 * num2;
document.write(mult);

// 5.0 Check if a number is even or odd. 

var number = 50;
if(number%2 == 0) {
    document.write("Even")
} else {
    document.write("Odd")
}

// 5.1 Create a variable isEven and assign true if the number is even, and false if it's odd.

var isEven = x;
if(x%2 ==0 ) {
    document.write("True")
} else {
    document.write("False")
}


// 6. Create an array favoriteColors containing three favorite colors of yours.

var favoriteColors = ["Blue", "White", "Green"];

// 7. Access and log the 2nd favorite color from the favoriteColors array.

var secondFav = favoriteColors[1];
document.write(secondFav);

// 8. Add a new color, "purple," to the favoriteColors array.

favoriteColors.push("SkyBlue");
document.write(favoriteColors);

// 9. Check if a given number is greater than 10. If it is, log "Greater than 10," otherwise, log "Less than or equal to 10."

var given_numb = 5;
if(given_numb >10 ) {
    console.log("Greater than 10")
} else {
    console.log("Less than or equal to 10.")
}

// 10. Create a variable isRaining and assign true if it's raining, and false if it's not.

var isRaining;

if(isRaining) {
    document.write("True")
} else {
    document.write("False")
}

// 11. Create a variable temperature and assign a value. Then, check if it's hot (greater than 30),
//warm (between 20 and 30), or cold (less than 20).

var temperature = 23;

if(temperature >30) {
    document.write("It's Hot")
} else if(temperature>=20 && temperature<=30){
    document.write("Warm")
} else {
    document.write("cold")
}

// 12. Calculate the area of a rectangle with a given width and height.
 let width = 30;
 let height = 20;

 let rectangle = width * height;

 document.write(rectangle);

// 13. Create an array favoriteFruits containing five favorite fruits of yours.

var favoriteFruits = ["Mango", "Guava", "Orange", "Pineaple", "Banana"];
document.write(favoriteFruits);

// 14. Access and log the 3rd favorite fruit from the favoriteFruits array.

var thirdFruit = favoriteFruits[2];
document.write(thirdFruit);

// 15. Add a new favorite fruit, "grape," to the favoriteFruits array.

favoriteFruits.push(["Grape"]);
document.write(favoriteFruits);

// 16. Check if a student's score is greater than or equal to 70. If it is, log "Pass," otherwise, log "Fail."

let score = 50;

if (score>=70) {
    console.log("Pass");
} else {
    console.log("Fail")
}

// 17. Create an array of three favorite movies.

var favoriteMovies = ["Aynabaji", "Ratshasan", "Thriller"];
document.write(favoriteMovies);

// 18. Access and log the 2nd favorite movie from the favoriteMovies array.
var secondFavMov = favoriteMovies[1];
document.write(secondFavMov);