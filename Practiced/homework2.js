//=> Solve Those Problems 

//Problem 1: Write a loop to display numbers from 1 to 50.
let i;

for (i=1; i<=50; i++) {
    document.write(i + " ");
}

//Problem 2: Write a loop to display even numbers from 36 to 96.

for (i=36; i<=96; i+=2) {
    document.write(i + " ");
}

//Problem 3: Write a loop to display odd numbers from 51 to 101.

for (i=51; i<=101; i+=2) {
    document.write(i + " ");
}

//Problem 4: Write a loop to calculate the sum of numbers from 1 to 5.

let sum =0;
for (i=1; i<=5; i++) {
    sum += i ;
}
document.write(sum +" ");

//Problem 5: Write a loop to calculate the product of numbers from 1 to 5.

let product =1;
for (j=1; j<=5; j++) {
    product *= j ;
}
document.write(product +" ");


//Problem 6: Write a loop to display the squares of numbers from 1 to 5.

let sqr;
for (k=1; k<=5; k++) {
    sqr = k*k ;
    document.write(sqr +" ");
}


//Problem 7: Write a loop and display all the elements in this array. 
//["Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", "Audi", "Hyundai", "Kia"];

let carArray = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", "Audi", "Hyundai", "Kia"];

for (i=0; i<carArray.length; i++) {
    document.write(carArray[i] + " ");
}