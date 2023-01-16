// Selects element by class
var startQuiz = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var questionsBox = document.querySelector("#questions");
var questionsEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var score = 0;

// Defines how many seconds the student has to complete quiz
var secondsLeft = 750;

// Creating function that starts the timer
function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        // Removes one second from the timer for each second passed
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function move user to the highscores page
            highscoresPage();
        }

    }, 1000);
}

// Function to move user to highscores page once timer runs out
function highscoresPage() {
    timeEl.textContent = " ";
    window.location.href = "highscores.html";;
}

// Function to start the quiz if the "Start Quiz" button is clicked
startQuiz.addEventListener("click", function () {
    // Executes function that starts the timer
    startTimer();
    // hides start-screen class
    startScreen.textContent = "";
    // Executes function to start showing questions
    showQuestions();
});

function cycleQuestions() {
    var questionShown = 1;
}

function showQuestions() {
    // Removes the "hide" class attritube from the questions div
    // Sets the class attrribute to "show" and sets display to "block"
    questionsBox.setAttribute("class", "show");
    questionsBox.style.display = "block";

    // Shows student the first question and answer options
    questionsEl.textContent = questions[0].question

    // Creates ol (ordered list) element where we later store the 4 choices
    var choicesList = document.createElement('ol');
    choicesEl.appendChild(choicesList);

    // Creates loop to convert choices array to list items
    for (var i = 0; i < questions[0].choices.length; i++) {
        // Loops over the choices array, creating an li element for each index of the choices array
        var choicesOption = document.createElement('li');
        // The newly created li is appended to the ol provided
        choicesList.appendChild(choicesOption);
        // Loops again and creates a button for each index of the choices array
        var choicesButton = document.createElement('button');
        // Sets the content of the created button element to the value of the choices array index
        choicesButton.textContent = questions[0].choices[i];
        // Sets id to each button according to the index in the array, so we can track which button is clicked
        choicesButton.setAttribute("id", i)
        choicesButton.setAttribute("onClick", "buttonClick(this.id)")

        // The newly created li is appended to the ol provided
        choicesOption.appendChild(choicesButton);
    }
}

function buttonClick(clicked) {
    // gets the id of the button clicked and records its text contect
    var choiceSelected = document.getElementById(clicked).textContent;
    console.log(choiceSelected);
    if (choiceSelected == questions[0].correctAnswer) {
        console.log("CORRECT!!!");
        // add 1 to the score if answer is correct then moves to the next question
        score++;

    } else console.log("WRONG!!!");
    // subtracts 15 seconds if answer is incorrect then moves to the next question
    secondsLeft = secondsLeft - 15;
}