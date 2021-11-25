/**
 * Generate random number between 0 and 10
 * prompt for number
 * check if number is valid (between 0 and 10)
 *      > if not ask for new number
 * if number is too high
 *      > prompt for new number (with message: 'Too high, try again')
 * if number is too low
 *      > prompt for new number (with message: 'Too low, try again')
 * check if number is correct
 *      > player wins: alert 'You win, you guessed [x] times'
 *      > confirm 'Want to try again'
 */

function initgame() {
    let input = 0;
    let randomNumber = 0;
    let guess = 0;
    return;
}

function randomNumber() {
    let input = parseInt(prompt('Guess a number between 1 and 10'));
    let randomNumber = Math.ceil(Math.random() * 10);
    return;
}

function newGame() {
    guess += 1;
    prompt('Another game? ');
    if (true) {
        randomNumber();
    } else {
        prompt('End game.');
    }
}

function guessingGame() {
    initgame();
    randomNumber();
    if (parseInt(input) === randomNumber) {
        alert('You win');
        newGame();
    } else if (input < randomNumber) {
        alert('Too low');
        newGame();
    } else {
        alert('Too high');
        newGame();
    }
}
