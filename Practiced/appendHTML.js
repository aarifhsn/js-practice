
let heading = document.createElement("h2");

let text = document.createTextNode("This is heading text");

heading.appendChild(text);

let myDiv = document.querySelector(".text_head");

myDiv.appendChild(heading);

// when add content before an element
//let pContent = document.getElementsByTagName("p")[0];
//myDiv.insertBefore(heading ,pContent);