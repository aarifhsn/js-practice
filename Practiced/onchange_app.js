
let myVar = document.querySelectorAll("input[name=program]");


Array.from(myVar).map((newVar) => {
    newVar.addEventListener("change", myFunction);
});

function myFunction(e) {
    if(e.target.checked) {
    console.log(e.target.value);
}}

let department = document.getElementById("department");

department.addEventListener("change", handleDepartment);

function handleDepartment(e) {
    console.log(e.target.value);
}

