// Selects element by class
var startQuiz = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var secondsLeft = 75;

function startTimer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function move user to the highscores page
      highscoresPage();
    }

  }, 5);
}

// Function to create and append colorsplosion image
function highscoresPage() {
  timeEl.textContent = " ";
  window.location.href = "highscores.html";;
}

startQuiz.addEventListener("click", function() {
    // Executes function that starts the timer
    startTimer();
    // Executes function to start showing questions

  });