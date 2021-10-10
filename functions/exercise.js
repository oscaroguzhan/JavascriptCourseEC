// Exercise -1

// function addOne(number) {
    // let result = number +1;
    // return result;
// }
// console.log(addOne(5));
// 
// Exercise-2

/* Write a function that converts hours into seconds. */

// function makeSecond (hour) {
    // let seconds = (hour * 60) *60;
    // return seconds; 
// }
// console.log(makeSecond(3) + " seconds");

// Exercise -3
/*Create a function that takes the users age in years and returns the age in days.*/

// let userAge= prompt("Enter your age: ");
// function ageinDays (userAge) {
    // let result = userAge * 360;
    // return result;
// }
// console.log(ageinDays(userAge));

// Exercise -4 
/* Write a function that takes the base and height of a triangle and return its area. The area of a triangle is: (base * height) / 2
*/

// function expression
// const calcArea = function(base, height) {
    // return (base * height) /2;
// 
// };
// const area = calcArea(5,6);
// console.log(area);

// Exercise-5
/* Write a function that converts days into minutes.
*/

// const makeMin = function(days) {
    // return (days * 24) * 60;
// };
// console.log(makeMin(3));


// arrow function obs du kan ta bort return om du har bara en return value
const makeMin = (days) => {
    return (days * 24) *60;
};
const minutes = makeMin(3);
console.log(minutes);

// Exercise -6 

/* Create a function that takes an array containing only numbers and returns the
first element
*/ 

let myNumbers = [34, 5, 7, 9, 10];

const pickFirstItem = myNumbers => myNumbers[0];
console.log(pickFirstItem(myNumbers));

// Exercise -7 
/* You are counting points for a basketball game. Write a function that takes in 2
parameters - The amount of 2-pointers the team has scored, and the amount
of 3-pointers. Return the total amount of points they’ve scored. (For example,
finalscore(5,3) should return 19.)
*/

let counter = 0;

const getScore = (antalTwoPoints, antalThreePoints) => {
    counter += (antalTwoPoints * 2) + (antalThreePoints *3);
    return counter;
};
console.log(getScore(5,3));

// Exercise -8

/* You’re helping a farmer count the total amount of legs among all his animals.
He owns chickens (2 legs), cows(4 legs) and pigs (4 legs). Write a function
that, given the amount of each animal, returns the total number of legs.
*/
let count = 0;
const Counter = (chicken, cows, pigs) => {
    count += (chicken *2) + (cows * 4) + (pigs *4);
    return count;
}
console.log(Counter(4,5,6));

// Exercise -9 
/*  Create a function that takes a number as its only argument and returns true
if it's less than or equal to zero, otherwise return false.
*/
const checkNumber = (number) => {
    if(number <= 0) {
        return true;
    } else {
        return false;
    }
};
console.log(checkNumber(10));
// Exercise -10
/* 
Given two numbers, return true if the sum of both numbers is less than 100.
Otherwise return false.
*/
let total = 0;
const Sum = (num1, num2) => {
    total = num1 + num2;
    if(total < 100) {
        return true;
    } else {
        return false;
    }
};
console.log(Sum(34,3));