(function() {
  //Using an IIFE so global scope of project isn't polluted

  // Initialization of default game variables

  const gameBoard = {
    tile0: {
      marked: false,
      location: document.getElementById("tile0"),
      player: 0
    },
    tile1: {
      marked: false,
      location: document.getElementById("tile1"),
      player: 0
    },
    tile2: {
      marked: false,
      location: document.getElementById("tile2"),
      player: 0
    },
    tile3: {
      marked: false,
      location: document.getElementById("tile3"),
      player: 0
    },
    tile4: {
      marked: false,
      location: document.getElementById("tile4"),
      player: 0
    },
    tile5: {
      marked: false,
      location: document.getElementById("tile5"),
      player: 0
    },
    tile6: {
      marked: false,
      location: document.getElementById("tile6"),
      player: 0
    },
    tile7: {
      marked: false,
      location: document.getElementById("tile7"),
      player: 0
    },
    tile8: {
      marked: false,
      location: document.getElementById("tile8"),
      player: 0
    }
  };

  const colorSchemes = {
    1: {
      1: "#4ABDAC",
      2: "#FC4A1A",
      3: "#F7B733",
      4: "#DFDCE3"
    },
    2: {
      1: "#6E7A92",
      2: "#96848D",
      3: "#8F99A1",
      4: "#D5D5D5"
    },
    3: {
      1: "#DC7351",
      2: "#092F50",
      3: "#DDB144",
      4: "#FEDCD2"
    },
    4: {
      1: "#D7CDC7",
      2: "#565656",
      3: "#753240",
      4: "#C2A081"
    },
    5: {
      1: "#9B8550",
      2: "#BBAB86",
      3: "#181818",
      4: "#FFFFFF"
    },
    6: {
      1: "#FFFFFF",
      2: "#000000",
      3: "#000000",
      4: "#000000"
    }
  };

  let colorSelect = 0;

  let workingGameBoard = {};

  let playerGame = true;

  let player = 1;

  let player1Name = "Player 1";

  let player2Name = "Player2";

  let gameCount = 0;

  // function for game initialization, run on win, draw, and redo

  initializeGame = () => {
    player = 1;
    gameCount = 0;
    for (key in gameBoard) {
      workingGameBoard[key] = Object.assign({}, gameBoard[key]);
      workingGameBoard[key].location.innerHTML = ``;
      workingGameBoard[key].location.classList.remove("fade-in");
    }
    document.getElementById(`player-1`).classList.add("flash");
    console.log("Game initialized");
  };

  //event listener on DOM load to run game initialization

  document.addEventListener("DOMContentLoaded", function() {
    initializeGame();
  });

  //function to change color scheme

  changeColor = scheme => {
    colorSelect = scheme;
    let bodyBackground = document.getElementsByTagName("body")[0];
    let gameTiles = document.getElementsByClassName("game-tile");
    let buttonStyles = document.getElementsByTagName("button");
    let borders = [
      ...document.getElementsByClassName("row-bottom-edge"),
      ...document.getElementsByClassName("tile-left-edge"),
      ...document.getElementsByClassName("tile-right-edge")
    ];
    let headers = [
      ...document.getElementsByTagName("h3"),
      ...document.getElementsByTagName("h1")
    ];

    for (let i = 0; i < gameTiles.length; i++) {
      gameTiles[i].style.backgroundColor = `${colorSchemes[scheme][1]}`;
      gameTiles[i].style.color = `${colorSchemes[scheme][3]}`;
    }

    for (let j = 0; j < headers.length; j++) {
      headers[j].style.color = `${colorSchemes[scheme][4]}`;
    }
    bodyBackground.style.backgroundColor = `${colorSchemes[scheme][1]}`;
    for (k = 0; k < buttonStyles.length; k++) {
      buttonStyles[k].style.backgroundColor = `${colorSchemes[scheme][3]}`;
      buttonStyles[k].style.color = `${colorSchemes[scheme][1]}`;
    }
    borders.map(x => (x.style.borderColor = `${colorSchemes[scheme][2]}`));
  };

  // functions to edit and submit player names.

  editNames = () => {
    if (document.getElementById("hidden")) {
      document.getElementById("hidden").removeAttribute("id");
    }
  };
  submitNames = () => {
    player1Name = document.getElementById("player1-input").value;
    player2Name = document.getElementById("player2-input").value;
    if (playerGame) {
      document.getElementById("player-1").innerHTML = `
          <h3>${player1Name}</h3>
          `;
      document.getElementById("player-2").innerHTML = `
          <h3>${player2Name}</h3>
          `;
    } else {
      document.getElementById("player-1").innerHTML = `
          <h3>${player1Name}</h3>
          `;
    }
    document
      .getElementsByClassName("input-visible")[0]
      .setAttribute("id", "hidden");
    changeColor(colorSelect);
  };

  //function to switch game mode from player vs. player to computer vs. player
  // includes switching player name

  switchGameMode = () => {
    playerGame = !playerGame;
    if (playerGame) {
      document.getElementById(
        "switch-game"
      ).innerHTML = `<h3>Player vs. Player</h3>`;
      document.getElementById("player-1").innerHTML = `
          <h3>${player1Name}</h3>
          `;
      document.getElementById("player-2").innerHTML = `
          <h3>${player2Name}</h3>
          `;
    } else if (!playerGame) {
      document.getElementById(
        "switch-game"
      ).innerHTML = `<h3>Player vs. Computer</h3>`;
      document.getElementById("player-2").innerHTML = `
          <h3>Watson</h3>
          `;
      player2Name = "Watson";
    }
    colorSelect ? changeColor(colorSelect) : null;
    initializeGame();
  };

  // large function to check win conditions each time a player moves

  gameCheck = player => {
    if (
      [
        workingGameBoard.tile0,
        workingGameBoard.tile1,
        workingGameBoard.tile2
      ].every(x => x.player === player) ||
      [
        workingGameBoard.tile3,
        workingGameBoard.tile4,
        workingGameBoard.tile5
      ].every(x => x.player === player) ||
      [
        workingGameBoard.tile6,
        workingGameBoard.tile7,
        workingGameBoard.tile8
      ].every(x => x.player === player) ||
      [
        workingGameBoard.tile0,
        workingGameBoard.tile3,
        workingGameBoard.tile6
      ].every(x => x.player === player) ||
      [
        workingGameBoard.tile1,
        workingGameBoard.tile4,
        workingGameBoard.tile7
      ].every(x => x.player === player) ||
      [
        workingGameBoard.tile2,
        workingGameBoard.tile5,
        workingGameBoard.tile8
      ].every(x => x.player === player) ||
      [
        workingGameBoard.tile0,
        workingGameBoard.tile4,
        workingGameBoard.tile8
      ].every(x => x.player === player) ||
      [
        workingGameBoard.tile2,
        workingGameBoard.tile4,
        workingGameBoard.tile6
      ].every(x => x.player === player)
    ) {
      initializeGame();
      player === 1
        ? alert(`${player1Name} wins!`)
        : alert(`${player2Name} wins!`);
      return true;
    } else if (
      [
        workingGameBoard.tile0,
        workingGameBoard.tile1,
        workingGameBoard.tile2,
        workingGameBoard.tile3,
        workingGameBoard.tile4,
        workingGameBoard.tile5,
        workingGameBoard.tile6,
        workingGameBoard.tile7,
        workingGameBoard.tile8
      ].every(x => x.player)
    ) {
      alert("It's a draw!");
      initializeGame();
      return true;
    } else {
      return false;
    }
  };

  // function for logic behind computer moves, very basic with random numbers

  computerMove = () => {
    gameCount += 1;
    if (gameCount === 2) {
      if (workingGameBoard.tile4.player) {
        workingGameBoard.tile0.player = 2;
        setTimeout(() => {
          workingGameBoard.tile0.location.classList.add("fade-in");
          workingGameBoard.tile0.location.innerHTML = `
            <p class="markers">O</p>
            `;
          gameCheck(2);
        }, 1500);
      }
    } else {
      let randomMove = Math.floor(Math.random() * 9);
      while (workingGameBoard[`tile${randomMove}`].player) {
        console.log(workingGameBoard[`tile${randomMove}`].player);
        randomMove = Math.floor(Math.random() * 9);
      }
      workingGameBoard[`tile${randomMove}`].player = 2;
      setTimeout(() => {
        console.log(randomMove);
        workingGameBoard[`tile${randomMove}`].location.classList.add("fade-in");
        workingGameBoard[`tile${randomMove}`].location.innerHTML = `
            <p class="markers">O</p>
            `;
        gameCheck(2);
      }, 1500);
    }
  };

  //function for player moving

  playerMove = tile => {
    gameCount += 1;
    // removing all instances of the flash animation and adding it for the player whose turn it is
    document.getElementById("player-1").classList.remove("flash");
    document.getElementById("player-2").classList.remove("flash");
    let playerTile = document.getElementById(tile);
    playerTile.classList.add("fade-in");
    if (!workingGameBoard[tile].player) {
      if (player === 1) {
        playerTile.innerHTML = `
            <p class="markers">X</p>
            `;

        workingGameBoard[tile].player = 1;
        gameTracker = gameCheck(1);
        //functionality here for checking if the player has won, if they haven't, and if it if computer vs. player
        if (gameTracker && playerGame) {
          return true;
        } else if (!gameTracker && playerGame) {
          player = 2;

          document.getElementById(`player-${player}`).classList.add("flash");
        } else if (!gameTracker && !playerGame) {
          document.getElementById("player-1").classList.remove("flash");
          computerMove();
        }
      } else if (player === 2) {
        player = 1;
        document.getElementById(`player-${player}`).classList.add("flash");
        playerTile.innerHTML = `
            <p class="markers">O</p>
            `;
        workingGameBoard[tile].player = 2;
        gameCheck(2);
      }
    } else if (workingGameBoard[tile].player) {
      alert("You cannot select that tile!");
    }
  };
})();
