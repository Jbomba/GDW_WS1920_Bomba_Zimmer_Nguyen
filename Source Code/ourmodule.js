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

const wetterNummer = (array, position) => {
//Erster Termin
timestamp1 = array.list[position].dt_txt;
//timestamp String Short
timestamp1 = timestamp1.substr(11);
console.log(timestamp1);
weatherid1 = array.list[0].weather[0].id;
//Weather ID toString
weatherid1 = ("" + weatherid1)[0];
console.log(weatherid1);

return weatherid1;
}

module.exports = {
    readJSON, writeJSON, sortZeit, sortPrio, priReduziert, wetterNummer
};