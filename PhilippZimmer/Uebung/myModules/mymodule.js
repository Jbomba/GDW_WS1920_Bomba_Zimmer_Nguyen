const fs = require('fs');

const readJSON = ( path, callback) => {
    fs.readFile(path,'utf8', callback);
};

var test = readJSON.toString;
test

module.exports = {
    readJSON
};
