const express = require("express");
const logger = require("./middleware/logger");
const request = require("request");
const app = express();
const ourmodule = require ('./ourmodule');


// Start des Loggers.
app.use(logger);

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
    const position1 = 0;
    const position2 = 1;
    const position3 = 2;

    var weather_json = JSON.parse(body);

    /*//Erster Termin
    timestamp1 = weather_json.list[0].dt_txt;
    //timestamp String Short
    timestamp1 = timestamp1.substr(11);
    console.log(timestamp1);
    weatherid1 = weather_json.list[0].weather[0].id;
    //Weather ID toString
    weatherid1 = ("" + weatherid1)[0];
    console.log(weatherid1);
*/

    var timestamp1 = ourmodule.wetterNummer(weather_json, position1);
    var timestamp2 = ourmodule.wetterNummer(weather_json, position2);
    var timestamp3 = ourmodule.wetterNummer(weather_json, position3);
    console.log(timestamp3);

    /*
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
    */

    anwendungslogik(timestamp1, timestamp2, timestamp3);
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

function anwendungslogik(timestamp1, timestamp2, timestamp3) {
  console.log(timestamp3);
  var wetterlage = ["8", "3", "6", "5", "2", "7"];
  temp  = 0;
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

  function mitarbeiterwahl() {
    const arrayAS = ourmodule.readJSON('angestellte.json');
    const sortedZeitArray = ourmodule.sortZeit(arrayAS);
    const sortedArray = ourmodule.sortPrio(sortedZeitArray);
       //sortedArray[0] wird als Spaziergaenger gewaehlt.
      var spaziergaenger = sortedArray[0];
       //Array[0] wird entfernt.
      sortedArray.shift();


    const reduzArray = ourmodule.priReduziert(sortedArray);

      // Setzt die Prio des Spaziergaengers zurueck.
      spaziergaenger.prio = 10;
      // Fuegt ihn ans ende der Liste an.
      reduzArray.push(spaziergaenger);
      // Array wird wieder zum String
      dataAS = JSON.stringify(arrayAS);

      ourmodule.writeJSON('angestellte.json', dataAS);
    return spaziergaenger.name;
  };
