const JSONReader = require ('./mymodule.js');
const readline = require('readline');
const eingabe = readline.createInterface({input: process.stdin, output: process.stdout});
const array = JSONReader.readJSON('cities.json');



JSONReader.verbinden ( array );
    eingabe.question( '1 = Stadt finden und loeschen, 2 = Stadt Hinzufuegen: ', function (antwort){

    if (antwort == 1){
        eingabe.question( 'Welche Stadt wollen Sie loeschen: ', function( antwhinz){
            eingabe.close();
            JSONReader.stadtFinden ( antwhinz);
        })
    }

    else if (antwort == 2) {
        console.log('hinzufuegen');
        eingabe.question( 'Name der Stadt: ', function( antwName) {
            eingabe.question( 'Bundesland: ', function( antwBundesland){
                eingabe.question( 'Einwohnerzahl: ', function( antwEinw){
                    eingabe.close();
                    JSONReader.stadtHinzuf ( antwEinw, antwName, antwBundesland);
                })
            })
        }) 
    }

    else {
        console.log('Falsche Eingabe');
        process.exit();
    }
    })
    


