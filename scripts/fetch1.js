// console.clear();

// fetch("https://jsonplaceholder.typicode.com/todos/1011")
// // Convert Readablestream to json
// // create a condition so that .catch method can show the error when found
// .then((res) => {
//     if(!res.ok) {
//         const message = `${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then((res) => console.log(res))

// // use catch to handle error
// .catch((err) => console.log(err))

// Creating Resources
// post new data 

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
})
.then((res) => {
    if(!res.ok) {
        const message = `${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res) => console.log(res))

// use catch to handle error
.catch((err) => console.log(err))

// Update Resources
// mention the posts number which we will update

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PUT', 
    // WE can also use patch replacing PUT to update any value
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        title: 'fooMA',
        body: 'barMA',
        userId: 1,
    }),
})
.then((res) => {
    if(!res.ok) {
        const message = `${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res) => console.log(res))

// use catch to handle error
.catch((err) => console.log(err))


// DELETE any value

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'DELETE'
})
.then((res) => {
    if(!res.ok) {
        const message = `${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res) => console.log(res))

// use catch to handle error
.catch((err) => console.log(err))