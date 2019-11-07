//AB1 Aufg1:

let meinname = "Jannik Bomba";
console.log(meinname);

//AB2 Aufg1:

var Bewertung = ["Peter", "2", "4",];
console.log('Array laenge ist:',Bewertung.length);
console.log('Letzte Bewertung ist:', Bewertung.length - 1);

//AB2 Aufg2:

let ratings = {
    nameBewertung: Bewertung[0],
    anzahlBewertung: Bewertung[1],
    bewertung: Bewertung[2],

    //AB2 Aufg3:

    
    //durchschnittsBewertung : function() {
    //    let durchschnitt = this.bewertung/this.anzahlBewertung;
    //    return durchschnitt;
    //}
    

    //AB2 Aufg4:

    durchschnittsBewertung : () => {
        let durchschnitt = this.bewertung/this.anzahlBewertung;
        return durchschnitt;
    }
};

console.log('Durchschnittsbewertung:', ratings.durchschnittsBewertung());

console.log('Name der Bewertung:', ratings.nameBewertung);

//AB2 Aufg5:

const hello = "hello";

function kontakWorld() {
    const world = "World";
    const kontak = world.concat(hello);
    return kontak;
}

function kontakWorld2(){
    const world = "World";
    const kontak2 = hello.concat(world);
    return kontak2;
}

console.log(kontakWorld());
console.log(kontakWorld2());

//AB1 Aufg2:

const maximaleBewertung = 5;
let anzahlBewertungen = 2;
let bewertung = 4;

console.log("Maximale Bewertung:", maximaleBewertung);
console.log("Anzahl an Bewertungen:", anzahlBewertungen);
console.log("Durchschnittsbewertung:", bewertung);

let neuebewertung = 3;
 
/*
bewertung = ((bewertung * anzahlBewertungen) + neuebewertung) / (anzahlBewertungen + 1);
anzahlBewertungen++;

console.log("Maximale Bewertung:", maximaleBewertung);
console.log("Anzahl an Bewertungen:", anzahlBewertungen);
console.log("Durchschnittsbewertung:", bewertung);
*/


const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.close

//AB1 Aufg3:

/*
rl.question('Bitte geben sie ihre Bewertung ein:', function(antwort){
    neuebewertung = Number(antwort);
    if(antwort<= maximaleBewertung){
    
        bewertungberechnen();

        /*
        bewertung = ((bewertung * anzahlBewertungen) + neuebewertung) / (anzahlBewertungen + 1);
        anzahlBewertungen++;
        console.log("Maximale Bewertung:", maximaleBewertung);
        console.log("Anzahl an Bewertungen:", anzahlBewertungen);
        console.log("Durchschnittsbewertung:", bewertung);
        

        rl.close();
        
    }
    else if(antwort > maximaleBewertung) {
        console.log("Maximale Bewertung ist:", maximaleBewertung);
        rl.close();
    }
    else {
        console.log("Fehlerhafte Eingabe!")
    }
})
*/

//AB1 Aufg 4:

let random;
let n = 5;
let m =0;

while (m != n) {
    m++;
    neuebewertung = Math.floor(Math.random() *5);

    bewertungberechnen();

    /*
    bewertung = ((bewertung * anzahlBewertungen) + neuebewertung) / (anzahlBewertungen + 1);
    anzahlBewertungen++;
    console.log("Maximale Bewertung:", maximaleBewertung);
    console.log("Anzahl an Bewertungen:", anzahlBewertungen);
    console.log("Durchschnittsbewertung:", bewertung);
    */

}

//AB1 Aufg5:

function bewertungberechnen () {
    bewertung = ((bewertung * anzahlBewertungen) + neuebewertung) / (anzahlBewertungen + 1);
    anzahlBewertungen++;
    console.log("Maximale Bewertung:", maximaleBewertung);
    console.log("Anzahl an Bewertungen:", anzahlBewertungen);
    console.log("Durchschnittsbewertung:", bewertung);
}