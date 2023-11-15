

var num = new Array();

for (i = 0; i <5; i++) {
    num[i] = parseInt(prompt("Enter a number"));
}

sum = 0;

for(i = 0; i <5; i++) {
    console.log(num[i]);
    sum = sum + num[i];
}

console.log("Sum = " + sum);