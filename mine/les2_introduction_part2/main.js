let aVariable = 'test';
const aConst = 'test';

function afunction(aParam) {
    return 'iets';
}

aVariable.length;
aVariable[1];
console.log(aVariable[1]);
let someString = 'een lange zin';
console.log(someString[10]);
console.log(someString[(0, 3)]);

console.log(someString + aVariable);
let aTempLit = `multi line
${someString}`;

let aNum = 12;
let aNumString = '12';
console.log(aNum == aNumString);
console.log(aNum === aNumString);

console.log(aNum != aNumString);
console.log(aNum !== aNumString);

if (aNum >= aNumString) {
    console.log('test');
}

if (0) {
    console.log('false');
}

if (-55) {
    console.log('true');
}

if ('') {
    console.log('true');
}
if ('iets') {
    console.log('true');
}

if ('iets' && 'iets anders') {
    console.log('true');
}

//  oefeningen

function ellipser(sentence, lenght) {
    let shortSentence = sentence.substring(0, lenght);
    if (sentence.lenght <= lenght) {
        return sentence;
    } else {
        let shortSentence = sentence.substring(0, lenght);
        return (shortSentence = '...');
    }
}
// prompt for name
// if name is longer than 6 > alert '[name] is a long name'
// if name is shorter than 7 > alert '[name] is a short name'
function longNameOrNot() {
    let name = prompt('What is your name?');

    if (name.length >= 7) {
        alert(name + ' is a long name');
    } else {
        alert(name + ' is a short name');
    }

    // if (name.length >= 7) {
    //     return alert(name + ' is a long name');
    // }
    //
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

console.log(isCapitalized('Korneel')); // true
console.log(isCapitalized('kOrneel')); // false
console.log(isCapitalized('KOrneel')); // false
// console.log(isCapitalized(12));

/**
* Prompt for name
             * Alert 'Hello [name]' only if the name is capitalized and longer than 6 letters
* If the name is not capitalized alert 'Learn to type'
* If the name is too short alert 'Your name is way too short'



function pickyHelloName() {
    alert('Hello [name]');
    if (name = isCapitalized()capitalized() && name = lenght[6]) {
        return 'true'
    } else {
        if ( name <> capitalized) {
            return alert('Learn to type')
        } else {
            return alert('Your name is way too short')
        }
    }
}
 */

/**
 * Prompt for name
 * Alert 'Hello [name]' only if the name is capitalized and longer than 6 letters
 * If the name is not capitalized alert 'Learn to type'
 * If the name is too short alert 'Your name is way too short'
 */
function pickyHelloName() {
    let name = prompt('What is your name?');

    if (!isCapitalized(name)) {
        alert('Learn to type');
    } else if (name.length < 7) {
        alert('Your name is way too short');
    } else {
        alert('Hello ' + name);
    }

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

// numbers

let someNumber = 123;
let otherNumber = 456;

console.log(someNumber.toString(10));

Number.parseInt(otherNumber);

let aNan = NaN;
console.log(Number.parseInt('test'));

console.log(Infinity);
console.log(-Infinity);

//  BEWERKINGEN

console.log(1 + 2); // 3
console.log(15 % 4); // 3

someNumber += 5; // someNumber = someNumber + 5

// RANDOM NUMBERS

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 11)); // random getal tussen 0 en 10

// MATH.FLOOR()
// math.ceil()

/**
 * Calculate sum of numOne and numTwo
 * @param {number} numOne
 * @param {number} numTwo
 * @return {number}
 */
function sum(numOne, numTwo) {
    let num = 0;
    return numOne + numTwo;
}

/**
 * Check if num is odd or even
 * @param {number} num
 * @return {'odd' | 'even'}
 */
function oddOrEven(num) {
    if (num | 1) {
        return 'odd';
    } else {
        return 'even';
    }
}

/**
 * Check if num is divisible by div
 * @param {number} num
 * @param {number} div
 * @return {boolean}
 */
function isDivisible(num, div) {
    return num % div === 0;
}

/**
 * Calculate square of numOne
 * @param {number} numOne
 * @return {number}
 */
function square(numOne) {
    return numOne * numOne;
}
// return (nunOne ** 2)
/**
 * Return the lowest number
 * @param {number} numOne
 * @param {number} numTwo
 * @param {number} numThree
 * @return {number}
 */
function min(numOne, numTwo, numThree) {
    return Math.min(numOne, numTwo, numThree);
}

/**
 * Return the highest number
 * @param {number} numOne
 * @param {number} numTwo
 * @param {number} numThree
 * @return {number}
 */
function max(numOne, numTwo, numThree) {
    return Math.max(numOne, numTwo, numThree);
}

/**
 * Perform the given operation on the two numbers
 * @param {'sum' | 'divide' | 'product' | 'subtract' } opp
 * @param {number} numOne
 * @param {number} numTwo
 * @return {number}
 *
function calculate(opp, numOne, numTwo) {}
    let number = 0;
  if (calculate(numOne + numTwo) {
        return number;
    } else {
        if calculate(numOne / numTwo) {
            return number;
        } else {
            if calculate(numOne * numTwo)
            return number;
        } else {
            return calculate(numOne - numTwo))
        }
    }
 */

function calculate(opp, numOne, numTwo) {
    if (opp === 'sum') {
        return numOne + numTwo;
    }

    if (opp === 'divide') {
        return numOne / numTwo;
    }

    if (opp === 'product') {
        return numOne * numTwo;
    }

    if (opp === 'subtract') {
        return numOne - numTwo;
    }

    return numOne;
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

/**
 * Generate a random number
 * Prompt for a number
 *    > if number is same as random number alert 'You win'
 *    > if number is higher alert: 'Too high'
 *    > if number is lower alert: 'Too low'
 */
function guessNumber(num) {
    let number = Math.random() * 10;
    if (num > number) {
        return alert('Too high');
    } else {
        if (num < number) {
            return alert('Too low');
        } else {
            return alert('You win');
        }
    }
}
function guessNumber() {
    let input = parseInt(prompt('Guess a number between 1 and 10'));
    let randomNumber = Math.ceil(Math.random() * 10);

    if (parseInt(input) === randomNumber) {
        alert('You win');
    } else if (input < randomNumber) {
        alert('Too low');
    } else {
        alert('Too high');
    }
}

/// loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 10;

while (i < 10) {
    i++;
}

let j = 0;
do {
    j++;
} while (j < 10);

function sumUntil(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumUntil(4));
console.log(sumUntil(6));

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

/* return string with only first letter of each word
/* @param (string) test
/* return {string}
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

console.log(
    firstLetterOfEachWord(
        'Roasted melon can be made aromatic by decorating with chicory sauce.',
    ),
); // > 'Rmcbmabdwcs'
console.log(
    firstLetterOfEachWord(
        ' Roasted   melon  can be made aromatic by decorating with chicory sauce.',
    ),
);

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
function guessingGame() {}

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
function rockPaperScissors() {}
