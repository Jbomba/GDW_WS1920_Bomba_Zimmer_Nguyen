const JSONReader = require('./myModule.js')

JSONReader.readJSON('cities.json', (err,result)=>{
    //aufgabe 2: die Liste der Staedte auf der Konsole ausgegeben
    //let cities = JSON.parse(result) 
    //console.log(cities)
    //

    //aufgabe3
    if(err) throw err //check for Error
    try{
        let cities = JSON.parse(result) //JSON.parse anwenden
        console.log(cities) 
    } catch (error){
        console.log(error)
    }
    //
})