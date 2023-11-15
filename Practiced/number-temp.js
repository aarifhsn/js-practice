
var fah_scale = parseFloat(prompt("Enter temperature in Fahrenheit: "));

var celc_scale= (fah_scale - 32) * (5/9);

var celc_value = celc_scale.toFixed(2);

document.write("Temperature in Celcius scale = " + celc_value);