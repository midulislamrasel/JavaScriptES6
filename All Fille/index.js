// let  = এক variable মান পরিবতন করা যাবে
//const = এক variable মান পরিবতন করা যাবে না

/*let x = 10;
let y = 10;
let sum = x + y;
// console.log("sum is " + sum  +"the end")
console.log(`sum  is ${sum} the end`) */

/*
let name = "Midul islam";
// let message = "i am " + name+" I am learning JavaScript";
let message = `i am ${name} I am learning JavaScript`;
console.log(message); */


// function
/*
function add(x,y) {
    var sum = x + y;
    console.log(sum)
}
add(10, 25); */


// ES6 function
/*const add = (x,y) => {
    sum = x + y;
    console.log(sum)
}
add(10,25)*/


//Hoisting  & strick mode


//Default and rest parameter
//Default parameter
/*
function message(text = "Hello this is default parameter") {
    console.log(`${text}`)
}
message();
message("I love Js es6");   */


//rest parameter
/*
function sum(x, y, ...z) {
    console.log(`x = ${x}, y=${y}, z=${z}`)
}
sum (10,20,54,10,52,)
*/


//spread Operator
/*
function addNumber(x, y, z) {
    return x + y + z;
}
let number = [15, 10, 23]
console.log(addNumber(...number)); //rest and spread operator ...used

let number1 = [55, 10, 20, ...number] // array push করার জন্য ... ব্যাবহার করা হয়েছে

console.log(number1)
*/


//Object Literals
/*function studentInfo(name, age) {
    return {
        name,
        age
    }
}
console.log(studentInfo("Miudl islam ", 21));

//-----------------
let message = {
    body() {
        return `hi , i am object function`
    }
}
console.log(message.body()) //objet এর মধ্যে Function ব্যাবহার করা হয়েছে
*/


// for ....of  , for ...in
/*
const names = ["A", "B", "C", "D", "E", "F", "G"];

for (const name of names) {
    // console.log(name);
}
//--------------
let student = {
    ID: 25,
    Name: "Midul islam ",
    Cgpa: 3.78,
}
for (const x in student) {
    // console.log(x) //key
    console.log(student[x]) //value
}
*/



/*
//for
var number = [10, 12, 20, 30, 22];
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}
// forEach
var number1 = [10, 12, 20, 30, 22];
number1.forEach(x => {
    console.log(`ForEach ${x}`)
});
*/


/*
// forEach
var numbers = [2, 5, 7, 8, 3, 5];
var squareNumbers = [];

numbers.forEach(x => {
    squareNumbers.push(x * x);
});
// console.log(squareNumbers);

// map
// forEach ডিকলিয়ার করতে হয়েছে কিস্তু map এর হ্মেতে ডিকলিয়ার করতে হবে না ।
var numbers = [2, 5, 7, 8, 3, 5];
var squareNumbers =numbers.map(x => {
    return x * x;
});
// console.log(squareNumbers);

//filter

var number = [22, 34, 9, 5, 10, 33, 8, 65, 3];
var newNumbers =numbers.filter(function(x){
    return x>10;
});
console.log(newNumbers);
console.log(number);

*/


/*
function display1() {
    console.log("Display 01 ")
}
display1();


//ES6
const display2 = ()=> {
    console.log("Display 02")
}
display2();


// যদি কোন পেরামিটার না থাকে তাহলে {} ব্যাবহার না করলে হবে । 
const display3 = () =>console.log("Display 03")
display3();


//return
const display4 = ()=> {
    return "Display 04"
}
console.log(display4())


// return ব্যাবহার না করলে {} দরকার নাই
// ‍return ব্যবহার করি তাহলে {} দিতে হবে 
const display5 = () => "Display 05 "
display5();
console.log(display5())

*/


/*
//function  01. filter 02. map
var students = [
    {
        id : 100,
        name: 'Midul',
        gpa: 3.52
    },
    {
        id : 101,
        name: "Rasel",
        gpa: 4.52
    },
    {
        id : 102,
        name: "Mahodi",
        gpa: 2.52
    },
    {
        id : 103,
        name: "Nachirul",
        gpa: 3.70
    },
    {
        id : 104,
        name: "Akther",
        gpa: 4.52
    },
    {
        id : 100,
        name : "Zabed",
        gpa: 3.50
    }
]
//01
function studentName() {
    return students.filter(function (x) {
        return x.gpa > 4.5
    }).map(function (y) {
        return y.name;
    })
}
console.log(studentName())


//function arrow  01. filter 02. map
//02
const studentName1 = () => students.filter((x) => x.gpa > 4.5).map((y) => y.name);
console.log(studentName1())
*/




























