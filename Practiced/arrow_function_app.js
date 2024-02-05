// Arrow function with map and filter
var students = [
    {
        id : 101,
        name : 'Anisul Islam',
        gpa : 3.92
    },
    {
        id : 102,
        name : 'Rabeya Begum',
        gpa : 3.12
    },
    {
        id : 103,
        name : 'Rokib',
        gpa : 2.92
    },
    {
        id : 104,
        name : 'Limon',
        gpa : 4.92
    },
]
console.log(students);

// return the name of whose gpa is greater than 3 using traditional function

function studentsName1() {
    return students.filter(function(x){
        return x.gpa >3
    }).map(function(y){
        return y.name;
    })
}

//console.log(studentsName1());

// return the name of whose gpa is greater than 3 using arrow function

const studentsName2 = () => students.filter(x => x.gpa>3).map(y => y.name);

console.log(studentsName2());