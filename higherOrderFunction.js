function square(x) {
  console.log(x * x);
}

function higherOrderFunction(value, callback) {
  callback(value);
}

higherOrderFunction(6, square);
