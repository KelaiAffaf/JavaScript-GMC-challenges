let companies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon','philips'];


function checkCompany(company,companies){
    if(companies.includes(company)) {
        return company;
    }
    else{
        return 'Not Found';
    }
}


function checkCompany(company,companies){
   for(let i = 0; i < companies.length; i++){
       if(companies[i] === company){
           return companies[i];  
       }
       else{
           return "Company not found";
       }
   }
}

 console.log(checkCompany('Facebook',companies));  
console.log(checkCompany('philips',companies));

//Filter out companies which have more than one 'o' without the filter method


function filterCompanies(companies){
    let filteredCompanies = [];
    for(let i = 0; i < companies.length; i++){
        if(companies[i].match(/o/g) !==null){
            if(companies[i].match(/o/g).length > 1)
            {
                filteredCompanies.push(companies[i]);
            }
        }
    }
        
    
    return filteredCompanies;
}

console.log(filterCompanies(companies));

function filterCompanies(companies){
    let filteredCompanies = [];
    let cpt=0
    for(let i = 0; i < companies.length; i++){
        for (let index = 0; index < companies[i].length; index++) {
          if(companies[i][index] === 'o'){
              cpt++;
          }

          if(cpt > 1){
              filteredCompanies.push(companies[i]);
          }
        }
    }
    return filteredCompanies;
}

//Sort the array using sort() method

function sortCompanies(companies){
    companies.sort();
    return companies;
}

// console.log(sortCompanies(companies));

//19. Slice out the middle IT company or companies from the array

// let companies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon','philips'];
function sliceCompanies(companies){
    if(companies.length % 2 === 0){
        return companies.slice(companies.length/2-1,companies.length/2+1);
    }
    else{
        // return companies[Math.floor(companies.length/2)];
        return companies.slice(Math.floor(companies.length/2), Math.floor(companies.length/2)+1);
    }       
}
console.log("slice");
console.log(sliceCompanies(companies));