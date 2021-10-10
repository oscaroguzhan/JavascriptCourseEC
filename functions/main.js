// function greet (name, lastname) {
//     console.log(`Welcome to Javascript course ${name} ${lastname}`)
// }

// anropa function
// greet("Oscar", "Wihlborg");
// 
// arrow function 
const greet = (fname, lname) => {
    console.log(`Welcome to Javascript Functions ${fname} ${lname}`);
};
greet("Oscar", "Wihlborg");

// Another basic arrow function
const gratulera = firstname => `Grattis ${firstname}`;
console.log(gratulera("karin"));

// const bill = function(products, tax) {
    // let total = 0;
    // for (let i= 0; i < products.length; i++) {
        // // total += products[i] + products[i] *tax;
    // }
    // return total;
// }
// console.log(bill([10,15,30], 0.2));

// arrow function of the previous example
const bill = (products, tax) => {
    let total = 0;
    for (let i= 0; i < products.length; i++) {
        total += products[i] + products[i] *tax;
    }
    return total;
}
console.log(bill([10,15,30], 0.2));

// ------ CALLBACK FUNCTIONS 
/*A calback function is a function passed into another function as parameter which is then invoked inside to outer function to complete osme kind of routine eller action
 */

// function greeting (name) {
    // alert("Hello " + name);
// }
// 
// function processUserInput(callback) {
    // let name = prompt("Enter your name: ");
    // callback(name);
// }
// processUserInput(greeting);
// 

// JAVASCRIPT CALLBACK FUNCTION EXEMPEL

// create a function that get the content from the HTML page
function myDisplayer(getContent) {
    document.getElementById("demo").innerHTML = getContent;
}
// create a function that makes basic calculation and display that to do html page
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);  // assign the result to the content
}
myCalculator(5,10);  // call the function

// ------------- METHODS -------------

let text = "";  // create empty string
const fruits = ["apple", "oranges", "strawberry", "melon"];

fruits.forEach(myFunction); // use forEach metod to go through the array and use function as parameter

document.getElementById("demo-2").innerHTML = text;

function myFunction(item, index) {
    text += index + " : " + item + "<br>";
}