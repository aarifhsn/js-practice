const inventory = [
  { name: "aparatur", type: "fruits", quantity: 5 },
  { name: "turner", type: "vegetable", quantity: 0 },
  { name: "bananas", type: "fruits", quantity: 23 },
  { name: "juice", type: "bavarage", quantity: 5 },
  { name: "cheries", type: "fruits", quantity: 22 },
  { name: "fish", type: "iron", quantity: 12 },
];

function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = Object.groupBy(inventory, myCallback);

console.log(result2);

const numbers = [3, 4, 1, 5, 2];

const splicedNumbers = numbers.toSpliced(1, 1);
console.log(splicedNumbers);
const sortedNumbers = numbers.toSorted();
console.log(sortedNumbers);
const reversedNumbers = numbers.toReversed();
console.log(reversedNumbers);

const fruits = ["apple", "banana", "orange", "banana", "kiwi"];

const lastIndex = fruits.lastIndexOf("banana");
console.log(lastIndex);
