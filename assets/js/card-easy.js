document.addEventListener('DOMContentLoaded', (event) => {
    var cards = document.querySelectorAll('.card');
    var flippedCards = [];

    cards.forEach((card) => {
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                checkForMatch(flippedCards);
                flippedCards = [];
            }
        });
    });

   // Check for match
    function checkForMatch(cards) {
        var card1Image = cards[0].querySelector('.card-front img').src;
        var card2Image = cards[1].querySelector('.card-front img').src;

        if (card1Image === card2Image) {
            console.log('Cards match!');
            // Do something when cards match
        } else {
            console.log('Cards do not match!');
            // Do something when cards do not match
            setTimeout(() => {
                cards[0].classList.remove('flipped');
                cards[1].classList.remove('flipped');
            }, 1250);
        }
    }
});