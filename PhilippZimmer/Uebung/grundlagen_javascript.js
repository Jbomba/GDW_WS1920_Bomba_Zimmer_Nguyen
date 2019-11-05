const name = "Philipp Zimmer";

/*
* Nimmt die Variable message entgegen
* und gibt diese auf der Konsole aus
*/
console.log(name);

// App Bewertung
const maxHöhe = 100;
var anzahl = 5;
var bewertung = 50;
var ergebnis = 0;

console.log(maxHöhe, anzahl, bewertung);

//Bewertung
++anzahl;
let neuBewertung = 75;
ergebnis = bewertung + (neuBewertung / anzahl);
console.log(ergebnis);
const test = 5;
let test2 = 5;
test2 = "fuenf";
console.log(test2);


//User eingabe
const readline = require('readline');
const eingabe = readline.createInterface({input: process.stdin, output: process.stdout});
eingabe.question('Ihr Bewertung:', function(antwort){
    var ansNumb = Number(antwort);
    //Liest antwort als string ein!
    if(antwort <= maxHöhe) {
        ++anzahl;
        bewertungRechnung( bewertung, ansNumb, anzahl);
        eingabe.close();
    }
    else if(antwort > maxHöhe) {
        console.log("Höchst Bewertung ist 100");
        eingabe.close();
    }
    else {
        console.log("es sind nur Zahlen erlaubt");
        eingabe.close();
    }
});

//Schleife
eingabe.question('Zahl der Wiederhohlungen:', function(n){
    let m = 0;
let random = 0;
while ( n != m) {
    m++;
    anzahl++;
    random = Math.floor(Math.random() * 100);
    bewertungRechnung(bewertung, random, anzahl);
    logBewertung(name, anzahl, random, bewertung);
}
eingabe.close();
});

function bewertungRechnung ( gesBewert, zahl, lauf) {
    let tast = 0;
    tast = ((gesBewert * (lauf - 1))  + zahl) / lauf;
    console.log(`Die ${lauf}. Bewertungen`);
    console.log(`Die Bewertung ist ${zahl}`);
    console.log(`Neu Gesamt Bewertung ist ${tast}`);
}

function logBewertung (bezeichnung, lauf, zahl, gesBewert) {

    let ratings = { name: bezeichnung, 
                    anzahl: lauf, 
                    bewertung: zahl, 
                    dSchnitt: () => ((gesBewert * (lauf - 1))  + zahl) / lauf
    };
    console.log(ratings.name);
    console.log(ratings.dSchnitt());
    //Erzeugung von Instanzen und speichern in DB
}


//Ab2 Nr5
const hello = "hello";

function createWorld(){
    const world = " World";
    const zusmfuegen = hello + world;
    return zusmfuegen
}

console.log(createWorld());


function createDlrow(){ 
    const world = "World " // zugriff global
    const zusmfuegen2 = world + hello;
    return zusmfuegen2
}

console.log(createDlrow());