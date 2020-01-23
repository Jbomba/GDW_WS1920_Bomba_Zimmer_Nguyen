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

// Filtern des Arrays Deadline True/False, True wird entfernt.
const sortZeit = ( array ) => {
var sortedArray = [];
array.forEach(element => {
    if (element.deadline == false) {
      sortedArray.push(element);
    }
  });
return sortedArray;
}

// Sort nach Prioritaet. 1 am Anfang des Arrays, 10 am Ende.
const sortPrio = ( array ) => {
array.sort(function (a, b) {
    array.push(a.prio - b.prio);
  });
  return array
}

// Prio anderer Angestellten wird erhoeht.
const priReduziert = ( array ) => {
    array.forEach(angestellte => {
    if (angestellte.prio >= 2) {
      angestellte.prio--;
    }
  });
  return array;
}


module.exports = {
    readJSON, writeJSON, sortZeit, sortPrio, priReduziert
};