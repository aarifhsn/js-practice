// set item
localStorage.setItem("username", "Arif Hassan");
localStorage.setItem("password", "1234567");

// get item

const name = localStorage.getItem("username");
const pass = localStorage.getItem("password");

console.log(name, pass);