var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; // array to push user choices to
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from

document.onkeyup = function(event) {

    //user guess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //computer selects letters randomly
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    //push the user guess to guesses 
    guessesSoFar.push(userGuess);
    if (userGuess == computerGuess) {
        wins++;
        alert('You guess it right! You Won!');

        //reseting the guesses back to 9 
        guessesLeft = 9;
        guessesSoFar.length = 0;
    } else if (guessesLeft == 0) {

        //incrementing lossess
        losses++;
        alert(' You lost.try again.');

        guessesLeft = 9;
        guessesSoFar.length = 0;
    } else if (userGuess !== computerGuess) {
        //decrementing 
        guessesLeft--;
    }
    // Taking the tallies and displaying them in HTML    
    var html = "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Total Wins: " +
        wins +
        "</p>" +
        "<p>Total Losses: " +
        losses +
        "</p>" +
        "<p>Guesses Left: " +
        guessesLeft +
        "</p>" +
        "<p>Your Guesses so far: " +
        guessesSoFar +
        "</p>";
    // Placing the html
    document.querySelector('#game').innerHTML = html;
}