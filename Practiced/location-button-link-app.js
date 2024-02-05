let locationDiv = document.querySelector(".location");

let locationBtn = locationDiv.children[0];

locationBtn.addEventListener("click", function() {
  location.assign("https://www.facebook.com/aarifhasan");
});


// HTML CODE
// <div class="location">
//        <button> Visit my website</button>
// </div>