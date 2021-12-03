let camelCase = 'test';
console.log(camelCase);


function helloName(naam){
    console.log("Hello " + naam);
}
helloName('bram');

// alert("Hello world");

//let vraag = prompt("what is your age");



function helloNamePrompt(){
    let yourname = prompt("what is your name");
    alert("Hello " + yourname);
}
//helloNamePrompt();



let str = "De wereld is rond";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let str2 = "Slagroom";
console.log(str2.substring(4));
console.log(str2.substring(2, 4));

let someString= 'Hier kan Je Tekst Kwijt';
let otherString= 'Hier Ook';
function getIerKan(){
    return someString.substring(1, 8);
}
console.log(getIerKan());


console.log(someString[5]);

console.log(someString + ', ' + otherString);

otherString += ' nog wat tekst';
console.log(otherString);


let aTemplateliteral = `Test 123 test 456 test 789`;

let templateString = 'Template';
let helloTemplate = `Hello ${templateString}`;

console.log(helloTemplate);


function helloFullname(){
    let firstName = prompt("What is your first name?");
    let lastName = prompt("What is your last name?");
    alert("Hello " + firstName + " " + lastName);
}


// helloFullname();


function capitalize(string){
    toCap = string.toUpperCase().substring(0,1) + string.toLowerCase().substring(1);

console.log(toCap);
}

capitalize("joOst");



function helloCapitalFullname(){

    let firstName = prompt("What is your first name?");
    toCapfirst = capitalize(firstName);
    let lastName = prompt("What is your last name?");
    toCaplast = capitalize(lastName);
    alert("Hello " + toCapfirst + " " + toCaplast);
}

// helloCapitalFullname();



function firstLast(string){
    tolast = string.substring(1) + string[0];
    console.log(tolast);
}
firstLast('Boom');


function lastFirst(string){
    tofirst = string.slice(-1) + string.substring(0, string.length-1);
    console.log(tofirst);
}



lastFirst('boom');


function lastfirstlast(string){
    lastLetter = string[string.length-1];
    firstLetter = string[0];
    mid = string.substring(1, string.length-1);
    total = lastLetter + mid + firstLetter;


console.log(total);
}
lastfirstlast('boom');

// een lange string
// 5
// een l
function ellipser(string, number){
shortString = string.substring(0, number);
dots = '...';
console.log(shortString + dots);
}

ellipser("een lange string", 5);