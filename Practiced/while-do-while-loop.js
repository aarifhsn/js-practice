//  Difference of while loop and do while lop: 
//  while loop wont run without checking condition, but do while loop
//  first print the initial value, then will check condition
//  while loop
//  sum of the number which is divided by 2 and 6

var i = 0;
var sum = 0;

while(i <=100) {
    if (i%2 ==0 && i%6==0 ) {
        document.write(i + "+");
        sum = sum +i;
    }
    i++;
}
document.write("sum= "+ sum);


//do while loop

var i =1;

do {
    document.write(" " + i);
    i++;
}
while (i<= 10)



