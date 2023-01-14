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

        // The newly created li is appended to the ol provided
        choicesOption.appendChild(choicesButton);
    }
}

function checkAnswer() {
    asd
}


    // // Creates loop to convert choices array to list items
    // for (var i = 0; i < questions.question1.choices.length; i++) {
    //     // Loops over the choices array, creating an li element for each index of the array
    //     var choicesOption = document.createElement('li');
    //     choicesOption.setAttribute("class", "li")

    //     // Sets the content of the created li element to the value of the current array index.
    //     choicesOption.textContent = questions.question1.choices[i];
    //     // Finally, the new li should be appended to the ol provided.
    //     choicesList.appendChild(choicesOption);
    // }





// questionsEl.getAttribute("class");
// 'hide'
// questionsEl.setAttribute("class", "show");
// undefined
// questionsEl.getAttribute("class");
// 'show'
// startScreen.textContent = "";
// ''
//  questionsEl.style.display="block"
// 'block'
//  questionsEl.style.display="block";
// 'block'
// questionsEl.getAttribute("style");
// 'display: 