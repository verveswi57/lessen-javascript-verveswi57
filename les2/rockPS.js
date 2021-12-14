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

//----------------------------------------------------------------------------------------------------------------//

function rockPaperScissors() {
    let playOver = true;
    let userScore = 0;
    let aiScore = 0;

    while (playOver) {
        let tie = true;
        let userChoice;
        let userChoiceNum;
        let aiChoice;

        while (tie) {
            userChoice = prompt('Pick rock, paper or scissors.');
            aiChoice = Math.floor(Math.random() * 3) + 1;

            while (
                userChoice === null ||
                (userChoice.toLowerCase() !== 'rock' &&
                    userChoice.toLowerCase() !== 'paper' &&
                    userChoice.toLowerCase() !== 'scissors')
            ) {
                userChoice = prompt(
                    'Invalid input, pick rock, paper or scissors',
                );
            }

            switch (userChoice.toLowerCase()) {
                case 'rock':
                    userChoiceNum = 1;
                    break;
                case 'paper':
                    userChoiceNum = 2;
                    break;
                case 'scissors':
                    userChoiceNum = 3;
            }

            tie = userChoiceNum === aiChoice;

            if (tie) {
                alert('Tie, play again.');
            }
        }

        if (
            (userChoiceNum === 1 && aiChoice === 3) ||
            (userChoiceNum === 2 && aiChoice === 1) ||
            (userChoiceNum === 3 && aiChoice === 2)
        ) {
            userScore++;
            playOver = confirm('The player won, play again?');
        } else {
            aiScore++;
            playOver = confirm('The AI won, play again?');
        }

        alert(`AI: ${aiScore} | User: ${userScore}`);
    }
}

function rockPaperScissors() {
    let playOver = true;
    let userScore = 0;
    let aiScore = 0;

    while (playOver) {
        let tie = true;
        let userChoice;
        let userChoiceNum;
        let aiChoice;

        while (tie) {
            userChoice = prompt('Pick rock, paper or scissors.');
            aiChoice = Math.floor(Math.random() * 3) + 1;

            while (
                userChoice === null ||
                (userChoice.toLowerCase() !== 'rock' &&
                    userChoice.toLowerCase() !== 'paper' &&
                    userChoice.toLowerCase() !== 'scissors')
                ) {
                userChoice = prompt(
                    'Invalid input, pick rock, paper or scissors',
                );
            }

            switch (userChoice.toLowerCase()) {
                case 'rock':
                    userChoiceNum = 1;
                    break;
                case 'paper':
                    userChoiceNum = 2;
                    break;
                case 'scissors':
                    userChoiceNum = 3;
            }

            tie = userChoiceNum === aiChoice;

            if (tie) {
                alert('Tie, play again.');
            }
        }

        if (
            (userChoiceNum === 1 && aiChoice === 3) ||
            (userChoiceNum === 2 && aiChoice === 1) ||
            (userChoiceNum === 3 && aiChoice === 2)
        ) {
            userScore++;
            playOver = confirm('The player won, play again?');
        } else {
            aiScore++;
            playOver = confirm('The AI won, play again?');
        }

        alert(`AI: ${aiScore} | User: ${userScore}`);
    }
}

function userChoice() {
    let userChoice = prompt('Pick rock, paper or scissors.');

    while (
        userChoice === null ||
        (userChoice.toLowerCase() !== 'rock' &&
            userChoice.toLowerCase() !== 'paper' &&
            userChoice.toLowerCase() !== 'scissors')
        ) {
        userChoice = prompt('Invalid input, pick rock, paper or scissors');
    }

    switch (userChoice.toLowerCase()) {
        case 'rock':
            return 1;
        case 'paper':
            return 2;
        case 'scissors':
            return 3;
    }
}

function det

function rockPaperScissorsTwo() {
    let playOver = true;
    let userScore = 0;
    let aiScore = 0;

    while (playOver) {
        let tie = true;
        let userChoiceNum;
        let aiChoice;

        while (tie) {
            userChoiceNum = userChoice();
            aiChoice = Math.floor(Math.random() * 3) + 1;

            tie = userChoiceNum === aiChoice;

            if (tie) {
                alert('Tie, play again.');
            }
        }

        if (
            (userChoiceNum === 1 && aiChoice === 3) ||
            (userChoiceNum === 2 && aiChoice === 1) ||
            (userChoiceNum === 3 && aiChoice === 2)
        ) {
            userScore++;
            playOver = confirm('The player won, play again?');
        } else {
            aiScore++;
            playOver = confirm('The AI won, play again?');
        }

        alert(`AI: ${aiScore} | User: ${userScore}`);
    }
}
//-------------------------------------------------------------------------------------------------------//

function userChoice() {
    let userChoice = prompt('Pick rock, paper or scissors.');

    while (
        userChoice === null ||
        (userChoice.toLowerCase() !== 'rock' &&
            userChoice.toLowerCase() !== 'paper' &&
            userChoice.toLowerCase() !== 'scissors')
        ) {
        userChoice = prompt('Invalid input, pick rock, paper or scissors');
    }

    switch (userChoice.toLowerCase()) {
        case 'rock':
            return 1;
        case 'paper':
            return 2;
        case 'scissors':
            return 3;
    }
}

function userWon(aiChoice, userChoice) {
    return (
        (userChoice === 1 && aiChoice === 3) ||
        (userChoice === 2 && aiChoice === 1) ||
        (userChoice === 3 && aiChoice === 2)
    );
}

function rockPaperScissorsTwo(aiScore, userScore, games) {
    let playOver = true;
    let tie = true;
    let userChoiceNum;
    let aiChoice;
    let matches;

    while (tie) {
        matches = games();
        userChoiceNum = userChoice();
        aiChoice = Math.floor(Math.random() * 3) + 1;

        tie = userChoiceNum === aiChoice;

        if (tie) {
            alert('Tie, play again.');
        }
    }

    if (userWon(aiChoice, userChoiceNum)) {
        userScore++;
        matches ++;
        playOver = confirm('The player won, play again?');
    } else {
        aiScore++;
        matches ++;
        playOver = confirm('The AI won, play again?');
    }

    alert(`AI: ${aiScore} | User: ${userScore} | matches: ${matches}`);

    if (playOver) {
        rockPaperScissorsTwo(aiScore, userScore, matches);
    }
}

// VERSION THREE
// Play a match until x

function rockPaperScissorsThree(bestOf) {
    let playOver = true;

    while (playOver) {
        let userScore = 0;
        let aiScore = 0;

        while (
            userScore <= bestOf / 2 &&
            aiScore <= bestOf / 2 &&
            userScore + aiScore < bestOf
            ) {
            let tie = true;
            let userChoice;
            let userChoiceNum;
            let aiChoice;

            while (tie) {
                userChoice = prompt('Pick rock, paper or scissors.');
                aiChoice = Math.floor(Math.random() * 3) + 1;

                while (
                    userChoice === null ||
                    (userChoice.toLowerCase() !== 'rock' &&
                        userChoice.toLowerCase() !== 'paper' &&
                        userChoice.toLowerCase() !== 'scissors')
                    ) {
                    userChoice = prompt(
                        'Invalid input, pick rock, paper or scissors',
                    );
                }

                switch (userChoice.toLowerCase()) {
                    case 'rock':
                        userChoiceNum = 1;
                        break;
                    case 'paper':
                        userChoiceNum = 2;
                        break;
                    case 'scissors':
                        userChoiceNum = 3;
                }

                tie = userChoiceNum === aiChoice;

                if (tie) {
                    alert('Tie, play again.');
                }
            }

            if (
                (userChoiceNum === 1 && aiChoice === 3) ||
                (userChoiceNum === 2 && aiChoice === 1) ||
                (userChoiceNum === 3 && aiChoice === 2)
            ) {
                userScore++;
            } else {
                aiScore++;
            }

            alert(`AI: ${aiScore} | User: ${userScore}`);
        }

        if (userScore === aiScore) {
            playOver = confirm(`It's a tie, want to play again?`);
        } else if (userScore > aiScore) {
            playOver = confirm('You won, want to play again?');
        } else {
            playOver = confirm('You lost, wnat to play again?');
        }
    }
}

