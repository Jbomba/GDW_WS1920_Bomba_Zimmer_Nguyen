const fs = require('fs');

const readJSON = ( path, callback) => {
    fs.readFile(path,'utf8', callback);
}

const writeJSON = ( path, callback ) => {
    fs.writeFile ( path, 'utf8', callback);
}

const stadtFinden = ( suche, array ) => {

}

const stadtLoeschen = ( loeschen ) => {

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

module.exports = {
    readJSON, writeJSON, stadtHinzuf, stadtFinden
};


