// -----get element från dom  -----
let inputElement = document.querySelector("#input");
let addButton = document.querySelector("#AddBtn");
let trackButton = document.querySelector("#FastTrackBtn");
let checkInButton = document.querySelector("#CheckInBtn");
let passangerList = document.querySelector("#passangerList");
let passangerArray = [];

// ----------------------------------
addButton.addEventListener("click", () => {
    let newPassenger = document.createElement("li");
    newPassenger.textContent = inputElement.value;
    passangerArray.push(newPassenger);

    passangerArray.forEach(passenger => {
        passenger = newPassenger;
        passangerList.appendChild(passenger);
    })
    console.log(passangerArray[0].innerHTML);

})

// TODO: OPTIMERA SÅ NÄR MAN TRYCKER PÅ TRACK KNAPPEN SÅ 
trackButton.addEventListener("click", (e) => {
    e.preventDefault();
    let newPassenger = document.createElement("li")
    newPassenger.textContent = inputElement.value;
    passangerArray.push(newPassenger);
    
        // passangerList.removeChild(passangerList.lastChild);
        // passangerArray.forEach(passenger => {
        //      passangerList.insertBefore(passenger, passangerList.firstChild);
        //     passangerList.appendChild(newPassenger);
        //     // passangerArray.unshift(newPassenger);
        // })
        for(let i = 0; i < passangerArray.length; i++) {
            passangerArray[i].insertBefore(newPassenger, passangerList.firstChild);
            passangerArray[i].appendChild(newPassenger);
        }
})


 // TODO: Alert vid tom list

 checkInButton.addEventListener("click", () => {
    passangerList.removeChild(passangerList.childNodes[0]);
    if(passangerArray.length === 0) {
        alert("Det finns inga passagerare i kön!");
    }
})
