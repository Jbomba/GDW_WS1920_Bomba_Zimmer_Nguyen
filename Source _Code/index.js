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

var apikey = "fc3ac8c5e09a2ca2fcc093b68d6da831";
var city = "Cologne";
var country = "276";

// Openweathermap URL
var url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=${apikey}`;

app.get("/", (req, res) => {
  request(url, (errror, response, body) => {
    const position1 = 0;
    const position2 = 1;
    const position3 = 2;

    var weather_json = JSON.parse(body);

    var timestamp1 = ourmodule.zeitpunkt(weather_json, position1);
    var timestamp2 = ourmodule.zeitpunkt(weather_json, position2);
    var timestamp3 = ourmodule.zeitpunkt(weather_json, position3);
  
    var weatherid1 = ourmodule.wetterNummer(weather_json, position1);
    var weatherid2 = ourmodule.wetterNummer(weather_json, position2);
    var weatherid3 = ourmodule.wetterNummer(weather_json, position3);

    anwendungslogik(timestamp3, timestamp2, timestamp1, weatherid1, weatherid2, weatherid3);
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
      "Der Himmel ist klar bis bewoelkt.",
      ""
    ];

    var mitarbeiter = mitarbeiterwahl();

    var antwort =
      "Die beste Uhrzeit zum Spazierengehen ist: " +
      tempTime +
      " +/- 1,5 Stunden. " +
      tempArray[temp] + " Herrchen/Frauchen ist fuer heute: " + mitarbeiter;

    res.send(antwort);
  });
});

function anwendungslogik(timestamp3, timestamp2, timestamp1, weatherid1, weatherid2, weatherid3) {
  ourmodule.ifBinUeberfordert(timestamp3, timestamp2, timestamp1, weatherid1, weatherid2, weatherid3);  
}

  function mitarbeiterwahl() {
    var angestellten_json = ourmodule.readJSON('angestellte.json');
    var sortedArray = ourmodule.sortZeit(angestellten_json);
    //var sortedArray = ourmodule.sortPrio(sortedArray);
       //sortedArray[0] wird als Spaziergaenger gewaehlt.
      var spaziergaenger = sortedArray[0];
       //Array[0] wird entfernt.
      sortedArray.shift();

    var reduzierenArray = ourmodule.prioReduziert(sortedArray);

      // Setzt die Prio des Spaziergaengers zurueck.
      spaziergaenger.prio = 10;
      // Fuegt ihn ans ende der Liste an.
      //console.log(reduzierenArray);
      reduzierenArray.push(spaziergaenger);
      //console.log(reduzierenArray);
      // Array wird wieder zum String
      dataAngestellte = JSON.stringify(angestellten_json);

      ourmodule.writeJSON('angestellte.json', dataAngestellte);
    return spaziergaenger.name;
  };
