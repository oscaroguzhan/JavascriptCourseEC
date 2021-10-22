//  Ändra namnet till "DC Tech Café".
let nyNamn = document.querySelector("#namn");
nyNamn.textContent = "DC Tech Café";

// Ändra slogan till "Stockholms no.1 coding café!"
let slogan = document.querySelector("#slogan");
slogan.textContent = "Stockholms no.1 coding café!";

// Ändra bakgrundsfärg på webbsidan till en valfri färg.

let bg = document.querySelector("body").style.backgroundColor = "#93CAC8";

// Ändra priset på samtliga produkter till 19 kr förutom den sista.
let prices = document.querySelectorAll(".pris");
// TODO: Glöm inte queryselector returns a node list
// Loopa listan och sen specifiera vilken index number you want to manipulate

prices.forEach((element,index) => {
    if(index != 2) {
        element.textContent = "19kr";
    } else {
        element.textContent = "15kr";
    }
});
// Change the frukostmacka pris till 16kr 
let nyMackaPris = document.querySelector("ul li:nth-child(3) span").textContent = "36kr";

// 5. Lägg in en sista produkt i det tomma li-elementet samt ett span-element med pris (se övriga produkter).

// GET THE LAST LI ELEMENT
let emptyLi = document.querySelector("ul li:last-child");
// console.log(emptyLi);
// SET A VÄRDE (VI VILL LÄGGA SPAN TAG SÅ VI KAN ANVÄNDA INNER HTML)
emptyLi.innerHTML = "Kanelbullar - <span class= 'pris'> 10 kr</span>";

// 6. Skapa en h3:a under produkterna, där det står: "Öppettider: Alla dagar kl 18-21"

let öppetider = document.createElement("h3");

öppetider.textContent = "Öppettider: Alla dagar kl 18-21";
// get the parent child där ska placeras under

let parentElement = document.querySelector("#website");
// lägg nyskapade element under parent i HTML
parentElement.appendChild(öppetider);

// 7. Skapa en p-tag under h3:an där det står "Till DC Tech Café är alla välkomna att sitta och koda och ta en mysig fika!".

let welcomeMessage = document.createElement("p");
welcomeMessage.textContent = "Till DC Tech Café är alla välkomna att sitta och koda och ta en mysig fika!";
// console.log(welcomeMessage);
// 
parentElement.appendChild(welcomeMessage);

// 8. Ändra färg på samtliga p-taggar till en mörkröd färg.

document.querySelectorAll("p").forEach(p => {
    p.style.color = "#850000";
});






// EXTRA INFO HOW TO WRITE DATATYPE

// let myArrray = [1,2,3,5,"oscar", "true"];

// myArrray.forEach(element => console.log(`element name is ${element} and is a datatype of ${typeof element}`));