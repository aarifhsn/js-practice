// HTML CODE
// <canvas id="map_canvas" width="400px" height="300px"></canvas>

let c = document.querySelector("#map_canvas");

// method for the dimension. getContext() is a canvas method
let ctx= c.getContext("2d");

// creating a rectangle shape- fillRect(X,Y, Width, height);
// fillStyle making it colored // fill adds inside area
ctx.fillStyle = "green";
ctx.fillRect(12,12, 376,276);


// stroke style color // stroke adds outside area
// it should be added before strokeRect. or default stroke color will be set

ctx.strokeStyle = "black";


// creating a strock outside the box (X,Y, Width, height);
ctx.strokeRect(10,10,380,280);


//finding canvas's center value to make a circle in the center

let centerX = c.width /2;
let centerY = c.height / 2;

// Making a cirle
// there is no function to make a circle like rectangle

ctx.beginPath(); // By this We are saying that the value will be start from begin

//ctx.arc(x axis, Y axis value, radius, starting point, ending angle, false );
//here false means counter clock wise, true means clock wise
ctx.arc(centerX, centerY, 80,0, 2*Math.PI, false);

// to see the circle, we must fill it with a style
ctx.fillStyle = "red";
ctx.fill();

// circle stroke color which has already added.

ctx.stroke();