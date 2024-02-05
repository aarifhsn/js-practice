"use strict"

// Default Parameter

function message(text = "Hello, this is default Parameter") {
    console.log(`${text}`);
}
message("i love js6");
message();

// Rest Parameter

function value(x,y,...z) {
    console.log(`X= ${x}, Y = ${y}, Z= ${z}`);
}
value(10,20,30,40,50);