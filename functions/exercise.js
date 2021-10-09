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

let userAge= prompt("Enter your age: ");
function ageinDays (userAge) {
    let result = userAge * 360;
    return result;
}
console.log(ageinDays(userAge));

// Exercise -4 
/* Write a function that takes the base and height of a triangle and return its area. The area of a triangle is: (base * height) / 2
*/