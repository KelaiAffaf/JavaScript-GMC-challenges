// Create Object
// With class ==>
class recipient {
  constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
  }
  getFullInfo() {
    return `${this.name} ${this.email} ${this.message}`;
  }
}

let recipient1 = new recipient("John", "John@gmail.com", "Hello");
console.log(recipient1.getFullInfo());
let recipient2 = new recipient("Afaf", "afaf@gmail.com", "Hello");
console.log(recipient2.getFullInfo());
console.log(recipient1.email);

// With Object Literal ==>
let recipient3 = {
  name: "John",
  email: "email@gmail.com",
  message: "Hello",
  getFullInfo: function () {
    return `${this.name} ${this.email} ${this.message}`;
  },
};
let recipient4 = {
  name: "Amina",
  email: "email@gmail.com",
  message: "Hello",
  getFullInfo: function () {
    return `${this.name} ${this.email} ${this.message}`;
  },
};
console.log(recipient3.getFullInfo());

const rectangle = {
  width: 5,
  height: 10,
  getArea: function () {
    return this.width * this.height;
  },
};
console.log(rectangle.getArea());
rectangle["width"] = 10;

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
// for in loop ==> it loops through the object
for (let key in person) {
  let value = person[key];
  console.log(key, value);
}
console.log("====================================");
console.log("====================================");
console.log("====================================");
// for of loop ==> it loops over the values of an array
for (let value of Object.values(person)) {
  console.log(value);
}
console.log("====================================");
// Object.keys() ==> it returns an array of all the keys of an object
console.log(Object.keys(person)); // ['firstName,'lastName','age','eyeColor']
// Object.values() ==> it returns an array of all the values of an object
console.log(Object.values(person)); // ['John','Doe',50,'blue']
// Object.entries() ==> it returns an array of all the key-value pairs of an object
console.log(Object.entries(person)); //

// Exercicers :
// lEVEL 1
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
console.log(dog["color"]); // brown
console.log(dog["age"]); //3

dog.breed = "labrador";
console.log(dog.breed);
dog.getDogInfo = function () {
  return `${this.name} is ${this.age} years old and has ${this.legs} legs.`;
};
console.log(dog.getDogInfo());

// Exo level 2
// ### **Exercises: Level 2**
// users is an object of objects , er're meant to create a function that
// will return the best user , the one with the highest number of skills
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
// Create a function that will return the best user
const bestUser = (users) => {
  let max = 0;
  let bestUser, bestUserInfo;
  for (let user in users) {
    let value = users[user];
    if (value.skills.length > max) {
      max = value.skills.length;
      bestUser = user;
      bestUserInfo = value;
    }
  }
  let userBest = {};
  userBest[bestUser] = bestUserInfo;
  return { userBest };
};
console.log(bestUser(users));

// Count logged in users,count users having greater than equal to 50 points
// from the following object.

const loggedInUsers = (users) => {
  let count = 0;
  for (let user in users) {
    let value = users[user]; //
    if (value.isLoggedIn) {
      count++;
    }
  }
  return count;
};
// count users having greater than equal to 50 points from the following object.
const usersPoints = (users) => {
  let count = 0;
  for (let user in users) {
    let value = users[user];
    if (value.points >= 50) {
      count++;
    }
  }
  return count;
};
console.log(loggedInUsers(users));
// Find people who are MERN stack developer from the users object
const mern = (users) => {
  let mernUsers = [];
  for (let user in users) {
    let value = users[user];
    if (
      value.skills.includes("Mongodb") &&
      value.skills.includes("Express") &&
      value.skills.includes("React") &&
      value.skills.includes("Node")
    ) {
      mernUsers.push(user);
    }
  }
  return mernUsers;
};
