function getMyInfo() {
	var selectedValue = document.getElementById("equipo").value;
  	var settings = {
    		"url": "https://v3.football.api-sports.io/teams?id="+selectedValue,
    		"method": "GET",
    		"timeout": 0,
    		"headers": {
      			"x-rapidapi-key": "54d73f30696201875491a2f00dae6602",
      			"x-rapidapi-host": "v3.football.api-sports.io"
    		},
  	};

  	$.ajax(settings).done(function (response) {

    		console.log(response);

    		var nEquipo = response.response[0].team.name;
    		var lEquipo = response.response[0].team.logo;
    		var fund = response.response[0].team.founded;
    		var est = response.response[0].venue.name;
    		var cap = response.response[0].venue.capacity;
    		var ciud = response.response[0].venue.city;
    		var lEstadio = response.response[0].venue.image;

    		var nEquipo = document.getElementById("nEquipo");
    		nEquipo.innerHTML = response.response[0].team.name;
    		var lEquipo = document.getElementById("logoEquipo").src = response.response[0].team.logo;
    		var fund = document.getElementById("fundacion");
    		fund.innerHTML = "<b>A\u00F1o de fundaci\u00F3n: </b>" + response.response[0].team.founded;
    		var est = document.getElementById("estadio");
    		est.innerHTML = "<b>Estadio: </b>" + response.response[0].venue.name;
    		var cap = document.getElementById("capacidad");
    		cap.innerHTML = "<b>Capacidad: </b>" + response.response[0].venue.capacity + " personas";
    		var ciud = document.getElementById("ciudad");
    		ciud.innerHTML = "<b>Ciudad: </b>" + response.response[0].venue.city;
    		var lEstadio = document.getElementById("logoEstadio").src = response.response[0].venue.image;

  	});
}

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

function enviar_datos_contacto(){
    var nombreElement = document.getElementById("nombre_contacto_input")
    var emailElement = document.getElementById("email_contacto_input")

    nombreUsuario = nombreElement.value;
    emailUsuario = emailElement.value;

    alert("Gracias por suscribirse, " + nombreUsuario + ".\nLe llegaran las mejores noticias de la LigaMX al correo:  " + emailUsuario);
}
