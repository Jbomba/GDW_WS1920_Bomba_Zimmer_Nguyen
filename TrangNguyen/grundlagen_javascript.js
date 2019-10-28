//Aufgabe 1
let name = 'Nguyen Huyen Trang'
console.log(name)

//Aufgabe 2
const maximal = 5

let anzahl_der_Bewertungen = 0
let Bewertung = 0

console.log(maximal)
console.log(anzahl_der_Bewertungen)
console.log(Bewertung)

Bewertung = "vier"
console.log(Bewertung)
//Was macht JS, wenn Sie eine der Variablen einen neuen anderen Typ zuweisen?
//Egal welcher Datentyp der Variable ist, wird JS den neuen Wert an der Variable weisen.

//Was passiert, wenn Sie ihrer Konstante, nachdem Sie diese deklariert haben, einen neuen Wert zuweisen?
//zB:
//maximal = 6
//console.log(maximal)
//TypeError: Assignment to constant variable. -> Da Konstante ist unveränderlich.

//Einbinden des readline moduls
const readline = require('readline')
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

//Aufgabe 3,4,5
let fragen = function(){
    rl.question('Bewerten: ', function(bewertung){
        if(bewertung<=maximal){
            console.log(`Bewertung:${bewertung}`)
            anzahl_der_Bewertungen ++
            console.log(`die Anzahl der Bewertungen: ${anzahl_der_Bewertungen}`)   
            fragen()
        }else{
            console.log('Fehlermeldung')
            console.log(`die Anzahl der Bewertungen: ${anzahl_der_Bewertungen}`)
            rl.close()
        }
        
    })
}

fragen()