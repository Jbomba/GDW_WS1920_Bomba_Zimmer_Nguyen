const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const request = require("request");
const fs = require("fs");
const app = express();

//var weatherid1 = 0;
//var weatherid2 = 0;
//var weatherid3 = 0;

var wetterlage = ["8", "3", "6", "5", "2", "7"];

//var spaziergaenger = { id: 0, name: "", deadline: true, prio: 0 };

// Start des Loggers.
app.use(logger);

function mitarbeiterwahl() {
  fs.readFile("./angestellte.json", function (err, dataAS) {
    if (err) {
      throw err;
    }

    const arrayAS = JSON.parse(dataAS);
    //testtemp = arrayAS[0].name;

    var sortedArray = [];

    // Filtern des Arrays Deadline True/False, True wird entfernt.
    arrayAS.forEach(element => {
      if (element.deadline == false) {
        sortedArray.push(element);
      }
    });

    // Sort nach Prioritaet. 1 am Anfang des Arrays, 10 am Ende.
    sortedArray.sort(function (a, b) {
      return a.prio - b.prio;
    });

    // Array[0] wird als Spaziergaenger gewaehlt.
    spaziergaenger = sortedArray[0];

    // Array[0] wird entfernt.
    sortedArray.shift();

    // Prio anderer Angestellten wird erhoeht.
    sortedArray.forEach(angestellte => {
      if (angestellte.prio >= 2) {
        angestellte.prio--;
      }
    });

    // Setzt die Prio des Spaziergaengers zurueck.
    spaziergaenger.prio = 10;

    // Fuegt ihn ans ende der Liste an.
    sortedArray.push(spaziergaenger);

    // Array wird wieder zum String
    dataAS = JSON.stringify(sortedArray);

    fs.writeFileSync("./angestellte.json", dataAS);
    return spaziergaenger.name;
  });
}

// Postman http://192.168.43.25:3000/ fuer Hotspot 2 Device Test oder http://localhost:3000/ fuer Locales Testen.

// Server wird vermutlich nicht auf Port 3000 laufen deswegen checken wir die Envirement Variable dann erst Port 3000.
//const http = require("http");
const PORT = process.env.PORT || 3000;

// Ausgabe das der Server startet. (192.168.43.25 IP4 Hotspot einbinden "(app.listen(3000, "192.168.43.25");)" )
app.listen(PORT, () => console.log(`Server ist auf Port ${PORT} gestartet.`));

var APIKEY = "fc3ac8c5e09a2ca2fcc093b68d6da831";
var CITY = "Cologne";
var COUNTY = "276";

// Openweathermap URL
var url = `http://api.openweathermap.org/data/2.5/forecast?q=${CITY},${COUNTY}&units=metric&APPID=${APIKEY}`;

app.get("/", (req, res) => {
  request(url, (errror, response, body) => {
    weather_json = JSON.parse(body);

    var spaziergaenger = { id: 0, name: "", deadline: true, prio: 0 };

    //Erster Termin
    timestamp1 = weather_json.list[0].dt_txt;
    //timestamp String Short
    timestamp1 = timestamp1.substr(11);
    console.log(timestamp1);
    weatherid1 = weather_json.list[0].weather[0].id;
    //Weather ID toString
    weatherid1 = ("" + weatherid1)[0];
    console.log(weatherid1);

    //Zweiter Termin
    timestamp2 = weather_json.list[1].dt_txt;
    //timestamp String Short
    timestamp2 = timestamp2.substr(11);
    console.log(timestamp2);
    weatherid2 = weather_json.list[1].weather[0].id;
    //Weather ID toString
    weatherid2 = ("" + weatherid2)[0];
    console.log(weatherid2);

    //Dritter Termin
    timestamp3 = weather_json.list[2].dt_txt;
    //timestamp String Short
    timestamp3 = timestamp3.substr(11);
    console.log(timestamp3);
    weatherid3 = weather_json.list[2].weather[0].id;
    //Weather ID toString
    weatherid3 = ("" + weatherid3)[0];
    console.log(weatherid3);

    anwendungslogik();
    mitarbeiterwahl();

    var tempArray = [
      "Error Fehlerhafte Wetterrueckmeldung!",
      "Error Fehlerhafte Wetterrueckmeldung!",
      "Es ist am gewittern.",
      "Es nieselt.",
      "Error Fehlerhafte Wetterrueckmeldung!",
      "Es ist am regnen",
      "Es schneit draussen.",
      "Warnung es kann zu Naturkatastropfen kommen.",
      "Der Himmel ist klar bis bewoelkt."
    ];

    var antwort =
      "Die beste Uhrzeit zum Spazierengehen ist: " +
      tempTime +
      " +/- 1,5 Stunden. " +
      tempArray[temp];

    res.send(antwort);
  });
});

function anwendungslogik() {
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
        } else { //Wetter abfrage nach Clear/Cloud
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