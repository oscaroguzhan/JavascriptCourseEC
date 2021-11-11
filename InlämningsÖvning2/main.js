// -----get element från dom  -----
let inputElement = document.querySelector("#input");
let addButton = document.querySelector("#AddBtn");
let trackButton = document.querySelector("#FastTrackBtn");
let checkInButton = document.querySelector("#CheckInBtn");
let passangerList = document.querySelector("#passangerList");
let plats = [];

// ----------------------------------
addButton.addEventListener("click", () => {
    let newPassenger = document.createElement("li");
    newPassenger.textContent = inputElement.value;
    passangerList.appendChild(newPassenger);
    plats.push(newPassenger);
})

// TODO: OPTIMERA SÅ NÄR MAN TRYCKER PÅ TRACK KNAPPEN SÅ 
trackButton.addEventListener("click", (event) => {
    event.preventDefault();
    let newPassenger = document.createElement("li")
    newPassenger.textContent = inputElement.value;
        passangerList.insertBefore(newPassenger, passangerList.firstChild);
        passangerList.removeChild(passangerList.lastChild);
    
})
 // TODO: Alert vid tom list

 checkInButton.addEventListener("click", () => {
    passangerList.removeChild(passangerList.childNodes[0]);
    plats.push(newPassenger);
})
