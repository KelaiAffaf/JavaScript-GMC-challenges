const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]


//   1. Declare an *empty* array;
let emptyArray = [];
// 2. Declare an array with more than 5 number of elements
let arrayWithMoreThanFiveElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 3. Find the length of your array
console.log(arrayWithMoreThanFiveElements.length);
// 4. Get the first item, the middle item and the last item of the array
console.log(arrayWithMoreThanFiveElements[0]);
console.log(arrayWithMoreThanFiveElements[Math.floor(arrayWithMoreThanFiveElements.length / 2)]);
console.log(arrayWithMoreThanFiveElements[arrayWithMoreThanFiveElements.length - 1]);
// 5. Declare an array called *mixedDataTypes*, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ['string', 1, true, null, undefined, {}, [], () => {}, new Date()];
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// 7. Print the array using *console.log()*
console.log(itCompanies);
// 8. Print the number of companies in the array
console.log(itCompanies.length);
// 9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length / 2]);
console.log(itCompanies[itCompanies.length - 1]);
// 10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}
console.log(...itCompanies);
// 11. Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase();
    console.log(itCompanies[i]);
}
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', ') + ' are big IT companies.');
let sentence=''
for (let i = 0; i < itCompanies.length-2; i++) {
    
    sentence+= itCompanies[i]+ ' ';
}
let finalSentence = `${sentence}  and  ${itCompanies[itCompanies.length-1]} ${itCompanies[itCompanies.length]} are big IT companies.`;
console.log(finalSentence);
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is *not found*

function checkCompany(company) {
    let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
    for (let i = 0; i < itCompanies.length; i++) {
        if (itCompanies[i] == company) {
            console.log(`${company} is found`);
            return itCompanies[i];
        }
    }
    return `${company} is not found`;
}
console.log(checkCompany('philips'));// Philips is not found
console.log(checkCompany('Amazon'));// Amazon
console.log(itCompanies.includes('Amazon'));// true

// 14. Filter out companies which have more than one 'o' without the filter method
// 15. Sort the array using *sort()* method
// 16. Reverse the array using *reverse()* method
// 17. Slice out the first 3 companies from the array
// 18. Slice out the last 3 companies from the array
// 19. Slice out the middle IT company or companies from the array
// 20. Remove the first IT company from the array
// 21. Remove the middle IT company or companies from the array
// 22. Remove the last IT company from the array
// 23. Remove all IT companies

