let form = document.querySelector("form");

let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let confirmPasswordInput = document.querySelector('#password2');
let heroNameInput = document.querySelector("#name");
let descriptionInput = document.querySelector('#description');
let colorInput = document.querySelector("#heroSuitColor");
let btnSubmit= document.querySelector("#buttonSubmit");


// add event listener to formulär 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // ta bort formet 
    form.style.display="none";
    let message = document.createElement("h3");
    message.textContent = `${heroNameInput.value} är registrerad`;
    document.body.appendChild(message);


})