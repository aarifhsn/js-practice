

let btn = document.querySelectorAll("button");

Array.from(btn).map(
  (single_button) => {
  single_button.addEventListener('click', function() {
    btn.classList.add("btn_click");
  })
}
);
