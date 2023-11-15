let myButton = document.querySelectorAll("button");

for(let i=0; i<myButton.length; i++ ) {

    myButton[i].addEventListener("click", function () {
        
        let text = this.innerHTML;
        document.querySelector("h3").innerHTML = text + " is clicked"
    })
}