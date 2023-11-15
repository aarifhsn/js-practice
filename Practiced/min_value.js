
// one dimensional array
// create a function called highestScore that
// receive a 1d array called scores
// return the highest score

var numbers = [100,234,444,629,284,293, 345,934,968,955,348,859,213,98, 105];

function minNumbers() {
    var min = numbers[0];

    for(var i=1; i<numbers.length; i++) {
        if(min > numbers[i]) {
            min = numbers[i];
        }

    }
    return min;
}

document.write(minNumbers());

