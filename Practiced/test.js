function generateTwoRandNumber(max, cb){
    const random1 = Math.floor(Math.random()* max);
    const random2 = Math.floor(Math.random()* max);
    const result = cb(random1, random2);
    return result;
}

generateTwoRandNumber(100,(rand1, rand2) => {
    console.log(rand1, rand2);
});

console.log(generateTwoRandNumber(200,(rand1, rand2)=> rand1 + rand2));

console.log(generateTwoRandNumber(500, (rand1,rand2) => rand1 * rand2));

const foundedValue = generateTwoRandNumber(100, (rand1, rand2) => rand1*rand1 * rand2*rand2);

if(foundedValue % 2 === 0) {
    console.log("You have got an even Number, The number is = ", foundedValue);
}else {
    console.log("You have got an Odd Number as a result. The Number is = ", foundedValue);
}