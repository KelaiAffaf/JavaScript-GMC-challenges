// typeOf()==> it returns the type of the variable
// let a = "hello"; console.log (typeof a);// string

// Object String methodes 
// string.length ==> it returns the length of the string
// string.capitalize() ==> it capitalizes the first letter of the string
let message = "hello world";
console.log(message.toUpperCase());
// toUpperCase() ==> it converts the string to uppercase
let message2="HELLO WORLD";
console.log(message2.toLowerCase());
// toLowerCase() ==> it converts the string to lowercase
// string.charAt(index) ==> it returns the character at the specified index
// string.indexOf(searchValue,fromIndex) ==> it returns the index of the first occurrence of the specified value in the string
console.log(message.indexOf("o"));
// string.split(separator,limit) ==> it splits the string into an array of substrings
console.log(message.split(" "));

let sentence ="Full stack JS track"
console.log(sentence.charCodeAt("J"));