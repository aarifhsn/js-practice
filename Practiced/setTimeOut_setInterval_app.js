
//HTML CONTENT
//<button class="save-btn">Save</button>
//<p class="message"></p>

//<button class="count_btn">Count Start</button>
//<p class="count_num"></p>


// setTimeout

let button = document.querySelector(".save-btn");
let message = document.querySelector("p.message");

button.addEventListener("click", saveFunction);

function saveFunction() {
  message.textContent = "User's registration Successful";

  setTimeout( () => {
    message.textContent = "";
  }, 2000);

}


// setInterval Count

let count_btn = document.querySelector("button.count_btn");

let count_text = document.querySelector("p.count_num");

count_btn.addEventListener("click", count_start);

function count_start() {
  let count =  0;
  count_text.textContent =  count;

  setInterval( () => {
    
      count++;
      count_text.textContent =  "Counting-> " + count;
   
  }, 1000

  )
}
