// new array

let anArray = [];
let otherArray = new Array();

let filledArray = ['test', 'test2'];
let otherFilledArray = new Array('test', 'test2');
let arrayWithLength = new Array(5);

console.log(arrayWithLength);
console.log(arrayWithLength.length);

filledArray[2] = 'new test';
filledArray[3] = 'new element';
filledArray[filledArray.length] = 'new new element';

// no rules wt an array
// METHODS

let testArray = ['lorem', 'ipsum', 'latijn'];

console.log(testArray);
testArray.push('waarde'); // add value un end
console.log(testArray);
testArray.pop(); // remove last value
console.log(testArray);

testArray.unshift('begin'); // add at start
console.log(testArray);
testArray.shift(); // remove first value
console.log(testArray);

et newTestArray = testArray;

console.log({ newTestArray, testArray }); // > { newTestArray: newTestArray, testArray: testArray }
newTestArray.pop();
console.log({ newTestArray, testArray });


console.log(testArray === ['lorem', 'ipsum']);
console.log(testArray === newTestArray);

let longArray = [];

longArray[100] = 'test';
console.log(longArray.length);

console.log(typeof longArray);
console.log(Array.isArray(longArray));

// MORE METHODS
//
// MORE METHODS
// JOIN / SPLIT

console.log(testArray.join(' ')); // array to string
console.log('The mineral of avoiding sources is unconditional.'.split(' ')); // string to array

// SLICE / SPLICE

let someArray =
    'Marshmellow tastes best with joghurt and lots of parsley.'.split(' ');


console.log(someArray);
console.log(someArray.slice(0, 3));
console.log(someArray.splice(2, 2, 'like', 'shit'));
console.log(someArray);
console.log(someArray.splice(3, 0, 'blabla'));
console.log(someArray);

// Concat

let arOne = [1, 2, 3];
let arTwo = [4, 5, 6];
let arThree = arOne.concat(arTwo);

console.log(arOne.concat(arTwo));
console.log(arTwo.concat(arOne));

console.log(arOne + arTwo);

// IndexOf / LASTINDEXOF / INCLUDES

console.log(someArray);
console.log(someArray.indexOf('and'));
console.log(someArray.lastIndexOf('and'));
console.log(someArray.indexOf('band'));

console.log(someArray.includes('and'));
console.log(someArray.includes('band'));

/ IndexOf / LASTINDEXOF / INCLUDES

console.log(someArray);
console.log(someArray.indexOf('and'));
console.log(someArray.lastIndexOf('and'));
console.log(someArray.indexOf('band'));

console.log(someArray.includes('and'));
console.log(someArray.includes('band'));
console.log(someArray.reverse());
console.log(someOtherArray);

// Exercises
