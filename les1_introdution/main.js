// naming conventions
//let camelcase = 'test';
// const SCREAMING_CASE = 'test';
// logging to console
// console.log(camelCase);

// documentation

// https://developper.mozilla.org/en-US/

// primitives data types
//let boot = true;
//let otherBool = false;

// number

//let number = 12;
//let otherNumber = 1.1;

// string

//let string = 'test';

// null

// let nullVal = null;

// undefined

//let undefinedVar = undefined;
//let otherUndefined;

// check type
//console.log(typeof aNumber);

// type coercion

// veriabelen

//let
//let avariable = 'test';

// const
//const A_CONST = 'test';

// function
//function afuncion(aParameter){
// do something
// return aParameter * 2;
//}
// let returnVal = aFunction(2);
//console.log(returnVal);

//function aFunction(name){
//let aNaam = name;
//return name;
//}
//let returnVal = 'willy';
//console.log(returnVal);

//  alert
//alert('hello willy');

//  prompt
//let name = prompt('test');
//console.log(name);

//function helloNamePrompt(name) {
//let name =  prompt('what is your name?');
//console.log(name);
// alert('hello' + name);
//}

// string

//let someString = 'hier kan je tekst kwijt';

//lenght

// console.log(someString.lenght);

// toUpperCase & lowerCase
//console.log(someString.toUpperCase());

// substring()

//function getrierKan() {
//return someStringtr.substring(1, 6);
//}
//console.log(getrierKan());

// get chat on index
//console.log(someString([5]);

//  concat  string

//console.log(someString + ' ' + someMoreString);

//console.log(12 + '2');

//console.log(12 + 4 + '6');

//someMoreString += ' nog wat tekst'

//console.log(someMoreString);

// template literals

//let aTemplateLiteral = 'Test 123';

//test 456;
//test 789;

//let templateString = 'template';
//let helloTemplate = `hello $(templatrString)`;

//function helloNamePrompt(name) {
//let name = prompt('What is your first name ?');
//alert('hello + name');
//}

//function capitalize(text) {
//let firstLetter = text[0] ;
//let firstLetterUpper = firstLetter.UpperCase();
//let otherLetter = test.substring(i);
//let otherLetterLower = otherLetterLower.toLowerCase(i);

//return firstLetterUpper + otherLetterLower;
//}

//function helloFullNamePromptCapitalize(name1) {
//let firstName = prompt('What is your first name ?');
//let firstNameCapitalize = capitalize(firstName);
// let secondName = prompt('What is your second name ?');
//let secondNameCapitalize = capitalize(secondName)
//alert('hello + firstNameCapitalize + ' ' + secondNameCapitalize')

//}

function firstLast(name) {
    let firstName = [0];
    let firstNameUpper = firstName.UpperCase();
    let otherLetter = test.substring(i);
    return otherLetter + firstLetter;
}

function lastFirst(name) {
    let lastFirst = word[word.lenght - 1];
    let ohterLetter = word.substring((0, word.lenght - 1));
    return lastLetter + orherLetter;
}

function lastFirstLast(word) {
    let firstLetter = word[0];
    let lastLetter = word[word.length - 1];
    let otherLetters = word.substring(1, word.length - 1);

    return lastLetter + otherLetters + firstLetter;
}

function ellipser(sentence, lenght) {
    let shortSentence = sentence.substring(0, lenght);
    return shortSentence + '...';
}
