const JSONReader = require ('./myModules/mymodule.js');

JSONReader.readJSON('./cities.json', (err,result)=> {
    if (err) throw err
    try{
        let stadt = JSON.parse(result);
        console.log(stadt);
    } catch (error) {
        console.log(error);
        process.exit();
    }
})

/*JSONReader.stadtFinden
JSONReader.stadtHinzuf
JSONReader.stadtLoeschen
JSONReader.writeJSON
*/
