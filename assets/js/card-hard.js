
// Game Logic
document.addEventListener('DOMContentLoaded', (event) => {
    var cards = document.querySelectorAll('.card');
    var flippedCards = [];
    var canClick = true;

    cards.forEach((card) => {
        card.addEventListener('click', function() {
            if (!canClick) return;
            card.classList.toggle('flipped');
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                canClick = false;
                checkForMatch(flippedCards);
                flippedCards = [];
            }
        });
    });

     // Array Randomizer
     const cardArrayHard = [
        'assets/images/ace_of_hearts.png',
        'assets/images/ace_of_hearts.png',
    
        'assets/images/ace_of_spades.png',
        'assets/images/ace_of_spades.png',

        'assets/images/ace_of_diamond.png',
        'assets/images/ace_of_diamond.png',
    
        'assets/images/king_of_spades.png',
        'assets/images/king_of_spades.png',
    
        'assets/images/king_of_clubs.png',
        'assets/images/king_of_clubs.png',

        'assets/images/king_of_hearts.png',
        'assets/images/king_of_hearts.png',
        ];
    
        const shuffle = (array) => { 
        for (let i = 0; i < array.length; i++) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
        }; 
    
        const shuffledArrayHard = shuffle(cardArrayHard);
    
        // Assign images to cards
        const cardFronts = document.getElementsByClassName('card-front');
    
        Array.from(cardFronts).forEach((cardFront, index) => {
        if (index < shuffledArrayHard.length) {
            const img = document.createElement('img');
            console.log(shuffledArrayHard[index]);
            img.src = shuffledArrayHard[index];
            cardFront.appendChild(img);
        }
    });

   // Check for match
    function checkForMatch(cards) {
        var card1Image = cards[0].querySelector('.card-front img').src;
        var card2Image = cards[1].querySelector('.card-front img').src;

        if (card1Image === card2Image) {
            console.log('Cards match!');
            canClick = true;
            
        } else {
            console.log('Cards do not match!');
            setTimeout(() => {
                cards[0].classList.remove('flipped');
                cards[1].classList.remove('flipped');
                canClick = true;
            }, 1250);
        }

        if (document.querySelectorAll('.flipped').length === cardArrayHard.length) {
            console.log('Congratulations! You win!');
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