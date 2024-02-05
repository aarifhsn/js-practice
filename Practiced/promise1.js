const promise = new Promise((resolve, reject) => {
  const completedPromise = true;

  if (completedPromise) {
    resolve("Promise has been completed");
  } else {
    reject("Not Completed");
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
