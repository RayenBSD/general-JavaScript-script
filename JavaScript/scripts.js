var number = 10;
var decimalNumber = 45.94;
let name = "Rayen";
var isNull = true;

const pi = 3.14;

//this a single comment 

/*
    this 
    is 
    a 
    multiline 
    comment
*/

alert("Welcome to my web site");

document.write("Welcome");

var title= document.getElementById("title");

title.innerHTML = "welcome there";

console.log(name.charAt(1));

console.log(name[3]);

console.log(name.indexOf("e"));

console.log(name.length);

console.log(name.substring(1, 4));

console.log(name.slice(1, 4));

console.log(name.substr(1, 3));

console.log(name.replace("Rayen", "RYNBSD"));

console.log(name.toUpperCase());
console.log(name.toLowerCase()); 


let currentDate = new Date();

let year = currentDate.getFullYear();
let month = currentDate.getMonth()+1;
let day = currentDate.getDate();
let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();

console.log(year + '/' + month + '/' + day + '-' + hour + ':' + minutes);

let result = 14;

if (result > 10) {
    console.log("you succeed");
}
else {
    console.log("ypu failed");
}

let x = 0;

switch (x) {
    case 0:
        console.log(false);
        break;
    case 1:
        console.log(true);
        break;
    default:
        console.log("None");
}

for (let i = 0; i < 10; i++) {
    if (i === 5)
        continue;
    console.log(i);
}

while (1) {
    console.log("Hi!");
    break;
}

do  {
    console.log("Hi!");
} while(0);

function sayHello() {
    let textName = document.getElementById("txtName").value;

    alert("Welcome, " + textName);
}

function sum (x, y) {
    return x + y;
}

let firstNumber = 20, secondNumber = 45;

alert(sum(firstNumber, secondNumber));

//DOM (Document Object Model)

let heading = document.getElementById("title");

let paragragh = document.getElementsByClassName("content");

let h2 = document.getElementsByTagName("h2");

console.log(heading);
heading.innerHTML = "this is a title";

console.log(paragragh);
paragragh[0].innerHTML = "this is a paragraph content";


console.log(h2);
h2[0].innerHTML = "<b style='color:purple;'>this is heading 2</b>"

let newParagraph = document.createElement('p');
newParagraph.innerHTML = "This is a paragraph created by JavaScript";

let content = document.getElementById("container");
content.appendChild(newParagraph);

//Array

let arr = ["khalid", 1, "rayen", 15]
//             0     1     2     3
function printArray (arr) {

    let len = arr.length;

    for (let i = 0; i < len; i++) {
        console.log(arr[i]);
    }
}

printArray(arr);
printArray(arr.sort());

let person  = {
    name: "Rayen",
    age: 17,
    city: "Tlemcen",
}


console.log(person);
console.log(person.city);
