let myArr = [2, 5, 10, 15, 20, 25, 30, 50, 60, 92, 2, 10, 63, 75, 79, 103, 93];

const container = document.querySelector("#container");
// SKAPA ETT UL ITEM
let list = document.createElement("ul");
container.appendChild(list);

/* Skapar ett nytt li-element för varje item i vår array. Jämna tal = röd färg, ojämna tal = blå färg
Var femte element i listan ska färgas lila, oavsett 
om den är jämn eller ojämn. */

myArr.forEach((num, i) => {
  let listItem = document.createElement("li");
  listItem.innerText = num;
  list.appendChild(listItem);
  if ((i + 1) % 5 === 0) {
    listItem.style.color = "purple";
  } else if (num % 2 === 0) {
    listItem.style.color = "red";
  } else {
    listItem.style.color = "blue";
  }
});

// Skapa ett p-element med Javascript och lägg i texten “Hej från Javascript!” i elementet. Placera ut den i DOM:en.

let nyPara = document.createElement("p");
nyPara.innerText = "Hej från Javascript!";
container.appendChild(nyPara);

// Skapa en h1-tagg med HTML, skriv ingen text i den. Med Javascript lägg till texten “Rubrik från Javascript!
document.querySelector("#rubrik").innerText = "Rubrik från Javascript!";

// Skapa en knapp med HTML. När man klickar på knappen, ändra bakgrund på sidan till en annan färg.

let getButton = document.querySelector("#bg-change-button");

getButton.addEventListener("click", () => {
  let body = document.querySelector("body");
  console.log("Fire event!");
  if (body.style.background === "lightblue") {
    body.style.background = "white";
  } else {
    body.style.background = "lightblue";
  }
});

let button2 = document.querySelector("#change-font-size");

let changeFontSize = () => {
    let boddy = document.querySelector("body");
    boddy.style.fontSize = "0.6em";
} 
button2.addEventListener("click", changeFontSize);

// create an new button
let newButton = document.createElement("button");
newButton.type = "button";
newButton.textContent = "Change P tags";

// Placerar knappen bredvid vår första knapp
getButton.parentElement.insertBefore(newButton, getButton.nextElementSibling);

newButton.addEventListener("click", () => {
    let getAllaP = document.querySelectorAll("p");
    getAllaP.forEach (element => {
        element.style.color = "red";
        element.style.backgroundColor = "black";
    })
});

let myProfile = {
    // Key/value-pairs
    name: "Brandon",
    age: 27,
    "Antal husdjur": 1,
    email: "Brandon@mail.com",
    "Topp 2 favoritförfattare": ["John Green", "Astrid Lindgren"],
    "Älskar vintern": false
  };
  console.log(myProfile["Antal husdjur"]);
  
  // console.log(myProfile.email);
  // console.log(myProfile["email"]);
  
  let profileDiv = document.querySelector("#profile");
  
  //For-in loop: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
  
  for (let key in myProfile) {
    let profileInfo = document.createElement("p");
    profileInfo.innerText = key + ": " + myProfile[key];
    profileDiv.appendChild(profileInfo);
  }
  