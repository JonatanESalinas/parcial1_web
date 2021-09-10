window.addEventListener("load", getTablaGeneral);

function getTablaGeneral() {
    var settings = {
      "url": "https://v3.football.api-sports.io/standings?league=262&season=2021",
      "method": "GET",
      "timeout": 0,
      "headers": {
        "x-rapidapi-key": "54d73f30696201875491a2f00dae6602",
        "x-rapidapi-host": "v3.football.api-sports.io"
      },
    };
    
    console.log("xd");

    $.ajax(settings).done(function (response) {
      console.log(response);

        for(var i=0; i<18; i++){
            var logoTempSrc = response.response[0].league.standings[0][i].team.logo;
            var equipoTemp = response.response[0].league.standings[0][i].team.name;
            var puntosTemp = response.response[0].league.standings[0][i].points;

            var celda_logo_tabla = document.getElementById("logo_"+ (i+1).toString());
            var celda_nombre_tabla = document.getElementById("nombre_"+ (i+1).toString());
            var celda_puntos_tabla = document.getElementById("puntos_"+ (i+1).toString());

            celda_logo_tabla.src = logoTempSrc;
            celda_logo_tabla.width = "50";
            celda_nombre_tabla.innerHTML = equipoTemp;
            celda_puntos_tabla.innerHTML = puntosTemp;
        }

      $('#resultado').text(JSON.stringify(response));
    });
  
}