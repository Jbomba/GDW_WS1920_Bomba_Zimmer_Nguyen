//längen breiten Grad
//http://api.weatherunlocked.com/api/current/51.06,7.57?app_id={dcdfab73}&app_key={f7cdadd161bb7a81c9fd7dbcba62418f}

//Postleitzahl
//http://api.weatherunlocked.com/api/current/de.51643?app_id={dcdfab73}&app_key={f7cdadd161bb7a81c9fd7dbcba62418f}

//deutsche Sprache
//http://api.weatherunlocked.com/api/current/de.51643?lang=de&app_id={dcdfab73}&app_key={f7cdadd161bb7a81c9fd7dbcba62418f}

/*
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

<script>

    $.ajax({
        url: "http://api.weatherunlocked.com/api/current/51.50,-0.12?lang=de&app_id={dcdfab73}&app_key={f7cdadd161bb7a81c9fd7dbcba62418f}",
        type: "GET",
        success: function (parsedResponse, statusText, jqXhr) {

            console.log(parsedResponse);

        },
        error: function (error) {

            console.log(error);
        }
    });

</script>
*/

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
  (function() {
    var fetchWeatherData = function(51.50, -0.12) {
      // You need to sign up to Weather Unlocked for an account. Once you do,
      // you will find your APP ID and APP KEY in your account dashboard.
      var wuAppId = 'dcdfab73';
      var wuAppKey = 'f7cdadd161bb7a81c9fd7dbcba62418f';
      jQuery.getJSON('https://api.weatherunlocked.com/api/current/' + latitude + ',' + longitude + '?app_id=' + wuAppId + '&app_key=' + wuAppKey)
        .done(function(data) {
          window.dataLayer.push({
            event: 'weatherDone',
            weather: data.wx_desc,
            temperature: data.temp_c
          });
        }).fail(function(jq, status, msg) {
          console.log('Weather request failed: ' + status + ' - ' + msg);
        });
    };
    </script>
