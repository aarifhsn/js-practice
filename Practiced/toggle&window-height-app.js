// window resize 

 window.addEventListener("resize", function () {
    
    const width = window.outerWidth;
    const height   = window.outerHeight;
    
    console.log (`Width: ${width}, Height: ${height}`);
});



// js toggle
// toggle works with html details element.

const details = document.querySelector("details");
//check if it is open or not
details.addEventListener("toggle", function(e) {
    console.log(e.target.open);
})