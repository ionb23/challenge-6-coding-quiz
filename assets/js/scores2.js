var highscoresList = document.querySelector("#highscores");
// var storedObject = localStorage.getItem("initials");
var score = JSON.parse(localStorage.getItem("score")) || [];

// if (localStorage.getItem("score")){
//     var score = JSON.parse(localStorage.getItem("score")) 
// } else {
//     var score =  [];
// }

var clearHighscores = document.querySelector("#clear");

function showHighscores() {
    for (var i = 0; i < score.length; i++) {
        // Creates new li for saved initals + score
        var savedHighscore = document.createElement('li');
        // The newly created li is appended to the ol provided
        highscoresList.appendChild(savedHighscore);
        // Sets the content of the newly created li to the saved initials and highscore
        savedHighscore.textContent = (score[i].initials + " - " + score[i].score);
    }
}

showHighscores();

clearHighscores.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
});