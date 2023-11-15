/*
create a object and print
create schools students database using constructor method
adding function inside a constructor
*/

/*
var student1 = {
    name : "arif hassan",
    age : 35,
    roll: 28,
    cgpa : 4.69,
}

var student2 = {
    name : "hassan",
    age : 33,
    roll: 9,
    cgpa : 5.00,
}
document.write(student 1.name);
*/

var student1 = new Students("arif hassan", 35,28, 4.69, ["arabic", "bangla", "english","hindi"]);
var student2 = new Students("kazi moud", 35, 27, 4.75, ["arabic", "bangla", "english","Portugese"]);
var student3 = new Students("Monir Hossain", 34, 15, 5.00, ["bangla", "english","hindi"]);
var student4 = new Students("Amir Hossain", 35, 50, 3.60, ["bangla", "english","urdu"]);


function Students(name, age, roll, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.roll = roll;
    this.cgpa = cgpa;
    this.lang = lang;

    //create function inside a constructor
    // minimise/make easy the process to print value again and again

    this.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.roll);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}
student1.display();
student2.display();
student3.display();
student4.display();

