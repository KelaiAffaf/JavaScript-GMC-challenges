let age1, fName, lName;
age1 = 23;
fName = "afaf";
lName = "kelai";

console.info("this is info");
console.warn("warnning");
console.log(`my name is ${fName} ${lName} and am ${age1}`); // ES6
console.log("my name is" + fName + " " + lName + " and am " + age1); // ES5

// {} curly braces
//[] square brackets
//() parenthesis
//'' double quotes
//"" single quotes
//`` backticks
//$ dollar sign
//_ underscore
//- dash

let user = "John";
let account = 25;
let message = "Hello";

//camelCase  : first letter is lowercase, rest of the letters are uppercase

// let userName = 'John'
// console.log (userName)
// prompt it's a pop up that ask you to enter something
// let score = prompt("how much is your score?");
//parseInt() convert string to number
// let totalScore = parseInt(score) + 10;
// console.log is a pop up that display something
// console.log(totalScore);
// confirm ? true : false
// let res = confirm("are you sure?");
// console.log(res);

// java script Data types :
// string
// number
// boolean
// undefined : is a variable that is not defined
// null : is a variable
// object : is a variable that is not a number or a string
let person = {
  name: "John",
  lastName: "Doe",
  age: 25,
};
// Math Object
// Math.PI => 3.14
// Math.round(2.5) => 3
// Math.ceil(2.5) => 3
// Math.floor(2.5) => 2
// Math.sqrt(4) => 2
// Math.pow(2, 3) => 8
// Math.abs(-4) => 4
// Math.min(2, 3, 4) => 2
// Math.max(2, 3, 4) => 4
// Math.random() => 0.9

// String Object
// String.length => length of the string
let fullName = "Akram touati";
console.log(`string length ${fullName.length}`);
//String.prototype.toUpperCase() => toUpperCase()
console.log(fullName.toUpperCase());
//Strin.prototype.toLowerCase() => toLowerCase()
console.log(fullName.toLowerCase());
//String.prototype.indexOf() => indexOf()
console.log(fullName.indexOf("touati")); //return the index of the first occurence of the string

//Date types
// Date.now() => return the current time in milliseconds
let date = new Date();
console.log(date);
//Date.prototype.getFullYear() => getFullYear()
let fullYear = date.getFullYear();
console.log(fullYear);

//Date.prototype.getDate() => getDate()
let date1 = new Date();
let day = date1.getDate();
console.log(day);

// array : is a variable that is not a number or a string
let array = [1, 2, 3, 4, 5];
// function : is a variable that is not a number or a string
function sayHello() {
  console.log("hello");
}
function avrege(a, b) {
  return (a + b) / 2;
}

// arrow function //es6
const sayHi = () => {
  console.log("hello");
};
// symbol : is a variable that is not a number or a string
let symbol = Symbol("id");
// bigint : is a variable that is not a number or a string
let bigint = BigInt(10);

//Changing Data Type (Casting)
//parseInt() convert string to number
let score = "100";
let totalScore = parseInt(score) + 10;
console.log(totalScore);
//parseFloat() convert string to number
let score1 = "100.5";
let totalScore1 = parseFloat(score1) + 10;
console.log(totalScore1);

//Number
//Number.isInteger() => isInteger()
let score2 = 100;
let totalScore2 = Number.isInteger(score2);
console.log(totalScore2);
console.log(typeof totalScore2);

// cast with Number
let score3 = "100";
let totalScore3 = Number(score3) + 10;
console.log(totalScore3);

//Basic operators, maths
// + - * / %
// == === != !== > < >= <=
// && || !
// && = and
// equale sign is used to compare the value of two variables
let a = 10;
if (a % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

// == vs === ? == is used to compare the value of two variables
10 == "10" ? console.log("yes") : console.log("no");
if (10 == "10") {
  console.log("yes");
} else {
  console.log("no");
}

// === is used to compare the value and type of two variables
10 === "10" ? console.log("yes") : console.log("no");

// != !==
// != is used to compare the value of two variables , if the value is not equal to the other value
// !== is used to compare the value and type of two variables , if the value is not equal to the other value

10 != "10" ? console.log("not equal") : console.log("  equal");
10 !== "10" ? console.log(" not equal") : console.log("equal");


// % is used to find the remainder of a division
// 10 % 3 = 1
// 10 % 4 = 2


// Increment/decrement
// Increment : ++
let score = 10;
score++;  //score = score + 1
// Decrement : --
let score1 = 10;
score1--; //score1 = score1 - 1

// increment +3 
let score2 = 10;
score2 += 3; //score2 = score2 + 3


