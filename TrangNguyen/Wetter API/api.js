const key = 'fdecbfe26d1ea60cb2b8fd91b0e2571b'

const ort = 2886242 //Koeln

const getWeather = ( cityID ) => {
	fetch('http://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&APPID=' + key)
	.then((respond) => { return respond.json() }) //Datei in JSON umwandeln
	.then((data) => {
        console.log(data)
		drawWeather(data)
	})
	.catch(() => {
		// catch any errors
	})
}
const drawWeather = (d) => {

    let beschreibung = d.weather[0].description
    let temperature = d.main.temp
    let ort = d.name

	document.getElementById('beschreibung').innerHTML = beschreibung 
    document.getElementById('temp').innerHTML = temperature + '&deg;'+'K'
	document.getElementById('ort').innerHTML = ort
    //JS scan qua HTML de tim cai ID minh muon roi sau day dung innerhtml de cho data vao cai element chua id ma minh muon
}
window.onload = function() {
	getWeather( ort )
}