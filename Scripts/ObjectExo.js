// ### **Exercises: Level 1**

// 1. Create an empty object called dog
// 2. Print the the dog object on the console
// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return *woof woof*
// 4. Get name, legs, color, age and bark value from the dog object
// 5. Set new properties the dog object: breed, getDogInfo

const dog = {};
console.log(dog);
dog.name = "Bobby";
dog.legs = 4;
dog.color = "brown";
dog.age = 3;
dog.bark = function () {
  return "woof woof";
};
console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
// get name, legs, color, age and bark value from the dog object
console.log(Object.values(dog)); // ['Boddy', '4', 'brown', '3', 'woof woof']
//using for in
for (let key in dog) {
  console.log(key); // name, legs, color, age, bark
  console.log(dog[key]); //Boddy, 4, brown, 3, woof woof
  console.log(`${key} : ${dog[key]}`); // name : Boddy, legs : 4, color : brown, age : 3, bark : woof woof
}
//***********/
dog.breed = "Lab";
dog.getDogInfo = function () {
  return `${this.name} is a ${this.breed} dog.`;
};
console.log(dog.getDogInfo());

// ### **Exercises: Level 2**
// 1. Find the person who has the top number of skills in the users object.
// 2. Count logged in users,count users having greater than equal to 50 points
// from the following object.

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
// we have Object(users) of objects(user)
// we should iterate through the users object and find the user with the highest number of skills

// to find the max : we suppose that the first user is the max ,
//   then we compare it with the next user
// final result :
// Asab:{
//     email: '
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   }
//   we can see that Asab has the most skills

// we can use the for in loop to iterate through the users object
function findMax(users) {
  let max = 0;
  let maxUser = "";
  let maxUserName = "";
  for (let user in users) {
    if (users[user].skills.length > max) {
      max = users[user].skills.length;
      maxUser = users[user];
      maxUserName = user;
    }
  }
  return { userName: maxUserName, user: maxUser, skills: max };
}
console.log(findMax(users));

// convert Array to object
function ArrayToObject(array) {
  let obj = {};
  obj[array[0]] = array[1];
  return obj;
}

function findMaxUser2(users) {
  let usersArray = Object.entries(users); //[["Alex",{}],["Asab",{}], ....]
  let maxUser = usersArray[0];
  for (let i = 1; i < usersArray.length; i++) {
    if (usersArray[i][1].skills.length > maxUser[1].skills.length) {
      maxUser = usersArray[i];
    }
  }
  // return maxUser;
  return ArrayToObject(maxUser);
}
console.log(findMaxUser2(users));

// 1. Find people who are MERN stack developer from the users object
// 2. Set your name in the users object without modifying the original users object
// 3. Get all keys or properties of users object
// 4. Get all the values of users object
// 5. Use the countries object to print a country name, capital, populations and languages.

function findMERN(users) {
  let mernUsers = {};
  for (let user in users) {
    if (
      users[user].skills.includes("MongoDB") &&
      users[user].skills.includes("Express") &&
      users[user].skills.includes("React") &&
      users[user].skills.includes("Node")
    ) {
      mernUsers[user] = users[user];
    }
  }
  return mernUsers;
}
console.log(findMERN(users));

function addUser(users, newUser, name) {
  users[name] = newUser;
  return users;
}
console.log(
  addUser(users, {
    email: "ea_kelai@esi.dz",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  }, "Afaf")
);
console.log(users);

//  Use the countries object to print a country name, capital, populations and languages.
const countries = {
    Afghanistan: {
        name: "Afghanistan",
        capital: "Kabul",
        population: 27657145,
        officialLanguages: ["Pashto", "Turkmen"],
    },
    Albania: {
        name: "Albania",
        capital: "Tirana",
        population: 2886026,
        officialLanguages: ["Albanian"],
    },
    Algeria: {
        name: "Algeria",
        capital: "Algiers",
        population: 43851044,
        officialLanguages: ["Arabic"],
    },
    Andorra: {
        name: "Andorra",
        capital: "Andorra la Vella",
        population: 78115,
        officialLanguages: ["Catalan"],
    },
};

function printCountry(countries) {
    for (let country in countries) {
        console.log(
        `${countries[country].name}'s capital is ${countries[country].capital} and has a population of ${countries[country].population} and official languages are ${countries[country].officialLanguages}`
        );
    }
    }
    printCountry(countries);
//  Count logged in users,count users having greater than equal to 50 points from the following object.
function countLoggedInUsers(users) {
    let loggedInUsers = 0;
    for (let user in users) {
        if (users[user].isLoggedIn) {
            loggedInUsers++;
        }
    }
    return loggedInUsers;
}
console.log(countLoggedInUsers(users));

function countUsersPoints(users) {
    let usersPoints = 0;
    for (let user in users) {
        if (users[user].points >= 50) {
            usersPoints++;
        }
    }
    return {usersPoints, users};
}
console.log(countUsersPoints(users));

// **************************************** Level 3 ****************************************//
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense,
//  accountInfo,addIncome,addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses
//  is a set of incomes and its description.

const personAccount = {

    firstName: "",
    lastName: "",
    incomes: [],
    expenses: [],
    totalIncome: 0,
    totalExpense: 0,
    accountInfo: function () {
        return `${this.firstName} ${this.lastName} has ${this.totalIncome}  incomes and ${this.totalExpense}`;
    }
    ,
    addIncome: function (description, amount) {
        this.incomes.push({ description, amount });
        this.totalIncome += amount;
    }
    ,
    addExpense: function (description, amount) {
        this.expenses.push({ description, amount });
        this.totalExpense += amount;
    }
    ,
    accountBalance: function () {
        return this.totalIncome - this.totalExpense;
    }
};

personAccount.firstName = "Asab";
personAccount.lastName = "Kelai";
personAccount.addIncome("Salary", 5000);
personAccount.addExpense("Rent", 500);
personAccount.addExpense("Food", 100);
console.log(personAccount.accountBalance());
console.log(personAccount.accountInfo());

