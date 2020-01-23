var express = require('express');
var request = require('request');

var app = express();

app.set('view engine', 'ejs');

var APIKEY = 'fc3ac8c5e09a2ca2fcc093b68d6da831'
var city = 'Cologne'
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APIKEY}`

app.get('/', function(req, res){

    request(url, function(errror, response, body){

        weather_json = JSON.parse(body);
        console.log(weather_json);

        var weather = {
            city : city,
            temperature : weather_json.main.temp,
            description : weather_json.weather[0].description
        };

        var weather_data = {weather : weather};

        res.render('index', weather_data);

    });

});

app.listen(8081);