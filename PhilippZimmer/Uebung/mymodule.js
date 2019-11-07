const fs = require('fs');
function callback(){};


const readJSON = ( path ) => {
    try {
    fs.readFile(path,'utf8', callback);
    const file = fs.readFileSync ( path );
    const array = JSON.parse(file);
    return array
    } catch ( error ){
        console.log( error );
        process.exit();  
    }
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
        let user = readJSON ('./user.json');
        console.log(user);
        //if(users != 0){
        resolve(user);
        //}else {
        reject("fehler");
        }
    );
    let parseUser = await promise;

    let verbArray = [];

    for ( var i = 0; i < parseUser.length; i++){
        for ( var e = 0; e < parseCitie.length; e++){
            if ( parseUser[i].wohnort == parseCitie[e].name){
                let verbObject = { 
                    vorname : parseUser[i].vorname,
                    nachname : parseUser[i].nachname,
                    email : parseUser[i].email,
                    wohnort : parseUser[i].wohnort,
                    bundesland : parseCitie[e].bundesland,
    };
                
                //verbArray[zahl]= verbObject;
                //zahl++;
                verbArray.push(verbObject);
                console.log("verbindenarray in for\n");
                for(let n=0;n<verbArray.length;n++){
                    console.log(verbArray[n]);
                }
            }
            /*if(i == 0){
                var test = verbObject;
                console.log("wie oft bin ich da");
                console.log(test);
                console.log("i "+i);
                console.log("e "+e);
            }*/
            /*if(i==1){
                var test2 = verbObject;
                //console.log("wie oft bin ich da");
                //console.log(test2);
                //console.log("i "+i);
                console.log("e "+e);
            }*/
            //console.log(verbArray[0]);
        }
    //console.log(verbArray);
    }
    //console.log(verbArray);
    console.log("\n");
    console.log("verbindenarray in nach for\n");
    for(let n=0;n<verbArray.length;n++){
        console.log(verbArray[n]);
    }
    process.exit();
}

module.exports = {
    readJSON, writeJSON, stadtHinzuf, stadtFinden, verbinden
};


