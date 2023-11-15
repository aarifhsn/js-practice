

// Results Grade 
// A	90–100%	4.0
// B	80–89%	3.0
// C	70–79%	2.0
// D	60–69%	1.0
// F	0–59%	0.0


var value = prompt("Put your number to get the grade: ");

// value = parseInt(value, 10);
if (value <=100) {
    if (value >= 90 ) {
        document.write("You have got A. Congrats");
    }

    else if (value >= 80) {
        document.write("You have got B. ");
    }

    else if (value >= 70) {
        document.write("You have got C. ");
    }

    else if (value >= 60) {
        document.write("You have got D. ");
    }

    else {
        document.write("Sorry. You are not passed. ");
    }
}
else {
    document.write("Please input correct value. ");
}