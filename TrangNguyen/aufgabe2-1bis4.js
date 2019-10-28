const maximal = 100

let anzahl_der_Bewertungen = 0

//Einbinden des readline moduls
const readline = require('readline')
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
//

let fragen = function(){
    rl.question('Name der Bewertung: ', function(name){ //Name der Bewertung wird von dem Benutzer eingegeben.
        rl.question('Bewerten: ', function(bewertung){
            if(bewertung<=maximal){
                //console.log(`Name: ${name}`)
                console.log(`Bewertung: ${bewertung}`) //Der Benutzer gibt eine Bewertung ein.
    
                anzahl_der_Bewertungen ++ //die Anzahl der Bewertungen wird hier gerechnet.
                console.log(`die Anzahl der Bewertungen: ${anzahl_der_Bewertungen}`)
                
                //aufgabe1
                //let Bewertung = [name, anzahl_der_Bewertungen, bewertung]
                //console.log(`die Laenger des Arrays: ${Bewertung.length}`)
                //console.log(`Die zuletzt eingetragene Bewertung: ${Bewertung[2]}`)
                //

                //aufgabe2
                let ratings = {
                    namederBewertung: name,
                    anzahl: anzahl_der_Bewertungen,
                    letzteErgebnis: bewertung,
                    //aufgabe3
                    durschnittderBewertung: function(){
                        let durschnitt = this.letzteErgebnis/this.anzahl
                        return durschnitt
                    }

                    //aufgabe4
                    // durschnittderBewertung: () => {
                    //     let durschnitt = this.letzteErgebnis/this.anzahl
                    //     return durschnitt
                    // } 
                    //Weil diese Pfeilfuntion "durschnittderBewertung" die Eigenschaften "letzteErgebnis" und "Anzahl" nicht kennt,
                    //wird das Ergebnis als 'Not a Number' aus der Konsole gegeben.
                }
                console.log(ratings.durschnittderBewertung())

                fragen() //die Bewertung wird wiederholt.
            }else{ 
                //wenn die Bewertung hoeher als 5 ist, dann 'Fehlermeldung' wird angezeigt und das Programm beendet.
                //die Anzahl der Bewertungen wird nochmals angezeigt.
                console.log('Fehlermeldung')
                console.log(`die Anzahl der Bewertungen: ${anzahl_der_Bewertungen}`)

                rl.close()
            }
        })
    })     
}

fragen()
