// GET ELEMENTS FROM DOM
let container = document.querySelector('.quiz-container');
let radioButtons = document.querySelectorAll('[name="choice"]');

let checkboxes = document.querySelectorAll('[type="checkbox"]');
let submitButton = document.querySelector("#btn_submit");
let resultText = document.querySelector("#result_Text");


// DARK MODE BUTTON --------------
let darkMode = document.getElementById("checkbox");
darkMode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

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
    if(document.getElementById("choice_correct4").checked) {
        score++;
    
    }
    if(document.getElementById("choice_correct5").checked) {
        score++;
    
    }
    if(document.getElementById("choice_correct6").checked) {
        score++;
    
    }
    
    if(
        document.getElementById("choice1").checked && document.getElementById("choice3").checked && document.getElementById("choice4").checked
    ) {
        score++;
    }
    else {
        alert("Please choose all correct answers for the last question!")
    }

    function showScores() {
        let quizEndHTML = 
        `
        <h1 id="score-header">Quiz Completed</h1>
        <h2 id:"score">You scored : ${score} of 7 </h2>
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


