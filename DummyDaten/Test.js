const fs = require('fs');




fs.readFile('./DummyDaten/Arbeitsplan.json', function read(err,dataAP) {
    if (err) {
        throw err;
    }
        fs.readFile('./DummyDaten/Angestellten.json', function read(err,dataAS) {
    if (err) {
        throw err;
    }


    //parse
    const objAP = JSON.parse(dataAP);
    const objAS = JSON.parse(dataAS);



    //Test Detail arrays
    const arrayTag1 = objAP[1];
    const Tag1nichtanwesend = arrayTag1[1];


    //Test ausgabe inhalt array
    console.log(arrayTag1);
    console.log(Tag1nichtanwesend);
    console.log(Tag1nichtanwesend[1]);
    console.log();

    console.log("get bis Test");
    arrayTag1.forEach(element => {
        console.log(element)
    });


    //sysdate
    var abfrage = new Date();
    var date = abfrage.getDate() + '/'
                + (abfrage.getMonth() +1) + '/'
                + abfrage.getFullYear() + '@'
                + abfrage.getHours() + ':'
                + abfrage.getMinutes() + ':'
                + abfrage.getSeconds();
    console.log(date);




})})