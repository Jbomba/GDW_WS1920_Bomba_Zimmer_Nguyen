const fs = require('fs');

const readJSON = ( path, callback) => {
    fs.readFile(path,'utf8', callback);
};


module.exports = {
    readJSON
};
