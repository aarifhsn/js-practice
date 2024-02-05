// in foreache function, we had to declare the array where the value
// will be stored.
//using map function will make it easy we then dont need to declare the array before
// value will be automatically stored in an array


const num2 = [10,20,30,40,50,60];

const sqrNumber = num2.map(function(x) {
    return x*x;
});

console.log(sqrNumber);

//filter function
// show the number which is greater than 10 

const num5 = [34,32,3,4,8,56,12,9,10];

const newNumber = num5.filter(function(x) {
    return x>10;
})

console.log(newNumber)