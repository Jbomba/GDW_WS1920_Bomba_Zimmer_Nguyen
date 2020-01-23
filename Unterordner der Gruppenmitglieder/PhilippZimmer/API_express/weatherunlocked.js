//längen breiten Grad
//http://api.weatherunlocked.com/api/current/51.06,7.57?app_id={dcdfab73}&app_key={f7cdadd161bb7a81c9fd7dbcba62418f}

//Postleitzahl
//http://api.weatherunlocked.com/api/current/de.51643?app_id={dcdfab73}&app_key={f7cdadd161bb7a81c9fd7dbcba62418f}

//deutsche Sprache
//http://api.weatherunlocked.com/api/current/de.51643?lang=de&app_id={dcdfab73}&app_key={f7cdadd161bb7a81c9fd7dbcba62418f}



var express = require('express');
var request = require('request');

var api = express();

api.set('view engine', 'ejs');

/*
var apikey = f7cdadd161bb7a81c9fd7dbcba62418f;
var location = de.51643;
app_id = dcdfab73;
*/
url = "http://api.weatherunlocked.com/api/current/de.51643?lang=de&app_id={dcdfab73}&app_key={f7cdadd161bb7a81c9fd7dbcba62418f}"

 api.get('/', function(reg, res){
    request(url, function(errror, response, body){
        weatherData_json = JSON.parse(body);
        Console.log(weatherData_json);

        var data = {
            location : city,
            temperatur : weatherData_json.main.temp,
            description : weatherData_json.weather[0].description
        };

        var weather_data = {weather : weather};

        res.render('indes', weather_data);
    });
 })

api.listen(8081);