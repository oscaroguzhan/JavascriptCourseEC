let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];

// What is the length of the array?
// console.log(myAlphabet.length);
// Write a function called myAlphabetLength which console.logs the length of the array.

function countTheLenght (arr) {
    return arr.length;
}
// --------- ARROW FUNCTION VERSION-------------
let checkLenght = arr => arr.length;
checkLenght(myAlphabet);
// ------------------------------------------

// countTheLenght(myAlphabet);
// Within the function also use an if-conditional statement that checks if the number of items within the array are less than 4
function countTheLenght2 (arr) {
    if (arr.length < 4) {
        console.log("TOO short array")
    } else {
        return arr;
    }
}
// countTheLenght(myAlphabet);
// Exercise-2 Declare an arrow function checkString that takes a statement as a string and a boolean as parameters.

let isAlphabet = "true";
const checkString = (myString, myBoolean) => {
    if(myString.length === 6 || myBoolean === "true") {
        console.log("Rätt input");
    } else {
        console.log("Invalid input");
    }
};
// checkString(myAlphabet, isAlphabet);
// 
//Exercise-3  Declare an array called Planets with 5 string values
let myPlanets = ["SATURNUS", "Mars", "Jupiter", "Venus", "Uranus"];

myPlanets.forEach(planet => {
    // console.log(planet);
});
// Find out how you can also console.log the index of each item.
myPlanets.forEach((planet, index) => {
    // console.log(`${index} : ${planet}`);
});

// Exercise- 4 Declare and initialize an array called wowDatatypes
const myObject = {
    "name" : "Ozzy",
    "age" : 36,
    hasKids : "yes"
}
let wowDatatypes = ["myString", 35, true];

// Iterate over the array and console.log each item in the array + it’s index and data type in the array.
wowDatatypes.forEach((datatype, index) => {
    console.log(`Index ${index}: ${datatype} - Datatype : ${typeof datatype}.`);
});

 
/* ----------- NIVA 2 */
const student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
let commonCourses = [];

// Loop over the 2 arrays and if there are any common courses and push them into the commonCourses array. Console.log it.

const checkSame = (array1, array2) => {
    array1.forEach(element1 => {
        array2.forEach(element2 => {
            if (element1 === element2) {
                commonCourses.push(element1);
            }
        })
    })
    return commonCourses;
}
console.log(checkSame(student1Courses, student2Courses));
// ----------- ARROW FUNCTION VERSION 
student1Courses.forEach((course) => {
    student2Courses.forEach(course2 => {
        if(course === course2) {
            commonCourses.push(course)
        }
    });
});

/* Compare the 2 arrays and find the same dishes, and console.log them. If there are none, console.log that there are no similar dishes.*/
// Uppgift 7

let food = ["Noodle", "Pasta", "Ice-cream", "Pizza"];
let food2 = ["Fries", "Hamburger", "Ice-cream", "Noodle"];

let checkSameFood = (arr1, arr2) => {
  let sameFood = [];
  arr1.forEach((food) => {
    arr2.forEach((food2) => {
      if (food2 === food) {
        sameFood.push(food2);
      }
    });
  });
  if (sameFood.length > 0) {
    // console.log(sameFood);
  } else {
    console.log("There are no similar dishes");
  }
};
// checkSameFood(food, food2);

// let similarFood = [];
// food.forEach((foodOne) => {
//   food2.forEach((foodTwo) => {
    // if (foodOne === foodTwo) {
    //   console.log(foodTwo);
    //   similarFood.push(foodTwo);
    // }
//   });
// });
// if (similarFood.length === 0) {
//   console.log("There are no similar foods");
// }


// Uppgift 9

let furniture = ["Table", "Chairs", "Couch"];

furniture.forEach(möbel => {
    // console.log(möbel.split(""));
});
//  annan lösning 

furniture.forEach(word => {
    for(const letter of word) {
        // console.log(letter);
    }
});

// ----------- FILTER METHOD FORTSÄTTING

// FILTER metoden retunerar nånting så vi sparar den i en variable så vi kan använda
let myArray = [10, 20, 30, 40, 50, 100];

let filteredArray = myArray.filter((item) => {
  return item > 35;
});

let lowNumbers = myArray.filter((item) => {
  return item < 35;
});

let people = [
  {
    name: "Brandon",
    age: 27,
    likesStrawberries: false
  },
  {
    name: "Lisa",
    age: 45,
    likesStrawberries: true
  },
  {
    name: "Charlotte",
    age: 14,
    likesStrawberries: false
  },
  {
    name: "Zoe",
    age: 16,
    likesStrawberries: true
  }
];

let youngPeople = people.filter((person) => {
  return person.age < 25;
});

// console.log(youngPeople);
// 
let likesStrawberries = people.filter((person) => {
  return person.likesStrawberries && person.age < 25;
});

// console.log("Likes strawberries: ", likesStrawberries);
// 

// COMPLEX EXEMPEL 

const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
]
/* 
Bygg en funktion där du ska kunna använda ovanstående array som ett argument, och returnerar ut alla karaktärer i arrayen med blåa ögon. */

let harBlåÖgon = characters.filter(character => character.eye_color
    ==="blue");
console.log(harBlåÖgon);

/* Bygg en funktion där du ska kunna använda ovanstående array som ett argument, och returnerar ut alla karaktärer i arrayen som är män. */

let isMen = characters.filter(person => person.gender === "male");
console.log(isMen);
/* Bygg en funktion där du ska kunna använda ovanstående array som ett argument, och returnerar ut alla karaktärer i arrayen som är över 175 långa.*/
let longPerson = characters.filter(person => person.height >175);
console.log(longPerson);

/* Bygg en funktion där du ska kunna använda ovanstående array som ett argument, och returnerar ut alla karaktärer i arrayen som väger under 80. */

let skinnyPeople = characters.filter(person => person.mass < 80);
console.log(skinnyPeople);
/* (Bonus) Bygg en funktion där du ska kunna använda ovanstående array som ett argument, och returnera ut alla karaktärer i arrayen som börjar med bokstaven L. */

let börjarNamnMedL = characters.filter((person) => {
    if(person.name[0] === "L") {
        console.log(person.name);
    }
});
/* (Bonus) Bygg en funktion där du ska kunna använda ovanstående array som ett argument, och returnerar samma array, men där karaktärerna är sorterade efter längd (från längst till kortast).*/



const sortMyArray = characters.sort((a,b) => {
    if(b.height > a.height) {
        return 1;
    }else {
        return -1;
    }
});
console.log(sortMyArray);

// Kortare version 
const sortHeights = characters.sort((a,b) => (b.height > a.
    height ? 1 : -1)); // om b.height är större än a.height return 1 annars -1
    console.log(sortHeights);
    