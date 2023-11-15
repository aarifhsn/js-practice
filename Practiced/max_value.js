
// one dimensional array
// create a function called highestScore that
// receive a 1d array called scores
// return the highest score

var scores = [44, 28, 9, 30,25, 40];
function highestScore(scores) {
    var max = scores[0];
    for (i =1; i<scores.length; i++) {
        if(max < scores[i]) {
        max = scores[i];
        }
    }
    return max;
}

console.log(highestScore(scores));

/*
Alternative way: 

var scores = parseInt([44, 28, 9, 30,25, 40]);

document.write(Math.max(scores));

*/

/*
get number from user:

var num1 = parseInt(Prompt("insert a number : "));
var num2 = parseInt(Prompt("insert a number : "));
var num3 = parseInt(Prompt("insert a number : "));
var num4 = parseInt(Prompt("insert a number : "));

(this continuous prompt method also can be shorted using for loop)

var max = Math.max(num1,num2,num3.num4);

document.write(max);
*/
