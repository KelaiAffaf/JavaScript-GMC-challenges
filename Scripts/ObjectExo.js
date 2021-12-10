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
}
console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
// get name, legs, color, age and bark value from the dog object
console.log(Object.values(dog));// ['Boddy', '4', 'brown', '3', 'woof woof']
//using for in 
for (let key in dog) {
    console.log(key);// name, legs, color, age, bark
    console.log(dog[key]);//Boddy, 4, brown, 3, woof woof
    console.log(`${key} : ${dog[key]}`);// name : Boddy, legs : 4, color : brown, age : 3, bark : woof woof
}
//***********/
dog.breed = "Lab";
dog.getDogInfo = function () {
    return `${this.name} is a ${this.breed} dog.`;
}
console.log(dog.getDogInfo());


// ### **Exercises: Level 2**
// 1. Find the person who has many skills in the users object.
// 2. Count logged in users,count users having greater than equal to 50 points from the following object.