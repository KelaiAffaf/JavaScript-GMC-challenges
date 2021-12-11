// functions is java script 


// A function declaration looks like this 
function nameOfFunction (paremeter){

}

// **Types of functions in javascript?**

// *? 1. **Named** function
// *? 2. **Anonymous** function
// *? 3. Expression Function
// *? 4. Self Invoking Functions 
// *? 5. **Arrow Function**


const printFullName = (firstName, lastName) => {
    
    return `${firstName} and  ${lastName}`
  }
  
  console.log(printFullName('Afaf', 'kelai'))

//   Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
// Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// Delta is the value of b2 - 4ac.
//  si delta>0, the equation has two real roots., x1 and x2. x1= (-b + sqrt(delta))/2a, x2= (-b - sqrt(delta))/2a.
// if delta==0 the equation has one real root, x= -b/2a.
// if delta<0, the equation has no real roots.

const quadraticequation=(a, b, c)=> {
    let delta = b^2 - 4 * a * c;
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `${x1} and ${x2}`;
    } else if (delta == 0) {
        let x = -b / (2 * a);
        return x;
    } else {
        return "No real roots";
    }
}
// using switch case
const quadraticequation2=(a, b, c)=> {
    let delta = b^2 - 4 * a * c;
    switch (true) {
        case (delta > 0):
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return `${x1} and ${x2}`;
        case (delta == 0):
            let x = -b / (2 * a);
            return x;
        default:
            return "No real roots";
    }
}

console.log(quadraticequation(1, -5, 6));
console.log(quadraticequation(1, 2, 1));
console.log(quadraticequation(1, -2, 1));
