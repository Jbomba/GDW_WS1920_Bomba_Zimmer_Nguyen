const JSONReader = require ('./myModules/mymodule.js');
const readline = require('readline');
const eingabe = readline.createInterface({input: process.stdin, output: process.stdout});

JSONReader.readJSON('./cities.json', (err,result)=> {
    if (err) throw err
    try{
        let stadt = JSON.parse(result);
        eingabe.question( '1 = Stadt finden und loeschen, 2 = Stadt Hinzufuegen: ', function (antwort){
        if (antwort == 1){
            eingabe.question( 'Welche Stadt wollen Sie hinzufuegen: ', function( antwhinz){
                eingabe.close();
                JSONReader.stadtFinden ( antwhinz, stadt );
            })
        }
        else if (antwort == 2) {
            console.log('hinzufuegen');
            eingabe.question( 'Name der Stadt: ', function( antwName) {
                eingabe.question( 'Bundesland: ', function( antwBundesland){
                    eingabe.question( 'Einwohnerzahl: ', function( antwEinw){
                        eingabe.close();
                        JSONReader.stadtHinzuf ( antwEinw, antwName, antwBundesland, stadt);
                    })
                })
            }) 
        }
        else {
            console.log('Falsche Eingabe');
            process.exit();
        }
        })
    } catch (error) {
        console.log(error);
        process.exit();
    }
})

