
// Game Logic
document.addEventListener('DOMContentLoaded', (event) => {
    var cards = document.querySelectorAll('.card');
    var flippedCards = [];
    var canClick = true;

    cards.forEach((card) => {
        card.addEventListener('click', function() {

            // If canClick is false, return
            if (!canClick) {
                return;
            }

            // Flip the card
            card.classList.toggle('flipped');
            flippedCards.push(card);

            // If there is only one flipped card, prevent clicking on the same card
            // if (document.querySelectorAll('.flipped').length === 1) {
            //     console.log('You cannot click on the same card!');
            //     return;
            // }

            // If there are already two flipped cards, check for match
            if (flippedCards.length === 2) {
                canClick = false;
                checkForMatch(flippedCards);
                flippedCards = [];
            }
        });
    });

    // Array Randomizer
    const cardArrayEasy = [
        'assets/images/ace_of_hearts.png',
        'assets/images/ace_of_spades.png',
        'assets/images/ace_of_clubs.png',
        'assets/images/ace_of_hearts.png',
        'assets/images/ace_of_spades.png',
        'assets/images/ace_of_clubs.png',
    ];

    // Shuffle the array
    const shuffle = (array) => { 
        for (let i = 0; i < array.length; i++) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
    }; 

    const shuffledArrayEasy = shuffle(cardArrayEasy);

    // Assign images to cards
    const cardFronts = document.getElementsByClassName('card-front');

    Array.from(cardFronts).forEach((cardFront, index) => {
        if (index < shuffledArrayEasy.length) {
            const img = document.createElement('img');
            console.log(shuffledArrayEasy[index]);
            img.src = shuffledArrayEasy[index];
            cardFront.appendChild(img);
        }
});


// Function to increment score in local storage
function incrementScore() {
    // Get current score from local storage
    var score = localStorage.getItem('score');

    // If score is null or undefined, initialize it to 0
    if (!score) {
        score = 0;
    } else {
        // Parse score to integer since local storage stores everything as strings
        score = parseInt(score);
    }

    // Increment score
    score++;

    // Set score back to local storage
    localStorage.setItem('score', score);
}


// Function to increment pairsScore in local storage
function incrementPairsScore() {
    // Get current score from local storage
    var pairsScore = localStorage.getItem('Pairs');

    // If pairsScore is null or undefined, initialize it to 0
    if (!pairsScore) {
        pairsScore = 0;
    } else {
        // Parse Pair Score to integer since local storage stores everything as strings
        pairsScore = parseInt(pairsScore);
    }

    // Increment score
    pairsScore++;

    // Set Pair Score back to local storage
    localStorage.setItem('Pairs', pairsScore);
}


    // Check for match
    function checkForMatch(cards) {

        var card1Image = cards[0].querySelector('.card-front img').src;
        var card2Image = cards[1].querySelector('.card-front img').src;

        if (card1Image === card2Image) {
            console.log('Cards match!');
            canClick = true;
            incrementPairsScore();
        } else {
            console.log('Cards do not match!');
            setTimeout(() => {
                cards[0].classList.remove('flipped');
                cards[1].classList.remove('flipped');
                canClick = true;
            }, 1250);
        } 

        if (document.querySelectorAll('.flipped').length === cardArrayEasy.length) {
            console.log('Congratulations! You win!');
            incrementScore();
            setTimeout(() => {
                alert('Congratulations! You win!');
                if (confirm('Play again?')) {
                    window.location.reload();
                    console.log('Game restarted');
                } else {
                    window.location.href = 'home-page.html';
                }
                clearInterval(timerInterval);
            }, 500);
        }
    }
});


// Timer
var minLabel = document.getElementById("min");
var secLabel = document.getElementById("sec");
var totalSec = 0;
var timerInterval;
timerInterval = setInterval(setTime, 1000);

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