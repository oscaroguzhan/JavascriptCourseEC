// GET ELEMENTS FROM DOM
let container = document.querySelector('.quiz-container');
let darkButton = document.getElementById("darkMode");
let radioButtons = document.querySelectorAll('[name="choice"]');
let checkboxes = document.querySelectorAll('[type="checkbox"]');
let submitButton = document.querySelector("#btn_submit");
let resultText = document.querySelector("#result_Text");



// DARK MODE BUTTON --------------
darkButton.addEventListener("click", () => {
    let body = document.body;
    body.classList.toggle("dark_Mode");
    
})

submitButton.addEventListener("click", getTotal);

function getTotal() {
    let score = 0;
    if(document.getElementById("choice_correct1").checked) {
        score++;
    }
    if(document.getElementById("choice_wrong2").checked) {
        score++;
    }
    if(document.getElementById("choice_correct3").checked) {
        score++;
    }
    radioButtons.forEach(radioBtn => {
        if(radioBtn.checked && radioBtn.value === "correct") {
            score++;
        }
    })
    if(
        document.getElementById("choice1").checked && document.getElementById("choice3").checked && document.getElementById("choice4").checked
    ) {
        score++;
    }
    else {
        alert("Last question have several answers. Please choose the right ones!")
    }
    let totalScore = document.createElement("p");
    totalScore.style.border = "1px solid black";
    totalScore.style.borderRadius = "5px";
    totalScore.innerHTML = `You have answered right ${score} / 7 `;
    container.appendChild(totalScore);
    if(score === 7) {
        totalScore.style.color= "green";
    } else if (score >= 4) {
        totalScore.style.color = "orange";
    } else {
        totalScore.style.color = "red";
    }
    
}