// Home Screen - Modal
var modal=document.getElementById("player-stats");

var button = document.getElementById("player-stats-modal");

var span = document.getElementsByClassName("close")[0];

button.onclick = function(){
    modal.style.display= "block";
}

span.onclick = function() {
    modal.style.display = "none";
  }

// Array Randomizer
const cardArrayEasy = [0, 1, 2, 3, 4, 5];

const shuffle = (array) => { 
  for (let i =0; i< cardArrayEasy.length; i++) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 
const shuffledArrayEasy = shuffle(cardArrayEasy);

console.log(shuffledArrayEasy);