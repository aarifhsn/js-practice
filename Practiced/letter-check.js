

// Results Grade 
// A	90–100%	4.0
// B	80–89%	3.0
// C	70–79%	2.0
// D	60–69%	1.0
// F	0–59%	0.0


var letter = prompt("Put your letter: ");

letter = letter.toLowerCase();

    if (letter == "a" || letter == "e" || letter == "i" || letter == "o"  || letter == "u" ) {
        document.write("Its a Vowel");
    }
    else { 
        document.write("Its a consonant "); 
    };
