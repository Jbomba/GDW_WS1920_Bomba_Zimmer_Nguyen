const fs = require('fs');
function callback(){};


const readJSON = ( path ) => {
    try {
    fs.readFile(path,'utf8', callback);
    const file = fs.readFileSync (path);
    const array = JSON.parse(file);
    return array
    } catch (error){
        console.log(error);
        process.exit();
    }
}

const writeJSON = (path, file) => {
    fs.writeFile (path, file, callback);
}

// Filtern des Arrays Deadline True/False, True wird entfernt.
const sortZeit = (array) => {
var sortedArray = [];
array.forEach(element => {
    if (element.deadline == false) {
      sortedArray.push(element);
    }
  });
return sortedArray;
}

// Sort nach Prioritaet. 1 am Anfang des Arrays, 10 am Ende.
const sortPrio = (array) => {
  var tempArray = [];
array.sort(function (a, b) {
  tempArray.push(a.prio - b.prio);
  });
  return tempArray
}

// Prio anderer Angestellten wird erhoeht.
const prioReduziert = (array) => {
    array.forEach(angestellte => {
    if (angestellte.prio >= 2) {
      angestellte.prio--;
    }
  });
  return array;
}


// Zeitpunkte herraussuchen
const zeitpunkt = (array, position) => {
timestamp = array.list[position].dt_txt;
// timestamp String Short
timestamp = timestamp.substr(11);
return timestamp
}


const wetterNummer = (zeitpunkt, position) => {
weatherid = zeitpunkt.list[position].weather[0].id;
// Weather ID toString
weatherid = ("" + weatherid)[0];
console.log(weatherid);
return weatherid;
}

const ifBinUeberfordert = (timestamp3, timestamp2, timestamp1, weatherid1, weatherid2, weatherid3) => {
  var wetterlage = ["8", "3", "6", "5", "2", "7"];
  temp  = "9";
  badTimings = ["21:00:00", "00:00:00"];
  if (timestamp3 === "06:00:00") {
    tempTime = "Ausserhalb der Arbeitszeit"
  } else {
    if (timestamp3 === "03:00:00") {
      tempTime = "Ausserhalb der Arbeitszeit"
    } else {
      badTimings.forEach(element => {
        if (timestamp3 === element) {
          weatherid3 = weatherid2;
          timestamp3 = timestamp2;
          console.log("Test Weather");
          console.log(timestamp3);
        }
      })
      badTimings.forEach(element => {
        if (timestamp3 === element) {
          weatherid2 = weatherid1;
          timestamp2 = timestamp1;
        } else { 
          wetterlage.forEach(element => {
            if (weatherid3 === element) {
              temp = weatherid3;
              tempTime = timestamp3;
            } else {
              if (weatherid2 === element) {
                temp = weatherid2;
                tempTime = timestamp2;
              } else {
                if (weatherid1 === element) {
                  temp = weatherid1;
                  tempTime = timestamp1;
                }
              }
            }
          });
        }
      })
    }
  }
}

module.exports = {
    readJSON, writeJSON, sortZeit, sortPrio, prioReduziert, zeitpunkt, wetterNummer, ifBinUeberfordert
};