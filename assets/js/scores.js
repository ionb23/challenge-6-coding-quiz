var highscoresList = document.querySelector("#highscores");
var storedObject = localStorage.getItem("initials");
var score = localStorage.getItem("score");

function showHighscores() {
    // Creates new li for saved initals + score
    var savedHighscore = document.createElement('li');
    // The newly created li is appended to the ol provided
    highscoresList.appendChild(savedHighscore);
    // Sets the content of the newly created li to the saved initials and highscore
    savedHighscore.textContent = (localStorage.getItem("initials", storedObject) + " - " + score);
}

showHighscores();


// on correct answer currentQuestion +2 instead of +1
// how to save multiple highscores in local storage