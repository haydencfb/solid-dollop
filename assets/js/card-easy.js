
document.addEventListener('DOMContentLoaded', (event) => {
    var cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        card.addEventListener('click', function () {
            card.classList.toggle('flipped');
        });
    });
});

var minLabel = document.getElementById("min");
var secLabel = document.getElementById("sec");
var totalSec = 0;
setInterval(setTime, 1000);

function setTime() {
    ++totalSec;
    secLabel.innerHTML = pad(totalSec % 60);
    minLabel.innerHTML = pad(parseInt(totalSec / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    }
    else {
        return valString;
    }
}