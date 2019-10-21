const name = "Philipp Zimmer";

/*
* Nimmt die Variable message entgegen
* und gibt diese auf der Konsole aus
*/
console.log(name);

// App Bewertung
const maxHöhe = 100;
let anzahl = 5;
var bewertung = 25;

console.log(maxHöhe, anzahl, bewertung);

//Bewertung
++anzahl;
let neuBewertung = 75;
let ergebnis = bewertung + (neuBewertung / anzahl);
console.log(ergebnis);
const test = 5;
let test2 = 5;
test2 = "fuenf";
console.log(test2);


//User eingabe
//const readline = require('readline');
//const eingabe = readline.createInterface({input: process.stdin, output: process.stdout});
/*eingabe.question('Ihr Bewertung:', function(antwort){
    if(antwort <= 100) {
        ++anzahl;
        bewertungRechnung( bewertung, antwort, anzahl);
        eingabe.close();
    }
    if(antwort > 100) {
        console.log("Höchst Bewertung ist 100");
        eingabe.close();
    }
    else {
        console.log("es sind nur Zahlen erlaubt");
        eingabe.close();
    }
});*/

//Schleife
//eingabe.question('Zahl der Wiederhohlungen:', function(n){
//    console.log(n);
//eingabe.close();
//});
let n = 0;
let random = 0;
while ( n < 5) {
    n++;
    anzahl++;
    random = Math.floor(Math.random() * 100);
    bewertungRechnung(bewertung, random, anzahl);
}

function bewertungRechnung ( gesBewert, zahl, lauf) {
    gesBewert += (zahl / lauf);
    console.log(`Die ${lauf}. Bewertungen`);
    console.log(`Die Bewertung ist ${zahl}`);
    console.log(`Neu Gesamt Bewertung ist ${gesBewert}`);
}