/**
 * Prompt for rock, paper of scissors
 * Check if valid input
 *      > if not ask again
 * Convert input to number > rock = 1, paper = 2, scissors = 3
 * Generate random number between 1 and 3
 * Check if tie
 *      > confirm 'It was a tie, try again?'
 *          > if true > start over
 *          > if false alert score
 * Determine winner
 *      > player = 1 - AI = 2 > AI wins
 *      > player = 1 - AI = 3 > Player wins
 *      > player = 2 - AI = 1 > Player wins
 *      > player = 2 - AI = 3 > AI wins
 *      > player = 3 - AI = 1 > AI wins
 *      > player = 3 - AI = 2 > Player wins
 *          > confirm '[winner] won, try again'
 *              > if true > start over
 *              > if false alert score
 */
function initgame() {
    let start = 0;
    let randomNumber = 0;
    let rockPaperScissors = ' ';
    let calculation = 0;
    let rock = '';
    let Paper = '';
    let Scissors = '';
    let AI = ' ';
    return;
}

function randomNumber() {
    let AI = parseInt(prompt('Guess a rock,paper of scissors ?'));
    switch (AI) {
        case value1:
            rock = 1;
            break;
        case value2:
            Paper = 2;
            break;
        default:
            Scissors = 3;
    }
    let player1 = Math.ceil(Math.random() * 3);

    return;
}

function newGame() {
    calculation += 1;
    prompt('you won, try again?');
    if (true) {
        randomNumber();
    } else {
        prompt('End game.');
    }
}

function guessingGame() {
    initgame();
    randomNumber();
    switch (AI) {
        case value1:
            [(player = 1) - (AI = 2)];
            alert('you win');
            randomNumber();
            break;
        case value2:
            [(player = 1) - (AI = 3)];
            alert('Player1 wins');
            randomNumber();
            break;
        case value3:
            [(player = 2) - (AI = 1)];
            alert('Player1 wins');
            randomNumber();
            break;
        case value4:
            [(player = 2) - (AI = 3)];
            alert('AI wins');
            randomNumber();
            break;
        case value5:
            [(player = 3) - (AI = 1)];
            alert('AI wins');
            randomNumber();
            break;
        case value6:
            [(player = 3) - (AI = 2)];
            alert('Player1 wins');
            randomNumber();
            break;
        default:
            prompt('tie, try again ?');
            if (true) {
                randomNumber();
            } else {
                prompt('End game.');
                prompt('Score :', calculation);
            }
    }
}
