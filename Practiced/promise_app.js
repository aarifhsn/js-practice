// how to create a promise- stage- pending, resolve and reject

const promise1 = new Promise((resolve, reject)=> {

  let completedPromise = false;

  if(completedPromise) {
    resolve('completed promise1');
  } else {
    reject(new Error('not completed promise1'));
    //reject('not completed promise1); this will work also
  }

});

 // call promise

 promise1
  .then((res) =>{
    console.log(res);
 })
  .catch((err) => {
    console.log(err);
    console.log(err.message);
  })

  // Promise.all 
  // will be used when there is multiple promise function

  // Promise.race 
  // will execute a single promise which will be resolve first.


  //asyncronous function
  // callback funtion using promise function


  const TaskOne = () => {
    return new Promise((resolve, reject) => {
      resolve('Task One Completed');
    })
  }
  const TaskTwo = () => {
    return new Promise((resolve, reject) => {
      resolve('Task two Completed');
    })
  }

  const TaskThree = () => {
    return new Promise((resolve, reject) => {
      resolve('Task three Completed');
    })
  }

  const TaskFour = () => {
    return new Promise((resolve, reject) => {
      resolve('Task four Completed');
    })
  }

  const TaskFive = () => {
    return new Promise((resolve, reject) => {
      resolve('Task Five Completed');
    })
  }

  const TaskSix = () => {
    return new Promise((resolve, reject) => {
      resolve('Task six Completed');
    })
  }

  TaskOne()
  .then((res) => console.log(res))
  .then(TaskTwo)
  .then((res) => console.log(res))
  .then(TaskThree)
  .then((res) => console.log(res))
  .then(TaskFour)
  .then((res) => console.log(res))
  .then(TaskFive)
  .then((res) => console.log(res))
  .then(TaskSix)
  .then((res) => console.log(res))

 