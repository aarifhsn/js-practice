// guessing number

let guess_num = parseInt(prompt("Enter a number from 1-10"));

let ran_num = Math.floor( Math.random()*10 +1);

if(guess_num == ran_num) {
    document.write("Congrats! You have won.");
} else {
    document.write("Sorry, you input a wrong number. Number is " + ran_num);
}