/*
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage:
const yearToCheck = 2024; // You can change this to the year you want to check
if (isLeapYear(yearToCheck)) {
  console.log(yearToCheck + " is a leap year.");
} else {
  console.log(yearToCheck + " is not a leap year.");
}
*/


function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true; // It's a leap year
  } else {
    return false; // It's not a leap year
  }
}

// Example usage:
const yearToCheck = 2023; // You can change this to the year you want to check
if (isLeapYear(yearToCheck)) {
  console.log(yearToCheck + " is a leap year.");
} else {
  console.log(yearToCheck + " is not a leap year.");
}