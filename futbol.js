function getMyIp() {
  var settings = {
    "url": "https://v3.football.api-sports.io/teams/statistics?season=2019&team=33&league=39",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "x-rapidapi-key": "54d73f30696201875491a2f00dae6602",
      "x-rapidapi-host": "v3.football.api-sports.io"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    $('#resultado').text(JSON.stringify(response));
  });

}

function getTeams() {
  var settings = {
    "url": "https://v3.football.api-sports.io/teams?country=mexico",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "x-rapidapi-key": "54d73f30696201875491a2f00dae6602",
      "x-rapidapi-host": "v3.football.api-sports.io"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    $('#resultado').text(JSON.stringify(response));
  });

}