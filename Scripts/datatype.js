// ### **Exercise: Level 1**

// 1. Declare a variable named challenge and assign it to an initial value **'**  **'**.
let challenge = 'this is a challenge';
// 2. Print the string on the browser console using **console.log()**
console.log(challenge);
// 3. Print the **length** of the string on the browser console using *console.log()*
console.log(challenge.length);
// 4. Change all the string characters to capital letters using **toUpperCase()** method
console.log(challenge.toUpperCase());
// 5. Change all the string characters to lowercase letters using **toLowerCase()** method
console.log(challenge.toLowerCase());
// 6. Cut (slice) out the first word of the string using **substr()** or **substring()** method
console.log(challenge.substr(0, challenge.indexOf(' ')));
//substr ==> it takes two parameters: the first parameter is the index of the first character 
// to be included in the result, the second parameter is the number of 
// characters to be included in the result.


// 7. Slice out the phrase Full stack from Full stack JS track .
let sentence = 'Full stack JS track';
console.log(sentence.slice(sentence.indexOf(' '), sentence.indexOf(' ') + 8));
// 8. Check if the string contains a word **Script** using **includes()** method
console.log(sentence.includes('script'));
// 9. Split the **string** into an **array** using **split()** method
console.log(sentence.split(' '));
// 10. Split the string Full stack JS track  at the space using **split()** method
console.log(sentence.split(' '));
// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' **split** the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));
// 12. Change Full stackJS track  to Full stackJS group using **replace()** method.
console.log(sentence.replace('JS track', 'JS group'));
// 13. What is character at index 15 in 'Full stack JS track ' string? Use **charAt()** method.
console.log(sentence.charAt(15));
// 14. What is the character code of J in 'Full stack JS track ' string using **charCodeAt()**
console.log(sentence.charCodeAt(6));
// 15. Use **indexOf** to determine the position of the first occurrence of **a** in Full stackJS track 
console.log(sentence.indexOf('a'));
// 16. Use **lastIndexOf** to determine the position of the last occurrence of **a** in Full stackJS track 
console.log(sentence.lastIndexOf('a'));
// 17. Use **indexOf** to find the position of the first occurrence of the word **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence2.indexOf('because'));
// 18. Use **lastIndexOf** to find the position of the last occurrence of the word **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
let sentence3 = 'You cannot end a sentence with because because because is a conjunction';
// lastIndexOf ==> it will return the position of the last occurrence of the word 'because' , if there is no occurrence of the word 'because' it will return -1
console.log(sentence3.lastIndexOf('because'));
// 19. Use **search** to find the position of the first occurrence of the word **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
let sentence4 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence4.search('because'));
// 20. Use **trim()** to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript   '.
let sentence5 = ' 30 Days Of JavaScript   ';
console.log(sentence5.trim());
// 21. Use **startsWith()** method with the string Full stackJS track  and make the result true
let sentence6 = 'Full stackJS track';
console.log(sentence6.startsWith('Full stackJS track'));
// 22. Use **endsWith()** method with the string Full stackJS track  and make the result true

console.log(sentence6.endsWith('Full stackJS track'));
// 23. Use **match()** method to find all the **a**’s in 30 Days Of JavaScript
// match ==> it will return an array of all the matches
console.log(challenge.match(/a/g));
// 24. Use **concat()** and merge 'full stack ' and 'JavaScript' to a single string, 'Full stack JS track'
console.log(challenge.concat('full stack ', 'JavaScript'));
// 25. Use **repeat()** method to print Full stackJS track 2 times
console.log(challenge.repeat(2));

