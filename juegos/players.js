// Defino la función para el ingreso de datos de jugadores
function ingresarDatos() {

// Defino la función constructora para los objetos jugadores
function Player(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Método para guardar los jugadores en el local storage
  Player.savePlayers = function(players) {
    const playersJSON = JSON.stringify(players)
    localStorage.setItem('players', playersJSON);
  };
  
  // Método para cargar los jugadores desde el local storage
  Player.loadPlayers = function() {
    const playersData = localStorage.getItem('players');
    return playersData ? JSON.parse(playersData) : [];
  };
  
  // Método de búsqueda y filtrado en el array de jugadores
  Player.filterPlayers = function(players, searchQuery) {
    searchQuery = searchQuery.toLowerCase();
  
    return players.filter(player => {
      const playerName = player.name.toLowerCase();
      return playerName.includes(searchQuery);
    });
  };
  
  // Crear las instancias de los jugadores
  let playerOne = new Player("Jugador N° 1", 20)
  playerOne.name = prompt("Jugador N° 1, inserte su nombre:"); 
  playerOne.age = prompt("Hola, " + playerOne.name + " ¿cuántos años tenés?");
  
  let playerTwo = new Player("Jugador N° 2", 25)
  playerTwo.name = prompt("Ahora le toca el turno al Jugador N° 2. ¿Cómo te llamas?") 
  playerTwo.age = prompt("¡Muy bien, " + playerTwo.name + "! Ahora dime tu edad:");
    
  // Crear array de jugadores
  let players = [playerOne, playerTwo];

  // Guardar los datos de los jugadores en el local storage
  Player.savePlayers(players);
  
  // Pedirle al menor que resuelva la trivia
  if (parseInt(playerOne.age) >= parseInt(playerTwo.age)) {
      let resultadoTrivia = prompt(playerTwo.name + ", ¿cuántos años tenía " + playerTwo.name + " cuando naciste? / Pista: " + (parseInt(playerOne.age) + "-" + parseInt(playerTwo.age)));
      
      if (parseInt(resultadoTrivia) === (parseInt(playerOne.age) - parseInt(playerTwo.age))) {
          alert("¡Muy bien! El resultado es correcto");
      } else {
          alert("El resultado es incorrecto.");
      }
  } else {
      let resultadoTrivia = prompt(playerOne.name + ", ¿cuántos años tenía " + playerTwo.name + " cuando naciste? / Pista: " + (parseInt(playerTwo.age) + "-" + parseInt(playerOne.age)));
      
      if (parseInt(resultadoTrivia) === (parseInt(playerTwo.age) - parseInt(playerOne.age))) {
          alert("¡Muy bien! El resultado es correcto");
      } else {
          alert("El resultado es incorrecto.");
      }
  }
  
  // Mostrar resultados en el HTML
  document.getElementById("playerOne").innerHTML = "Jugador N° 1: " + playerOne.name + "<br>Edad: " + playerOne.age;
  document.getElementById("playerTwo").innerHTML = "Jugador N° 2: " + playerTwo.name + "<br>Edad: " + playerTwo.age;
  
  // Ejemplo de búsqueda y filtrado del array de jugadores
  let searchQuery = prompt("Ingresa el nombre del jugador que deseas buscar:");
  let filteredPlayers = Player.filterPlayers(players, searchQuery);
  
  // Mostrar resultados
  if (filteredPlayers.length > 0) {
    console.log("Resultados de la búsqueda:");
    filteredPlayers.forEach(player => {
      console.log("Nombre:", player.name, "Edad:", player.age);
    });
  } else {
    console.log("No se encontraron jugadores con ese nombre.");
  }
}