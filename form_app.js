

let form = document.querySelector("form");

let naam = form.querySelector("#name");
let email = form.querySelector("#email");
let password = form.querySelector("#password");

form.addEventListener("submit", formHandler);


function formHandler(e) {
    e.preventDefault();

    const userInfo = {
        name : naam.value,
        email : email.value,
        password : password.value,
    }

    console.log(userInfo);

    naam.value = email.value = password.value = "";
}
