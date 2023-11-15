/* function factorialRecursive(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

// Example usage:
const number = 0; // Change this to the number for which you want to calculate the factorial
const result = factorialRecursive(number);
console.log(`The factorial of ${number} is ${result}`);
*/

/* function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage:
const number = 5; // Change this to the number for which you want to calculate the factorial
const result = factorialIterative(number);
console.log(`The factorial of ${number} is ${result}`);
*/
const factorialMemoization = (function () {
  const memo = {};

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }

    if (memo[n]) {
      return memo[n];
    }

    memo[n] = n * factorial(n - 1);
    return memo[n];
  }

  return factorial;
})();

// Example usage:
const number = 10; // Change this to the number for which you want to calculate the factorial
const result = factorialMemoization(number);
console.log(`The factorial of ${number} is ${result}`);