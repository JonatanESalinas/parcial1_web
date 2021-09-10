function getMyInfo() {
	var selectedValue = document.getElementById("equipo").value;
  	var settings = {
    		"url": "https://v3.football.api-sports.io/teams?id="+selectedValue,
    		"method": "GET",
    		"timeout": 0,
    		"headers": {
      			"x-rapidapi-key": "02e1d5d670934c418dc9a873f482926e",
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
    		fund.innerHTML = "<b>Año de fundación: </b>" + response.response[0].team.founded;
    		var est = document.getElementById("estadio");
    		est.innerHTML = "<b>Estadio: </b>" + response.response[0].venue.name;
    		var cap = document.getElementById("capacidad");
    		cap.innerHTML = "<b>Capacidad: </b>" + response.response[0].venue.capacity + " personas";
    		var ciud = document.getElementById("ciudad");
    		ciud.innerHTML = "<b>Ciudad: </b>" + response.response[0].venue.city;
    		var lEstadio = document.getElementById("logoEstadio").src = response.response[0].venue.image;

  	});
}
