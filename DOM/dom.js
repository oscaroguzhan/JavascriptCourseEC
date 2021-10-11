//  through javascript file we have access that document object to interact with the browser

// which element we want to interact 
// REACH THE NODE WE WILL INTERACT 

// ----- querySelector method return the first element that matches a specified CSS selectors in the document. 
// const para = document.querySelector("p");
// console.log(para);
// 
const para2 = document.querySelector("div.demo-1");
// console.log(para2);

// you can also use browser to get unique selector for interaction
// go to element right click copy selector
const para3 = document.querySelector("body > h1");
// console.log(para3);

// du kan också hämta många element samtidigt

const paras = document.querySelectorAll("p");
// console.log(paras);
// console.log(paras[1]);
// man kan även använda forEach metod
paras.forEach(para => {
    console.log(para);
});

const paras2 = document.querySelectorAll(".demo-1");
console.log(paras2);

// get element by an id
const titel = document.getElementById("page-title");
console.log(titel);

// get element by a class
// OBS HTML COLLECTION WE CAN NOT USE FOREACH METOD

const subtitel = document.getElementsByClassName("subtitel");
console.log(subtitel);

const myTag = document.getElementsByTagName("div");
console.log(myTag);

// ------ OVERWRITE TO TEXT CHANGING INNERTEXT
// STEP.1 REACH THE ELEMENT (NODE)
const paras3 = document.querySelector("p");
console.log(paras3.innerText); // to display the content of the first p element in HTML

//  sTEP.2 CHANGE THE TEXT BY USING innerText property INNER HTML
paras3.innerText += " Ozzy add me from the Javascript file";
paras3.innerHTML += "<ul><li>I am just messing with you from JS</li><li>Hej igen</li></ul>";
// 

// Wrap the all p elements 
const paras4 = document.querySelectorAll("p");
// 
paras4.forEach(para => {
    // console.log(para.innerText);
    para.innerHTML += "<h5>Hej I am  a new line from JS</h5>"
})

const content = document.querySelector(".content");
const people = ["maria", "karin", "ozzy"];
people.forEach(person => {
    content.innerHTML += `<li>${person}</li>`;
})

// MANIPULATE THE ATTRIBUTES
const myAttribute = document.querySelector("body > a");
console.log(myAttribute.getAttribute('href'));
myAttribute.setAttribute('href', 'https://facebook.com');
myAttribute.innerText = "Facebook";

// Change the style attribute directly from the JS
const myTitel = document.querySelector("#page-title");
myTitel.setAttribute('style', 'color:red;');

const mySubtitel = document.querySelector(".subtitel");
// mySubtitel.setAttribute('style', 'background-color: orange;')
// istället skriva över kan man addera style from JS by using style property

// console.log(mySubtitel.style);

const myTitel2 = document.querySelector('h1');
myTitel2.style.margin = "20px";
myTitel2.style.textAlign= "center";
myTitel2.style.fontSize = "2.1em";

const myContent = document.querySelector('body > p:nth-child(10)');
myContent.classList.add('error');
// myContent.classList.remove('error');
