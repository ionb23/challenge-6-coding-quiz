// Selects element by class
var startQuiz = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var questionsBox = document.querySelector("#questions");
var questionsEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var submitButton = document.querySelector("#submit");
var storedUserInitials = document.querySelector("#initials");

var score = 0;
var currentQuestion = 0;

// Defines how many seconds the student has to complete quiz
var secondsLeft = 60;

// Creating function that starts the timer
function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        // Removes one second from the timer for each second passed
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0 || currentQuestion >= questions.length) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to stop quiz, hide question element and show end screen element
            endScreenPage();
        }

    }, 1000);
}

function endScreenPage() {
    timeEl.textContent = " ";
    questionsBox.setAttribute("class", "hide");
    endScreen.setAttribute("class", "show");
    document.getElementById("final-score").textContent = score;
}

// Function to store entered initials and move user to the highscores page when submit button is clicked
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    storedObject = storedUserInitials.value;

    var storedScore = JSON.parse(localStorage.getItem("score")) || [];

    var userScore = {
        initials: storedObject, 
        score
    }

    storedScore.push(userScore);

    // localStorage.setItem("initials", storedObject);
    localStorage.setItem("score", JSON.stringify(storedScore));
    highscoresPage();
});

// Function to move user to highscores page once timer or quesitons run out
function highscoresPage() {
    timeEl.textContent = " ";
    window.location.href = "highscores.html";
}

// Function to start the quiz if the "Start Quiz" button is clicked
startQuiz.addEventListener("click", function () {
    // Executes function that starts the timer
    startTimer();
    // hides start-screen class
    startScreen.textContent = "";
    // Removes the "hide" class attritube from the questions div
    // Sets the class attrribute to "show" and sets display to "block"
    questionsBox.setAttribute("class", "show");
    // Executes function to start showing questions
    createChoiceList();
    showQuestions();
});

function createChoiceList() {
    // Creates ol (ordered list) element where we later store the 4 choices
    var choicesList = document.createElement('ol');
    choicesEl.appendChild(choicesList);
    // Creates loop to convert choices array to list items
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        // Loops over the choices array, creating an li element for each index of the choices array
        var choicesOption = document.createElement('li');
        // The newly created li is appended to the ol provided
        choicesList.appendChild(choicesOption);
        // Loops again and creates a button for each index of the choices array
        var choicesButton = document.createElement('button');
        // Sets the content of the created button element to the value of the choices array index
        choicesButton.textContent = questions[currentQuestion].choices[i];
        // Sets id to each button according to the index in the array, so we can track which button is clicked
        choicesButton.setAttribute("id", i)
        choicesButton.setAttribute("onClick", "buttonClick(this.id)")

        // The newly created li is appended to the ol provided
        choicesOption.appendChild(choicesButton);
    }
}

function showQuestions() {
    // shows next question
    questionsEl.textContent = questions[currentQuestion].question;
    // shows next choices
    document.getElementById("0").textContent = questions[currentQuestion].choices[0];
    document.getElementById("1").textContent = questions[currentQuestion].choices[1];
    document.getElementById("2").textContent = questions[currentQuestion].choices[2];
    document.getElementById("3").textContent = questions[currentQuestion].choices[3];
}

function buttonClick(clicked) {
    // gets the id of the button clicked and records its text contect
    var choiceSelected = document.getElementById(clicked).textContent;
    console.log(choiceSelected);
    if (choiceSelected == questions[currentQuestion].correctAnswer) {
        console.log("CORRECT!!!");
        // add 1 to the score if answer is correct then moves to the next question
        score++;
        currentQuestion++;
        showQuestions();
    } else {
        console.log("WRONG!!!");
        // subtracts 15 seconds if answer is incorrect then moves to the next question
        secondsLeft = secondsLeft - 10;
        currentQuestion++;
        showQuestions();
    }
}