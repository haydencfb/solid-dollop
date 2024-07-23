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

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
