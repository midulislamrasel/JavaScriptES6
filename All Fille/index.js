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




//Destructuring
//array Destructuring

// let number = [10, 12, 43, 21, 40, 42, 11];
// let [num1, num2, num3, num4, num5, num6 ,num7] = number;
// console.log(number = [num7]);

//swap variables
// let a = 10, b = 20;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


//object Destructuring
// const student = {
//     id: 101,
//     fullName: 'Akash',
//     gpa: 3.20,
//     languages: {
//         native: 'Bangla',
//         beginner:'english'
//     }
// }
// console.log(student.id)
// console.log(student.fullName)
// console.log(student.gpa)
//const { id, fullName, gpa, languages } = student; //Destructuring Object
// console.log(id);
// console.log(fullName);
// console.log(gpa);
// console.log(languages.native); //



//Destructuring Function parameters
// const studentInfo = ({id,fullName}) => {
//     console.log(`${id} , ${fullName}`)
// }

// const student1 = {
//     id: 101,
//     fullName: 'Midul islam',
//     gpa: 3.40
// }
// studentInfo(student1)




//Array Methods
// find(callback,vale) return the value of the first element that pass certain condition

// let number = [13, 15, 23, 12, 42, 12, 41];
// let firstEventNumber = number.find(x => x % 2 === 0);
// console.log(firstEventNumber)

//findIndex (callback, value)return the index of the first element that pass certain condition





// string Methods
//startWith (searchString , position) -> check a string starts with another string
// const message = "Today is friday";
// console.log(message.startsWith("Today"))

//endsWith(searchString,length) -> check a string ends with another string
// const message1 = "Today is friday";
// console.log(message1.endsWith("Today"))
// console.log(message1.endsWith("friday"))





//synchronous vs Asynchronous
// const taskOne = () => {
//     console.log("task one");
// }
// const dataLoding = () => {
//     console.log("task two")
// }
// const taskTwo = () => {
 //     // const dataLoding = () => {
//     //     console.log("task two Data loading")
//     // }
//     setTimeout(dataLoding, 2000); //এক কাজ করতে ‍ সময় লাগলে ‍ সে কাজ অফ রেখে বাকি কাজ করবে সেই জন্য setTimeout used করা হয় ।
// }
// const taskThree = () => {
//     console.log("task three")
// }
// const taskFore = () => {
//     console.log("task fore")
// }
// const taskFive = () => {
//     console.log("task Five")
// }
// taskOne();
// taskTwo();
// taskThree();
// taskFore();
// taskFive()






//CallBack and higher-order function

const taskOne = (callback) => {
    console.log("task one");
    callback();
}
const taskTwo = (callback) => {
    const dataLoding = () => {
        console.log("task two Data loading")
        callback()
    }
    setTimeout(dataLoding, 2000);
}
const taskThree = (callback) => {
    console.log("task three")
    callback();
}
const taskFore = (callback) => {
    console.log("task fore")
    callback();
}
const taskFive = () => {
    console.log("task Five")
    
}

taskOne(function f1() {
    taskTwo(function f2() {
        taskThree(function f3() {
            taskFore(function f4() {
                taskFive()
            })
        })
    });
})

