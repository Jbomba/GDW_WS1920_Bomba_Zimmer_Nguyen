const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const request = require("request");
const fs = require('fs');
function callback(){};
const app = express();

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

const writeJSON = ( path, file ) => {
    fs.writeFile ( path, file, callback);
}


module.exports = {
    readJSON, writeJSON
};