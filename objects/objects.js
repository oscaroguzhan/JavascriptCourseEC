//  MATH BUILT-IN OBJECT ----
console.log(Math.PI)

const area = 7.7;
console.log(Math.round(area)); // will round to closest integer
console.log(Math.floor(area)); // will choose the closest integer that is smaller 

// random number
console.log(Math.random()); // that will pick a random number between 0 and 1

const random = Math.random();

console.log(Math.round(random *10));  // random number between 0 and 10

console.log(Math.round(random *100));  // random number between 0 and 100

// PRIMITIVE VALUES
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne is ${scoreOne} and scoreTwo is ${scoreTwo}`);

scoreOne=100;
console.log(`scoreOne is ${scoreOne} and scoreTwo is ${scoreTwo}
`);

// reference values
let userOne = {name: "Ozzy", age: 37};
let userTwo = userOne;
console.log(userOne, userTwo);
userOne.age = 40;
console.log(userOne, userTwo);