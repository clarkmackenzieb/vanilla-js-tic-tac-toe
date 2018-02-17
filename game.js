(function() {
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

  let workingGameBoard = {};

  let gameMode = 0;

  let player = 1;

  initializeGame = () => {
    console.log("Game initialized");
    for (key in gameBoard) {
      workingGameBoard[key] = Object.assign({}, gameBoard[key]);
      workingGameBoard[key].location.classList.remove("blue", "red");
    }
    console.log(workingGameBoard);

    gameMode = 0;
    player = 1;
  };

  document.addEventListener("DOMContentLoaded", function() {
    initializeGame();
  });

  switchGameMode = () => {
    gameMode = !gameMode;
  };

  winGame = () => {
    alert("You win!");
  };

  gameCheck = player => {
      // fix this 
    if (
      (workingGameBoard.tile0.player === player &&
        workingGameBoard.tile1.player === player &&
        workingGameBoard.tile2.player === player) ||
      (workingGameBoard.tile3.player === player &&
        workingGameBoard.tile4.player === player &&
        workingGameBoard.tile5.player === player) ||
      (workingGameBoard.tile6.player === player &&
        workingGameBoard.tile7.player === player &&
        workingGameBoard.tile8.player === player) ||
      (workingGameBoard.tile0.player === player &&
        workingGameBoard.tile3.player === player &&
        workingGameBoard.tile6.player === player) ||
      (workingGameBoard.tile1.player === player &&
        workingGameBoard.tile4.player === player &&
        workingGameBoard.tile7.player === player) ||
      (workingGameBoard.tile2.player === player &&
        workingGameBoard.tile5.player === player &&
        workingGameBoard.tile8.player === player) ||
      (workingGameBoard.tile0.player === player &&
        workingGameBoard.tile4.player === player &&
        workingGameBoard.tile8.player === player) ||
      (workingGameBoard.tile2.player === player &&
        workingGameBoard.tile4.player === player &&
        workingGameBoard.tile6.player === player)
    ) {
      console.log(`player ${player} wins!`);
      initializeGame();
      //async 
    }
  };

  computerMove = () => {};

  playerMove = tile => {
    let playerTile = document.getElementById(tile);
    if (!workingGameBoard[tile].player) {
      if (player === 1) {
        workingGameBoard[tile].player = 1;
        gameCheck(1);
        document.getElementById(tile).classList.add("blue");
        player = 2;
      } else {
        workingGameBoard[tile].player = 2;
        gameCheck(2);
        document.getElementById(tile).classList.add("red");
        player = 1;
      }
    } else if (workingGameBoard[tile].player) {
      alert("You cannot select that tile!");
    } else if ((gameMode = 1)) {
      computerMove(tile);
    }
  };
})();
