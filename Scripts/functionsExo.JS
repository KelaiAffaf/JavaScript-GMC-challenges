// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation
function quadraticEquation(a, b, c) {
  var delta = b * b - 4 * a * c;
  var x1 = (-b + Math.sqrt(delta)) / (2 * a);
  var x2 = (-b - Math.sqrt(delta)) / (2 * a);
  return [x1, x2];
}
//Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(n) {
  var colors = [];
  for (var i = 0; i < n; i++) {
    var color = "#";
    for (var j = 0; j < 6; j++) {
      color += Math.floor(Math.random() * 16).toString(16);
    }
    colors.push(color);
  }
  return colors;
}
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array) {
  var capitalizedArray = [];
  for (var i = 0; i < array.length; i++) {
    capitalizedArray.push(array[i].toUpperCase());
  }
  return capitalizedArray;
}
console.log(capitalizeArray(["hello", "world"]));

//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function linearEquation(a, b, c) {
  var x = -c / a;
  return x;
}

// ES6

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
function sum2(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum = sum + args[i];
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5));

// ...args is a spread operator. It spreads the array into individual elements.
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
console.log(array1.concat(array2));
let arraVide = [];
arraVide.push(...array1, ...array2, 11, 12, 13);
console.log(arraVide);

console.log(Math.max(...array1, ...array2));

// Write a function which generates a randomUserIp
function randomUserIp() {
  var ip = "";
  for (var i = 0; i < 4; i++) {
    ip += Math.floor(Math.random() * 256);
    if (i < 3) ip += ".";
  }
  return ip;
}
console.log(randomUserIp());

// Write a function which generates a randomMacAddress
function randomMacAddress() {
  let mac = "";
  let mac1 = (mac2 = mac3 = mac4 = mac5 = mac6 = "");
  mac1 += Math.floor(Math.random() * 32).toString(16);
  mac2 += Math.floor(Math.random() * 32).toString(16);
  mac3 += Math.floor(Math.random() * 32).toString(16);
  mac4 += Math.floor(Math.random() * 32).toString(16);
  mac5 += Math.floor(Math.random() * 32).toString(16);
  mac6 += Math.floor(Math.random() * 32).toString(16);
  if (mac1.length < 2) {
    mac1 = "0" + mac1;
  }
  if (mac2.length < 2) {
    mac2 = "0" + mac2;
  }
  if (mac3.length < 2) {
    mac3 = "0" + mac3;
  }
  if (mac4.length < 2) {
    mac4 = "0" + mac4;
  }
  if (mac5.length < 2) {
    mac5 = "0" + mac5;
  }
  if (mac6.length < 2) {
    mac6 = "0" + mac6;
  }
  mac = mac1 + ":" + mac2 + ":" + mac3 + ":" + mac4 + ":" + mac5 + ":" + mac6;

  return mac;
}

//ret length of number
function length(number) {
  return number.toString().length;
}

console.log(randomMacAddress());

let months = [
  "janvier",
  "fevrier",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "aout",
  "septembre",
  "octobre",
  "novembre",
  "decembre",
];
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
  let reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
console.log(reverseArray(months));
// reverse Methode ES6
console.log(reverseArray(months).reverse());

// add items to an array
function addItems(array, item) {
  array.push(item);
  return array;
}

console.log(addItems(months, "décembre"));
const addItemsToArray = (array, ...items) => {
  // return array.concat(items);
  // return [...array,...items];
  for (let i = 0; i < items.length; i++) {
    array.push(items[i]);
  }
  return array;
};
console.log(addItemsToArray(months, "aness", "abdelkader", "abdou"));

// Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// function userIdGeneratedByUser() {
//     let carachters="123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let numberOfCharacters = prompt("How many characters do you want in your id?");
//     let numberOfIds = prompt("How many ids do you want?");
//     let userIds = [];
//     for (let i = 0; i < numberOfIds; i++) {
//         let userId = "";
//         for (let j = 0; j < numberOfCharacters; j++) {
//             userId += carachters[Math.floor(Math.random() * carachters.length)];
//         }
//         userIds.push(userId);
//     }
//     return userIds;
// }
// console.log(userIdGeneratedByUser());

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(array, index) {
  // let newArray = [];
  // for (let i = 0; i < array.length; i++) {
  //     if (i !== index) {
  //         newArray.push(array[i]);
  //     }
  // }
  // return newArray;

  return array.filter((item, i) => i !== index);
  // return array.slice(index,index+1);
}
console.log(removeItem(months, 2));

//    Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(10));

// Write a function which takes any number of arguments and return the sum of the arguments
function sumOfArguments(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}
console.log(sumOfArguments(13, 22, 3, 64, 5, 6, 37, 8, 9, 10));

// Sum of Odd numbers It takes a number parameter and it adds all the numbers in that range.y

function sumOddEven(number) {
  let Odd = 0;
  let Even = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      Odd += i;
    } else {
      Even += i;
    }
  }
  // return {
  //     odd:Odd,
  //     even:Even
  // };
  return [Odd, Even];
}
console.log(sumOddEven(10));

function checkEvenOdd(number) {
  number % 2 === 0 ? console.log("even") : console.log("odd");
}

// Switch
let i=34;
switch (i) {
  case 1:
    console.log("one");
    break;

  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  default:
    console.log("default");
}
// let age=prompt("enter your age");
// switch(true){
//     case age>18:
//         console.log("adult");
//         break;
//     case age>13:
//         console.log("teenager");
//         break;
//     case age>3:
//         console.log("kid");
//         break;
//     default:
//         console.log("baby");

// }

// Write a function arrayOfRgbColors which return any number of RGB colors in an array
function arrayOfRgbColors(number) {
    let array = [];
    for (let i = 0; i < number; i++) {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        array.push(`rgb(${r},${g},${b})`);
    }
    return array;
    }
    console.log(arrayOfRgbColors(5));


    // Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
    function convertHexaToRgb(hexaColor) {
        let r = parseInt(hexaColor.substring(1, 3), 16);
        let g = parseInt(hexaColor.substring(3, 5), 16);
        let b = parseInt(hexaColor.substring(5, 7), 16);
        return `rgb(${r},${g},${b})`;
    }
    console.log(convertHexaToRgb("#ff00ff"));



    // Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
    function convertRgbToHexa(rgbColor) {
        let r = rgbColor.substring(4, rgbColor.indexOf(","));
        let g = rgbColor.substring(rgbColor.indexOf(",") + 1, rgbColor.lastIndexOf(","));
        let b = rgbColor.substring(rgbColor.lastIndexOf(",") + 1, rgbColor.length - 1);
        return `#${r}${g}${b}`;
    }
    console.log(convertRgbToHexa("rgb(255,102,255)"));



    // Akram: generate rundom alphabet letter
    function generateRandomAlphabet() {
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        return randomLetter;
    }
    console.log(generateRandomAlphabet());


    // Write a function generateColors which can generate any number of hexa or rgb colors.
    function generateColors(number) {
        let colors = [];
        for (let i = 0; i < number; i++) {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            colors.push(`rgb(${r},${g},${b})`);
        }
        return colors;
    }
    console.log(generateColors(5));
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    let carachters="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWYZ";
    let id="";
    for (let i = 0; i < 7; i++) {
        id+=carachters[Math.floor(Math.random() * carachters.length)];
    }
    return id;
}
console.log(userIdGenerator());

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(param) {
    return param === "";
}
console.log(isEmpty(""));
console.log(isEmpty(" this is not Empty , it should return false"));


// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variable) {
    let regex = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
    return regex.test(variable);
}
console.log(isValidVariable("$variable"));
console.log(isValidVariable("_variable"));
console.log(isValidVariable("variable"));
console.log(isValidVariable("variable_"));
console.log(isValidVariable("variable$"));
console.log(isValidVariable("variable$_"));
console.log(isValidVariable("variable_$"));
console.log(isValidVariable("variable_$_"));
console.log(isValidVariable("variable$_$"));
console.log(isValidVariable("variable$_$_"));
console.log(isValidVariable("variable_$_$"));
console.log(isValidVariable("variable_$_$_"));
console.log(isValidVariable("variable$_$_$"));
console.log(isValidVariable("variable$_$_$_"));
console.log(isValidVariable("variable_$_$_$"));
console.log(isValidVariable("variable_$_$_$_"));
console.log(isValidVariable("12variable$_$_$_$"));
console.log(isValidVariable("12_$_$_$_$"));



// isPrime
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorial(5));

// 17. Write a function which checks if all the items of the array are the same data type.
function isSameType(array) {
    let type = typeof array[0];
    for (let i = 1; i < array.length; i++) {
        if (typeof array[i] !== type) {
            return false;
        }
    }
    return true;
}
console.log(isSameType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(isSameType(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]));
console.log(isSameType([true, false, true, true, true, true, true, true, true, true]));
console.log(isSameType([1, 2, 3, 4, "b", "f", false, 8, 9, 10]));

// Write a functions which checks if all items are unique in the array
function isUnique(array) {
    let unique = [];
    for (let i = 0; i < array.length; i++) {
        if (unique.indexOf(array[i]) === -1) {
            unique.push(array[i]);
        }
    }
    return array.length === unique.length;
}
console.log(isUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));// true
console.log(isUnique([1, 2, 3, 4, 5, 6, 7, 8, 10, 10]));//false

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(array, item) {
    if (array.length < 5) {
        return "item not found";
    }
    array[4] = item;
    return array;
}
console.log(modifyArray([1, 2, 3, 4, 5], "new item"));// [1, 2, 3, 4, "new item"]
console.log(modifyArray([1, 2, 3, 4], "new item"));// "item not found"
console.log(modifyArray([1, 2, 3], "new item"));// "item not found"
console.log(modifyArray([1, 2], "new item"));// "item not found"
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM'], "new item"));// [ 'Google', 'Facebook','Apple', 'Amazon','Microsoft',  'new item' ]
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot'], "new item"));// [ 'Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'new item' ]


// 14. Filter out companies which have more than one 'o' without the filter method
// first methode:
function filterOutCompanies(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === "o") {
                count++;
            }
        }
        if (count > 1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(filterOutCompanies(["Google", "Facebook", "Amazon", "Microsoft", "IBM", "Apple"]));// ["Google", "Facebook", "Microsoft", "IBM"]
// Second methode:
function filterOutCompanies2(array) {
    return array.filter(function (company) {
        let count = 0;
        for (let i = 0; i < company.length; i++) {
            if (company[i] === "o") {
                count++;
            }
        }
        return count > 1;
    });
}
console.log(filterOutCompanies2(["Google", "Facebook", "Amazon", "Microsoft", "IBM", "Apple"]));// ["Google", "Facebook", "Microsoft", "IBM"]
// Third methode:

function filterOutCompanies3(array) {
    return array.filter((company) => {
      if (company.match(/o/g) !== null) {
        if (company.match(/o/g).length > 1) {
          return company;
        }
      }
  });
}


console.log(filterOutCompanies3(["Google", "Facebook", "Amazon", "Microsoft", "IBM", "Apple"]));// ["Google", "Facebook", "Microsoft", "IBM"]

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list
let countries = ["USA", "Germany", "France", "Russia", "China", "India", "Australia"];
function checkIfExist(array) {
    if (array.indexOf("Ethiopia") === -1) {
        array.push("Ethiopia");
    }
    return array;
}
console.log(checkIfExist(countries));// ["USA", "Germany", "France", "Russia", "China", "India", "Australia", "Ethiopia"]

