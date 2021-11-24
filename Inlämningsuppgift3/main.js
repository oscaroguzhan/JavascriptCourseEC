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

    function showScores() {
        let quizEndHTML = 
        `
        <h1 id="score-header">Quiz Completed</h1>
        <h2 id:"score" class="scoreText">You scored : ${score} of 7 </h2>
        <div class="quiz-repeat">
        <a href="index.html">Repeat quiz again! </a>
        </div>
        `;
        let quizElement = document.getElementById("quiz");
        quizElement.innerHTML = quizEndHTML;
        if(score===7) {
            quizElement.style.color = "green";
        } else if(score >=4 ) {
            quizElement.style.color = "orange";
        } else {
            quizElement.style.color = "red";
        }
    }
    showScores();
}