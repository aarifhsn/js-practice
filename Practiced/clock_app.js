// HTML code
{/* <button class="time_btn">Start Clock</button>
<p class="message" style="
    background: yellowgreen;
    display: inline-block;
    margin-left: 10px;
    padding: 20px;
    font-size: 40px;
    font-weight: bold;
    border-radius: 6px;
"></p> */}

let timeButton = document.querySelector(".time_btn");

let timeMessage = document.querySelector("p.message");

timeButton.addEventListener("click", timeFunction);

function timeFunction() {
  let date = new Date();

  let hours = date.getHours();
  let mins = date.getMinutes();
  let seconds = date.getSeconds();

  mins = formateTime(mins);
  seconds = formateTime(seconds);

  let time = hours + " : " + mins + " : " + seconds;

  timeMessage.textContent = time;

  setInterval(timeFunction, 1000);

}

function formateTime(value) {
  if (value <10) {
    value = "0" + value;
  }
  return value;
}
