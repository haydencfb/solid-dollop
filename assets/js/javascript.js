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

// Local Storage for the modal
// let completionCount;
// let numberOfPairs;
// let recentFinishTime;
// let fastestFinishTime;


// localStorage.setItem("Completions", completionCount);
// localStorage.setItem("Number of Pairs", numberOfPairs);
// localStorage.setItem("Recent Finish Time", "recentFinishTime");
// localStorage.setItem("Fastest Finish TIme", "fastestFinishTime");

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

