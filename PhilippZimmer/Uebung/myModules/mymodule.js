const fs = require('fs');

const readJSON = ( path, callback) => {
    fs.readFile(path,'utf8', callback);
}

const writeJSON = ( path, callback ) => {
    fs.writeFile ( path, 'utf8', callback);
}

const stadtFinden = ( suche, array ) => {
    for(let i=0;i<array.length;i++){
        if(suche == array[i].name){
            stadtLoeschen ( i, array )
            process.exit();
        }
        else  {
            console.log( 'Stadt nicht gefunden' );
            process.exit();
        }
    }
}

const stadtLoeschen = ( loeschen, array ) => {
    array[loeschen].name = null;
    array[loeschen].einwohner = null;
    array[loeschen].bundesland = null;
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }

}

const stadtHinzuf = ( zahl, stadt, bundesl, array ) => {
    let neuStadt = { einwohner : zahl,
                     name : stadt,
                     bundesland : bundesl
    };
    array.push( neuStadt );
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}

async function verbinden ( parseCitie ){
    let promise = new Promise (function (resolve, reject){
        //console.log("vor einlesen");
        let user = readJSON ('user.json');
        console.log("kl");
        console.log(user);
        if(users != 0){
        resolve(user);
        console.log("einlesen rs");
        }else {
        reject("fehler");
        console.log("einlesen rj");
        }
    });
    console.log("nach einlesen");
    //let parseUser = await promise;
    console.log("await");

    let verbArray = [];
    let verbObject = {};
    var zahl = 0;
    
    for ( var i = 0; i < parseUser.length; i++){
        console.log("test");
        for ( var e = 0; e < user.length; e++){
            if ( parseUser[i].wohnort == parseCitie[e].name){
                verbObject.Vorname = parseUsers[i].Vorname;
                verbObject.Nachname = parseUsers[i].Nachname;
                verbObject.EMail = parseUsers[i].EMail;
                verbObject.Wohnort = parseUsers[i].Wohnort;
                verbObject.Einwohner = parseCitie[k].Einwohner;
                verbObject.Bundesland = parseCitie[k].Bundesland;
                console.log("verbindenarray");

                verbArray[zahl]= verbObject;
                zahl++;
            }
            if(i == 0){
                var test = verbObject;
                console.log("wie oft bin ich da");
                console.log(test);
                console.log("i "+i);
                console.log("k "+k);
            }
            if(i==1){
                var test2 = verbObject;
                console.log("wie oft bin ich da");
                console.log(test2);
                console.log("i "+i);
                console.log("k "+k);
            }
        }
    }
    console.log(verbArray);
    process.exit();
}

module.exports = {
    readJSON, writeJSON, stadtHinzuf, stadtFinden, verbinden
};


