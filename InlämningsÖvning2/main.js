// -----get element from dom  -----
let inputElement = document.querySelector("#input");
let addButton = document.querySelector("#AddBtn");
let trackButton = document.querySelector("#FastTrackBtn");
let checkInButton = document.querySelector("#CheckInBtn");
let passangerList = document.querySelector("#passangerList");
let passangerArray = [];  // create an empty array

// ----------------------------------
addButton.addEventListener("click", () => {
    let newPassenger = document.createElement("li");
    newPassenger.textContent = inputElement.value;
    passangerArray.push(newPassenger);  // push into array

    // gå igenom arrayen och skriv ut nya till kön i DOM:en
    passangerArray.forEach(passenger => {
        passenger = newPassenger;
        passangerList.appendChild(passenger);
    })
    // console.log(passangerArray[0].innerHTML); kontrolutskrift

})


trackButton.addEventListener("click", (e) => {
    e.preventDefault();
    let newPassenger = document.createElement("li")
    newPassenger.textContent = inputElement.value;
    passangerArray.unshift(newPassenger);  // addera den nya först i arrayen

    // skriv ut DOM:en
    passangerArray.forEach(passenger => {
        passangerList.insertBefore(passenger, passangerList.firstChild);
        passangerList.appendChild(passenger);
    })
})


// TODO: Alert vid tom list

checkInButton.addEventListener("click", () => {
    let newPassenger = document.createElement("li")
    newPassenger.textContent = inputElement.value;

    passangerArray.forEach(passenger => {
        passangerArray.shift(passenger);
        passangerList.removeChild(passangerList.childNodes[0]);
        if (passangerArray.length === 0) {
            alert("Det finns inga passagerare i kön!");
        }
    })
    
})
