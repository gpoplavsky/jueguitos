// Defino la función constructora para los objetos jugadores
function Player(name, age) {
  this.name = name;
  this.age = age;
}

// Método para guardar los jugadores en el local storage
Player.savePlayers = function(players) {
  localStorage.setItem('players', JSON.stringify(players));
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

// Acceder a los datos de los jugadores
console.log("Jugador Uno:", playerOne.name, playerOne.age);
console.log("Jugador Dos:", playerTwo.name, playerTwo.age);

// Crear array de jugadores
let players = [playerOne, playerTwo];

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

// Acá empieza el código de linea de 4
document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1
  
    const winningArrays = [
      [0, 1, 2, 3],
      [41, 40, 39, 38],
      [7, 8, 9, 10],
      [34, 33, 32, 31],
      [14, 15, 16, 17],
      [27, 26, 25, 24],
      [21, 22, 23, 24],
      [20, 19, 18, 17],
      [28, 29, 30, 31],
      [13, 12, 11, 10],
      [35, 36, 37, 38],
      [6, 5, 4, 3],
      [0, 7, 14, 21],
      [41, 34, 27, 20],
      [1, 8, 15, 22],
      [40, 33, 26, 19],
      [2, 9, 16, 23],
      [39, 32, 25, 18],
      [3, 10, 17, 24],
      [38, 31, 24, 17],
      [4, 11, 18, 25],
      [37, 30, 23, 16],
      [5, 12, 19, 26],
      [36, 29, 22, 15],
      [6, 13, 20, 27],
      [35, 28, 21, 14],
      [0, 8, 16, 24],
      [41, 33, 25, 17],
      [7, 15, 23, 31],
      [34, 26, 18, 10],
      [14, 22, 30, 38],
      [27, 19, 11, 3],
      [35, 29, 23, 17],
      [6, 12, 18, 24],
      [28, 22, 16, 10],
      [13, 19, 25, 31],
      [21, 15, 9, 3],
      [20, 26, 32, 38],
      [36, 30, 24, 18],
      [5, 11, 17, 23],
      [37, 31, 25, 19],
      [4, 10, 16, 22],
      [2, 10, 18, 26],
      [39, 31, 23, 15],
      [1, 9, 17, 25],
      [40, 32, 24, 16],
      [9, 17, 25, 33],
      [8, 16, 24, 32],
      [11, 17, 23, 29],
      [12, 18, 24, 30],
      [1, 2, 3, 4],
      [5, 4, 3, 2],
      [8, 9, 10, 11],
      [12, 11, 10, 9],
      [15, 16, 17, 18],
      [19, 18, 17, 16],
      [22, 23, 24, 25],
      [26, 25, 24, 23],
      [29, 30, 31, 32],
      [33, 32, 31, 30],
      [36, 37, 38, 39],
      [40, 39, 38, 37],
      [7, 14, 21, 28],
      [8, 15, 22, 29],
      [9, 16, 23, 30],
      [10, 17, 24, 31],
      [11, 18, 25, 32],
      [12, 19, 26, 33],
      [13, 20, 27, 34],
    ]
  
    function checkBoard() {
      for (let y = 0; y < winningArrays.length; y++) {
        const square1 = squares[winningArrays[y][0]]
        const square2 = squares[winningArrays[y][1]]
        const square3 = squares[winningArrays[y][2]]
        const square4 = squares[winningArrays[y][3]]
  
        //check those squares to see if they all have the class of player-one
        if (
          square1.classList.contains('player-one') &&
          square2.classList.contains('player-one') &&
          square3.classList.contains('player-one') &&
          square4.classList.contains('player-one')
        )
        {
          result.innerHTML = '¡Ganó ' + playerOne.name + '!';
          console.log(result.innerText);
        }
        //check those squares to see if they all have the class of player-two
        if (
          square1.classList.contains('player-two') &&
          square2.classList.contains('player-two') &&
          square3.classList.contains('player-two') &&
          square4.classList.contains('player-two')
        )
        {
          result.innerHTML = '¡Ganó ' + playerTwo.name + '!';
          console.log(result.innerText);
        }
      }
    }
  
    for (let i = 0; i < squares.length; i++) {
      squares[i].onclick = () => {
        //if the square below your current square is taken, you can go ontop of it
        if (squares[i + 7].classList.contains('taken') &&!squares[i].classList.contains('taken')) {
          if (currentPlayer == 1) {
            squares[i].classList.add('taken')
            squares[i].classList.add('player-one')
            currentPlayer = 2
            displayCurrentPlayer.innerHTML = currentPlayer
          } else if (currentPlayer == 2){
            squares[i].classList.add('taken')
            squares[i].classList.add('player-two')
            currentPlayer = 1
            displayCurrentPlayer.innerHTML = currentPlayer        
          } 
        } else alert('No se puede seleccionar este casillero')
        checkBoard()
      }
    }
    
  })

  // Acá termina el código de linea de 4