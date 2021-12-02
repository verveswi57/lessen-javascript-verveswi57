let aVariable = 'test';
const aConst = 'test';

//function afunction(){
//    return iets;
//}

//let val = prompt('hello?');

aVariable.length;
console.log(aVariable[1]);

let someString = 'een lange zin';
console.log(someString.substring(10)); // > zin
console.log(someString.substring(0, 3)); // > een

console.log(someString + aVariable);

let aTempLit = `multi line

${someString}`;



// CONDITIONS

let aNumber = 12;
let aNumString = '12';

console.log(aNumber == aNumString);
console.log(aNumber === aNumString);

console.log(aNumber != aNumString);
console.log(aNumber !== aNumString);




if (aNumber >= aNumString){
console.log('test');
}

if (0){
    console.log('false');
}

if (-51){
    console.log('true');
}

if (''){
    console.log(true);
}else {
    console.log(false);
}

if ('iets'){
    console.log('true');
}

if (0){
    console.log('true');
}else if (1){
    console.log('nu wel true');
}


// AND en OR


if ('iets' && 'iets anders'){
    console.log('true');
}

if ('' || 'iets'){
    console.log('true');
}


// oefeningen conditions



function ellipser(string, number){
    if (string.length <= number){
        console.log(string);
    } else {
        shortString = string.substring(0, number);
        dots = '...';
        console.log(shortString + dots);
    }
}
//ellipser("een lange string", 5);



function longNameOrNot(){
    let name = prompt("what is your name?");
    if (name.length >= 7) {
        alert(name + ' is a long name');
    }
    else{
        alert(name + ' is a short name');
    }
    // korte versie
    // if (name.length >= 7) {
    //     return alert(name + ' is a long name');
    // }
    // return alert(name + ' is a short name');
}
function capitalize(text) {
    return text[0].toUpperCase() + text.substring(1).toLowerCase();
}
/**
 * Check is word is capitalized
 * @param {string} word
 * @return {boolean}
 */
function isCapitalized(word) {
    // if (word === capitalize(word)) {
    //     return true;
    // } else {
    //     return false;
    // }

    return word === capitalize(word);
}

//longNameOrNot();


function isCapitalized(word) {
    if (word[0] === word[0].toUpperCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(isCapitalized('Korneel')); // true
console.log(isCapitalized('kOrneel')); // false



function pickyHelloName(){
    let name = prompt('What is your name?');

    if (name[0] === name[0].toUpperCase() && name.length >= 6){
    alert('Hello ' + name);
    }
    else if (name[0] !== name[0].toUpperCase()){
        alert('Learn to type.');
    }
    else {
        alert('Your name is too short.');
    }
    // korte versie
    // if (!isCapitalized(name)) {
    //     return alert('Learn to type');
    // }
    //
    // if (name.length < 7) {
    //     return alert('Your name is way too short');
    // }
    //
    // return alert('Hello ' + name);
}

//pickyHelloName();


let someNumber = 321;
let someString2 = '987';

console.log(someNumber.toString(10));
console.log(someNumber + '');

//console.log(someString2.parseInt());
console.log(parseFloat(10,987));
console.log(parseInt('test'));


let aNan = NaN;

console.log(NaN === NaN); // False
console.log(Number.isNaN(parseInt('test')));

console.log(Infinity);
console.log(-Infinity);
console.log(100 / 0);


// BEWERKINGEN
console.log(1 + 2);
console.log(4 - 2);
console.log(3 * 5);
console.log(6 / 2);
console.log(15 % 4);

someNumber += 5;
someNumber -= 5;
someNumber *= 5;
someNumber /= 5;
someNumber %= 5;

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10)); // random getal tussen 0 en 10, maar geen 10
console.log(Math.ceil(Math.random() * 10));


/**
 *
 * @param {number} numOne
 * @param {number} numTwo
 * @return {number}
 */

function sum(numOne, numTwo){
return numOne + numTwo;
}
console.log(sum(8, 9));


/**
 * Check if num is odd or even
 * @param {number} num
 * @return {'odd' | 'even'}
 */

function oddOrEven(num){
    if (num % 2 === 0){
return 'even'
    } else {
return 'odd';
    }

    // if (num % 2) {
    //     return 'odd';
    // }
    //
    // return 'even';
}
console.log(oddOrEven(5))


/**
 * Check if num is divisible by div
 * @param {number} num
 * @param {number} div
 * @return {boolean}
 */

function isDivisible(num, div) {
return num % div === 0;
}
console.log(isDivisible(8, 7));


/**
 * Calculate square of numOne
 * @param {number} numOne
 * @return {number}
 */
function square(numOne) {
return numOne * numOne;
}
console.log(square(4))
/**
 * Return the lowest number
 * @param {number} numOne
 * @param {number} numTwo
 * @param {number} numThree
 * @return {number}
 */
function min(numOne, numTwo, numThree) {
    if (numOne < numTwo && numOne < numThree){
        return numOne;
    }
    else if (numTwo < numOne && numTwo < numThree){
        return numTwo
    }
    else {
        return numThree;
    }

    //if (numOne < numTwo && numOne < numThree) {
//         return numOne;
//     }
//     if (numTwo < numThree) {
//         return numTwo;
//     }
//     return numThree;
}

console.log(min(9, 6, 4));

/**
 * Return the highest number
 * @param {number} numOne
 * @param {number} numTwo
 * @param {number} numThree
 * @return {number}
 */
function max(numOne, numTwo, numThree) {
    if (numOne > numTwo && numOne > numThree){
        return numOne;
    }
    if (numTwo > numOne && numTwo > numThree){
        return numTwo
    }
    else {
        return numThree;
    }


}

console.log(max(3, 9, 5));

/**
 * Perform the given operation on the two numbers
 * @param {'sum' | 'divide' | 'product' | 'subtract' } opp
 * @param {number} numOne
 * @param {number} numTwo
 * @return {number}
 */
function calculate(opp, numOne, numTwo) {
    if (opp === 'sum'){
        return numOne + numTwo;
    }
    if (opp === 'divide'){
        return numOne / numTwo;
    }
    if (opp === 'product'){
        return numOne * numTwo;
    }
    else {
        return numOne - numTwo;
    }

    // switch (opp) {
    //     case 'sum':
    //         return numOne + numTwo;
    //     case 'subtract':
    //         return numOne - numTwo;
    //     case 'divide':
    //         return numOne / numTwo;
    //     case 'product':
    //         return numOne * numTwo;
    //     default:
    //         return numOne;
    // }

}
console.log(calculate('subtract', 8,7));

/**
 * Generate a random number between 0 and 10
 * Prompt for a number
 *    > if number is same as random number alert 'You win'
 *    > if number is higher alert: 'Too high'
 *    > if number is lower alert: 'Too low'
 */
function guessNumber() {
    let randomNumber = Math.floor(Math.random() * 11);
    console.log('Random number: ' + randomNumber);
    let askedNumber = parseInt(prompt('Give a number between 0 and 10'));

    if (randomNumber === askedNumber){
    alert('You win');
    }
    else if(randomNumber < askedNumber){
    alert('Too high');
    }
    else {
        alert('Too low');
    }
}
//guessNumber();




// LOOP


//for (let i = 0; i < 10; i++){
//    console.log(i);
//}

//let i = 0;
//while (i < 10){
//    console.log(i);
//i++;
//}

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);


// OEF LOOPS

/**
 * If num = 4 > 1 + 2 + 3 + 4
 * @param {number} num
 * @return {number}
 */
/* function sumUntil(num){
    sum = '';
    for (let i = 1; i <= num; i++){
    sum += i + ' ';
    }
    return sum;
}
console.log(sumUntil(5)); */


/**
 * Count the number of words in text
 * @param {string} text
 * @return {number}
 */
function countWords(text) {
    let count = 1;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char === ' ') {
            if (i !== 0 && text[i - 1] !== ' ' && i !== text.length - 1) {
                count++;
            }
        }
    }

    return count;
}

console.log(countWords('Hier schrijf ik enkele woorden.')); // 5
console.log(countWords(' Hier ik  ook nog    een paar.')); // 6

/**
 * Convert the text to pig Latin
 * game > amegay
 * test > esttay
 * @param {string} text
 * @return {string}
 */
function convertToPigLatin(text) {

}
//console.log(convertToPigLatin());

/**
 * Return string with only first letter of each word
 * @param {string} text
 * @return {string}
 */
function firstLetterOfEachWord(text) {
    let letters = '';
    if (text[0] !== ' ') {
        letters += text[0];
    }
    for (let i = 1; i < text.length; i++) {
        let previousChar = text[i - 1];
        let curChar = text[i];
        if (previousChar === ' ' && curChar !== ' ') {
            letters += curChar;
        }
    }
    return letters;
}

console.log(firstLetterOfEachWord(
        'Roasted melon can be made aromatic by decorating with chicory sauce.',),);
// > 'Rmcbmabdwcs'
console.log(firstLetterOfEachWord(
        ' Roasted   melon  can be made aromatic by decorating with chicory sauce.',),);
// > 'Rmcbmabdwcs'

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
 */
function guessNumber() {
    let randomNum = Math.ceil(Math.random() * 10);
    let num = parseInt(prompt('Guess a number between 1 and 10'));
    if (isNaN(num)) {
        return alert('Please give me a number next time');
    }

    if (num === randomNum) {
        return alert('You win!');
    }

    if (num < randomNum) {
        return alert('Too low');
    }

    if (num > randomNum) {
        return alert('Too high');
    }
}

// guessNumber();
// console.log(Math.floor(Math.random() * 11));

// LOOPS

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

/* let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10); */

/**
 * If num = 4 ==> 1 + 2 + 3 + 4 = 10
 * @param {number} num
 * @returns {number}
 */
function sumUntil(num) {
    let output = 0;
    for (i = 1; i <= num; i++) {
        output += i;
    }
    return output;
}
console.log(sumUntil(4));

/**
 * Counts the number of words in a text
 * @param {string} text
 * @returns {number}
 */
function countWords(text) {
    let numOfWords = 1;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ' && text[i - 1] !== ' ') {
            numOfWords++;
        }
    }
    return numOfWords;
}

console.log(countWords('Text met vier woorden'));
console.log(countWords('Text     met vier   woorden'));

/**
 * Generate random number between 0 and 10
 * Prompt for number
 * Check if number is valid (between 0 and 10)
 *      > if not, ask for new number
 * Check if number is correct
 *      > if number is too high,  prompt for new number with message ('Too high, try again')
 * 		> if number is too low,  prompt for new number with message ('Too low, try again')
 *      > if number is correct, alert 'You win, you guessed X times'
 *      > if player wins, confirm if player wants so play again
 */
function guessingGame() {
    let randomNumber = Math.floor(Math.random() * 11);
    let guess = parseInt(prompt('Guess a number between 0 and 10 and the random number is: ' + randomNumber));

    do {
        guess = parseInt(prompt('Not a number between 0 and 10, try again'));
    }while (!(question >= 0 && question <= 10));

    let i = 1;
    while (randomNumber !== guess) {
        if (guess < randomNumber) {
            guess = parseInt(prompt('Too low, try again'));
            i++;
        }

        if (guess > randomNumber) {
            guess = parseInt(prompt('Too high, try again'));
            i++;
        }
    }

    if (randomNumber === guess) {
        alert(`You win, you guessed ${i} times`);
        let replay = confirm('Want to play again?');
        if (replay) {
            guessingGame();
        }
        else {
            alert('thanks for playing');
        }
    }
    return;


}
function guessingGamekorneel() {
    let tryAgain = true;

    while (tryAgain) {
        let  guescount = 0;
        let question = NaN;
        let randomNumber = Math.floor(Math.random() * 11);

        while (randomNumber !== question) {
            question = parseInt(prompt('Guess a number between 0 and 10.'));

            while (!(question >= 0 && question <= 10)) {
                question = parseInt(
                    prompt('Invalid guess, guess a number between 0 and 10?'),
                );
            }

            if (question < randomNumber) {
                alert('Wrong, your guess is to low');
            }

            if (question > randomNumber) {
                alert('Wrong, your guess is to high');
            }
            guescount++
        }

        tryAgain = confirm(`You won in ${guescount} many tries, play again?`);
    }
}
function guessingGameparameter(maxPogingen, maxNummer) {
    let tryAgain = true;

    while (tryAgain) {
        let guessCount = 0;
        let question;
        let randomNumber = Math.floor(Math.random() * maxNummer);

        while (randomNumber !== question) {
            question = parseInt(prompt('Guess a number between 0 and ' + maxNummer + '.'));

            while (!(question >= 0 && question <= maxNummer)) {
                question = parseInt(
                    prompt('Invalid guess, guess a number between 0 and ' + maxNummer + '?'),
                );
            }

            if (question < randomNumber) {
                alert('Wrong, your guess is to low');
            }

            if (question > randomNumber) {
                alert('Wrong, your guess is to high');
            }

            guessCount++;
        }

if (randomNumber === question){
    tryAgain = confirm(`You won in ${guessCount} guesses, play again?`);
} else
        tryAgain = confirm(`You lost the number was ${randomNumber}, play again?`);
    }
}
//guessingGamekorneel();
guessingGameparameter(5, 26);
//guessingGame();

/**
 * Prompt for rock, paper of scissors
 * Check if valid input
 *      > if not ask again
 *
 */
function rockPaperScissors() {
    let playerGuess = 0;
    let playerWins = 0;
    let aiWin = 0;
    let replay = true;
    while (replay) {
        let guessQuestion = prompt('Guess rock, paper or scissors').toLowerCase();
        let aiGuess = Math.ceil(Math.random() * 3);
        while (
            guessQuestion !== 'rock' &&
            guessQuestion !== 'paper' &&
            guessQuestion !== 'scissors'
            ) {
            guessQuestion = prompt('Choose between rock, paper or scissors');
        }
        if (guessQuestion.toLowerCase() === 'rock') {
            playerGuess = 1;
        }
        if (guessQuestion.toLowerCase() === 'paper') {
            playerGuess = 2;
        }
        if (guessQuestion.toLowerCase() === 'scissors') {
            playerGuess = 3;
        }
        if (aiGuess === playerGuess) {
            replay = confirm('It was a tie, want to play again?');
        }
        if (playerGuess === 1 && aiGuess === 2) {
            aiWin++;
            replay = confirm('The AI won with paper against your rock, want to play again?',);
        }
        if (playerGuess === 1 && aiGuess === 3) {
            playerWins++;
            replay = confirm('You won with your rock against the AIs scissors, want to play again?',);
        }
        if (playerGuess === 2 && aiGuess === 1) {
            playerWin++;
            replay = confirm('You won with your paper against the AIs rock, want to play again?',);
        }

        if (playerGuess === 2 && aiGuess === 3) {
            aiWin++;
            replay = confirm('The AI won with scissors against your paper, want to play again?',);
        }

        if (playerGuess === 3 && aiGuess === 1) {
            aiWin++;
            replay = confirm('The AI won with rock against your scissors, want to play again?',);
        }

        if (playerGuess === 3 && aiGuess === 2) {
            playerWin++;
            replay = confirm('You beat the AIs paper with your scissors, want to play again?',);
        }
    }
    return alert(`The game is over, you won ${playerWin} games and the AI won ${aiWin} games.`,);
}

//rockPaperScissors();