// Home Screen - Modal
var modal=document.getElementById("player-stats");

var button = document.getElementById("player-stats-modal");

var span = document.getElementsByClassName("close")[0];

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