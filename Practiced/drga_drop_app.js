

let div = document.querySelector("div");

let p = document.querySelector("p");

p.addEventListener("dragstart", function(e) {
  e.dataTransfer.setData("Text", e.target.id);
});

div.addEventListener("dragover", function(e) {
  e.preventDefault();
});

div.addEventListener("drop", function(e) {
  let dataId = e.dataTransfer.getData("Text");
  div.appendChild(document.getElementById(dataId));
  e.target.style.backgroundColor = "blue";

  e.preventDefault();
});

