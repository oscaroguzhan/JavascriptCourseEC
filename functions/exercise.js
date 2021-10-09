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
const calcArea = function(base, height) {
    return (base * height) /2;

};
const area = calcArea(5,6);
console.log(area);

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
