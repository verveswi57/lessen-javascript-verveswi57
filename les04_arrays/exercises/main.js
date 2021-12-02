/**
 * Given an array, return the same array but make sure no value occurs more than once
 * @param {array} anArray
 * @return {array}
 */
function removeDoubles(doubleArray) {
    return [1, 2, 3, 4];
}

console.log(removeDoubles([3, 5, 7, 12, 3, 6, 9, 10, 10, 5])); // [3, 5, 7, 12, 6, 9, 10]

/**
 * Given an array of numbers, return the same array containing only even numbers
 * @param {number[]} anArray
 * @return {number[]}
 */

function onlyEven(anArray) {
    let evenArray = [];
    for (i = 0; i < anArray.length; i++) {
        if (anArray[i] % 2 == 0) {
            evenArray.push(anArray[i]);
        }
    }
    return evenArray;
}

/**
 * Sort an array from low to high, write the logic yourself
 * @param {number[]} anArray
 * @return {number[]}
 */
function sort(anArray) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (i = 0; i < anArray.length; i++) {
            if (anArray[i] > anArray[i + 1]) {
                [anArray[i], anArray[i + 1]] = [anArray[i + 1], anArray[i]];
                sorted = false;
            }
        }
    }
    return anArray;
}

/**
 * Reverse the string
 * Try to keep the same casing (if first letter is
 * uppercase, make sure it is still uppercase in the reversed word
 * @param {string} aString
 * @return {string}
 */

function reverseString(alphaString) {
    let reversedString = alphaString.toLowerCase().split('').reverse();

    for (i = 0; i < alphaString.length; i++) {
        if (alphaString[i] === alphaString[i].toUpperCase()) {
            reversedString[i] = reversedString[i].toUpperCase();
        }
    }
    reversedString = reversedString.join('');

    return reversedString;
}

/**
 * Given two arrays of values, return an array with only the values that occur in both arrays
 * @param {array} anArray
 * @param {array} otherArray
 * @return {array}
 */

function findSimilars(numberArray, otherArray) {
    let newArray;

    for (let i = 0; i < numberArray.length; i++) {
        if (newArray.includes(numberArray[i])) {
            newArray.push(numberArray[i]);
        }
    }
    return newArray;
}

/**
 * Given an array return an array with the same values but in a random order
 * @param anArray
 */

function scramble(numberArray) {
    for (let i = numberArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const number = numberArray[i];

        numberArray[i] = numberArray[j];
        numberArray[j] = number;
    }
    return numberArray;
}

/**
 * Given two arrays, check if the second array (subArray) is a sublist of the first (bigArray)
 * @param {array} bigArray
 * @param {array} subArray
 * @return {boolean}
 */
function isSublist(bigArray, subArray) {
    let a = [];
    let b = [];
    bigArray.sort(a - b);
    subArray.sort();
    if (subArray.length <= bigArray.length) {
        for (let i = 0; i < subArray.length; i++) {
            if (subArray[i] === subArray[i]) {
                break;
            }
        }
    }
}
