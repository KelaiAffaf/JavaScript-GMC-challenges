const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
// 1. The following is an array of 10 students ages:
    
//     `const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]`
    

//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use *abs()* method 
// 1.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
// 2. Find the middle country(ies) in the [countries array]
// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
// sort : ==>array.sort() ==> returns an ordred array 
console.log(ages.sort());
// sortEvers: sor an array in ascending order
console.log(ages.sort().reverse());

//- Find the median age(one middle item or two middle items divided by two)
// the median is the middle item of a sorted array
let median = ages.sort()[Math.floor(ages.length/2)];
console.log(median);

//     - Find the average age(all items divided by number of items)

let sum = ages.reduce((prev,next)=>{
    return prev + next;
})
let average= sum/ages.length;
console.log('average',average);


// - Find the range of the ages(max minus min)
let rang = ages.sort()[ages.length-1] - ages.sort()[0];
console.log('rang',rang);

//     - Compare the value of (min - average) and (max - average), use *abs()* method 
let min = ages.sort()[0];
let max = ages.sort()[ages.length-1];
let diff = Math.abs(min - average);
let diff2 = Math.abs(max - average);
console.log('diff',diff);


//Slice the first ten countries
let tenCountries = countries.slice(0,10);
console.log(tenCountries);

// Find the middle country(ies) in the [countries array]
console.log(countries.length);
let middleCountries = countries.slice(Math.floor(countries.length/2),Math.floor(countries.length/2)+1);
console.log(middleCountries);

// Divide the countries array into two equal arrays if it is even. 
// If countries array is not even , one more country for the first half.


function devideCountriesList(countries){
    let length=countries.length;
    console.log(length);
    if (length%2===0){
        let firstHalf = countries.slice(0,length/2-1);
        console.log(firstHalf.length);
        let secondHalf = countries.slice(length/2,length);
        console.log(secondHalf.length);
        // return [firstHalf,secondHalf];
    }
    else{
        let firstHalf=countries.slice(0,Math.round(length/2));
        console.log(firstHalf.length);
        let secondHalf=countries.slice(Math.round(length/2),length);
        console.log(secondHalf.length);
    } 
}

devideCountriesList(countries);