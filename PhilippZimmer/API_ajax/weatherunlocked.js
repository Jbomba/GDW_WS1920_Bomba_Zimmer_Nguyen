//längen breiten Grad
//http://api.weatherunlocked.com/api/current/51.06,7.57?app_id={dcdfab73}&app_key={f7cdadd161bb7a81c9fd7dbcba62418f}

//Postleitzahl
//http://api.weatherunlocked.com/api/current/de.51643?app_id={dcdfab73}&app_key={f7cdadd161bb7a81c9fd7dbcba62418f}

//deutsche Sprache
//http://api.weatherunlocked.com/api/current/de.51643?lang=de&app_id={dcdfab73}&app_key={f7cdadd161bb7a81c9fd7dbcba62418f}


<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

<script>

    $.ajax({
        url: "http://api.weatherunlocked.com/api/current/de.51643?lang=de&app_id={dcdfab73}&app_key={f7cdadd161bb7a81c9fd7dbcba62418f}",
        type: "GET",
        success: function (parsedResponse, statusText, jqXhr) {

            console.log(parsedResponse);

        },
        error: function (error) {

            console.log(error);
        }
    });

</script>