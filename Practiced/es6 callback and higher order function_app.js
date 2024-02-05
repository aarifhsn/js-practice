// es6 callback and higher order function

const taskOne = (callback) => {
  console.log("Task one");
  callback();
}
const taskTwo = (callback) => {
  setTimeout( function() {
    console.log("Task Two");
    callback();
  }, 3000);
  
}
const taskThree =(callback) => {
  console.log("Task Three");
  callback();
}
const taskFour = (callback) => {
  console.log("Task Four");
  callback();
}
const taskFive = () => {
  console.log("Task Five");
}

taskOne( f1 = () => {
  taskTwo ( f2 = () => {
    taskThree(  f3= () => {
      taskFour ( f4 = () => {
        taskFive()
      });
    });
  });
});

