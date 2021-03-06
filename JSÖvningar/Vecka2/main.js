console.log("js is working")

/* Mattelärarna Markus och Leonella är trötta på att rätta prov. De har efterfrågat en funktion som tar emot tre argument - namn på elev, elevens poäng, och maxpoäng. Om antal poäng är över 50% av maxpoäng, skriv ut i konsolen “ NAMN är godkänd.” Annars skriv ut “NAMN är underkänd” (NAMN = elevens namn). */

function rättaProv (namn, elevsPoäng, maxPoäng) {
    if(elevsPoäng > (maxPoäng / 2)) {
        console.log(`${namn} är godkänd`);
    } else {
        console.log(`${namn} är underkänd`);
    }
}

// create an elever array with många object som var propertys 
let elever = [
    {namn : "Oscar", Poäng : 77},
    {namn : "Karin", Poäng : 94},
    {namn : "Ella", Poäng : 34},
    {namn : "Jacob", Poäng : 14}
]

elever.forEach(elev => {
    rättaProv(elev.namn, elev.Poäng, 100);
});


/* Biologilärarna Joel och Adonai vill också ha en liknande funktion, men de önskar ha tydligare betygsättning. Om eleverna har över 50% rätt ska de ha betyget E, om de har över 75% ska de få betyget C, och om de har över 95% rätt ska de få betyget A. Om de får under 50% ska de få icke-godkänt (F). */

function getResult (namn, elevsPoäng, maxPoäng) {
    if(elevsPoäng > (maxPoäng / 2) && elevsPoäng < (maxPoäng * 0.75)) {
        console.log(`${namn} fick E`);
    } else if (elevsPoäng > (maxPoäng * 0.75) && elevsPoäng < (maxPoäng / 0.95)) {
        console.log(`${namn} fick C`);
    } else if (elevsPoäng > (maxPoäng * 0.95)) {
        console.log(`${namn} fick A`);
    } else {
        console.log(`${namn} fick F`);
    }
}

elever.forEach(elev => {
    getResult(elev.namn, elev.Poäng, 100);
})

// Andra lösning till previous question 
function gradeTestAdvanced(studentPoints, maxPoints) {
    if (studentPoints / maxPoints >= 0.95) {
      console.log("A");
    } else if (studentPoints / maxPoints >= 0.75) {
      console.log("C");
    } else if (studentPoints / maxPoints >= 0.5) {
      console.log("E");
    } else {
      console.log("F");
    }
  }
// QUESTION 2 ----------------------------
/* Ekonomilärare Semhar och Sauda undervisar i företagsekonomi, och lär deras elever hur man gör en balansrapport med hjälp av debet och kredit. För att se om siffrorna stämmer, vill de gärna ha en funktion som tar in två siffror som argument - debet och kredit - och ser om dessa är lika stora. Om de är lika stora, skriv ut i konsolen att dessa är lika stora. Om debet är större än kredit, skriv ut att så är fallet. Om kredit är större, ska detta skrivas ut istället.

*/

function balansCheck (debet, kredit) {
    if(debet === kredit) {
        console.log("Balans");
    } else if (debet > kredit) {
        console.log("Debet är större än kredit");
    } else {
        console.log("Kredit är större än debet");
    }
}
// balansCheck(45, 78);

/* 
Amarisa och Alan är chefer på företaget Quiz Champions AB, och önskar köpa in funktionen(se uppgift 2). Dock har de en massor av kostnader och tillgångar, så funktionen behöver bli lite mer komplex. Istället för två siffror, ta in två arrayer som argument - en array för debet och en array för kredit. Räkna ut den totala summan av dessa arrays. Om summan för bägge arrays är likadana, skriv ut “Balansrapport godkänd”, annars skriv ut “Debet och kredit har inte samma värden.”
*/

debit = [45, 56, 67, 19];
kredit = [67, 23, 78, 99];

// reduce metod tar two paramater currentTotal and the item in the array. The metod make some operations to reduce into one single value which is a total in that case
const debitSum = debit.reduce((total, item) => {
    return total + item;
},0)
console.log(debitSum);
let debitTotal = debitSum;


const kreditSum = kredit.reduce((total, item) => {
    return total + item;
},0)
// console.log(kreditSum);
let kreditTotal = kreditSum;

function balansRapport (debit, kredit) {
    if (debitSum === kreditSum) {
        console.log("Balansrapport");
    } else {
        console.log("Debet och kredit har inte samma värden");
    }
}
balansRapport(debit, kredit);

// Exercise 3-

// skapa ett object som har dessa informationen
let sponsorer = {
    namn: "DC utbildning",
    numberOfElever : 32,
    numberOfLärare : 4,
    motto: "Anyone can code",
    favoritTeacher : "Joker",
    isSwedensBestSkola : true,
    hundVänlig : true,
    ormvänlig : false,
    locations : ["Växjo", "Helsingborg", "Gotham"],
    maskot : {
        name: "Miles",
        age: 0, 
        isCute: true
    }
}
console.log(sponsorer);

/* Föräldrarna Faisal, Andreas, Saber och Gabriel efterfrågar information om skolan, för att avgöra om de ska placera sina barn där. Skapa en funktion som heter sendSchoolInfo som tar in ett objekt, och skriver ut ett meddelande i konsolen med skolans namn, antalet lärare och antalet elever. OM skolan inte är ormvänligt ska även ett meddelande skrivas ut för detta (annars skriv ej ut något). OM det är världens bästa skola ska det även skrivas ut ett meddelande där det står “This is the best school in Sweden!” annars skriv ut ett meddelande där det står “It’s not the best school in Sweden, but still good!”

*/

function sendSchoolInfo (skolan) {
    console.log(skolan.namn,skolan.numberOfLärare, skolan.numberOfElever);
    if(skolan.ormvänlig = "false") {
        console.log(`Skolan ${skolan.namn} är inte ormvänligt`);
    } if(skolan.isSwedensBestSkola = "true") {
        console.log("This is the best scholl in Sweden!");
    } else {
        console.log("it is not the best scholl in Sweden, but still god!");
    }
}
sendSchoolInfo(sponsorer);

/*
<br>Investerarna Aman och Adiba efterfrågar information om skolans maskot, för 
att avgöra om de vill sponsra skolans e-sportlag. Skapa en funktion som heter 
sendMascotInfo som tar in ett objekt. Den ska skriva ut objektets namn och ålder 
i konsolen. OM maskoten är söt, skriv även ut detta i konsolen. (Om maskoten inte 
är söt, ska inget mer skrivas ut)<br> */

const sendMascotInfo = skolan => {
    
    console.log(skolan.maskot.name, skolan.maskot.age);
    if(skolan.maskot.isCute = "true") {
        console.log("Maskot är söt");
    }
}
sendMascotInfo(sponsorer);
// 
// 
/* 
<br>Till elevernas examen önskar lärare Binette göra milkshakes till samtliga 
elever. Skapa en funktion som tar emot en array av frukter och bär, och gör 
milkshake av samtliga frukter. T.ex ska “Blueberry” ska bli “Blueberry milkshake”
, “Banana” ska bli “Banana milkshake” etc.<br>*/

const fruitochBär = ["strawberry", "melon", "banana", "blackberry", "rasperry"];
const makeMilkshake = fruitochBär.map(item => console.log(`${item} milkshake`));

/*
<br>(Extra) Gympalärarna Musa och Annika önskar en funktion för att singla slant 
när eleverna spelar fotboll på idrottslektionerna. Gör en funktion som slumpar 
fram krona eller klave i konsolen (sannolikheten ska vara 50% för bägge scenarios)
.<br> */

let myAllergies = ["jordnötter", "cashewnötter", "Mjölk"];
let snacks = ["Chocklad", "Banan", "jordnötter"];

snacks.forEach(snack => {
    myAllergies.forEach(allergy => {
        if(snack === allergy) {
            console.log("Danger! Found an allergy: " + allergy);
        }
    });
})