const card_body = document.querySelector(".card-body");
const form = document.querySelector("form");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = document.querySelector(".resultText");
const remainingAttempts = document.querySelector(".remainingAttempts");

function checkNumber(guessingNumber) {
    const randomNumber = getRandomNumber(5);
    if(guessingNumber === randomNumber) {
        resultText.innerHTML = "you have won";
    } else {
        resultText.innerHTML = "you have lost"
    }
}


function getRandomNumber(limit) {
    return Math.floor(Math.random()* limit) + 1;
}