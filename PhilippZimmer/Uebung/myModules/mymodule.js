const fs = require('fs');

const readJSON = ( path, callback) => {
    fs.readFile(path,'utf8', callback);
}

const writeJSON = ( path, callback ) => {
    fs.writeFile ( path, 'utf8', callback);
}

module.exports = {
    readJSON, writeJSON //stadtFinden, stadtLoeschen, stadtHinzuf
};

const stadtFinden = ( suche ) => {
    const stadt = [];
}

const stadtLoeschen = ( loeschen ) => {

}

const stadtHinzuf = ( einfuegen ) => {
    const stadt = [{}];
    //stadt.push


}


