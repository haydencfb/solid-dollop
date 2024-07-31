// Home Screen - Modal
var modal=document.getElementById("player-stats");

var button = document.getElementById("player-stats-modal");

var span = document.getElementsByClassName("close")[0];

var scoreElement = document.getElementById("score");

var pairsElement = document.getElementById("pairs");

button.onclick = function(){
    modal.style.display= "block";
    console.log("modal opened");
}

span.onclick = function() {
    modal.style.display = "none";
    console.log("modal closed");
  }

// Pulling current stats from local storage
var score = localStorage.getItem('score');

var Pairs = localStorage.getItem('Pairs');

button.onclick = function(){
  modal.style.display= "block";
  console.log("modal opened");

  // Update the score
  score = localStorage.getItem('score');
  scoreElement.textContent = score;

  Pairs = localStorage.getItem('Pairs');
  pairsElement.textContent = Pairs;
}

