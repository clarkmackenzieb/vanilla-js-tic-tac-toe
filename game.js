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

  let playerGame = true;

  let player = 1;

  initializeGame = () => {
    console.log("Game initialized");
    for (key in gameBoard) {
      workingGameBoard[key] = Object.assign({}, gameBoard[key]);
      workingGameBoard[key].location.classList.remove("blue", "red");
      workingGameBoard[key].location.innerHTML = ``;
    }
    console.log(workingGameBoard);

    gameMode = 0;
    player = 1;
  };

  document.addEventListener("DOMContentLoaded", function() {
    initializeGame();
  });

  switchGameMode = () => {
    playerGame = !playerGame;
  };

  winGame = () => {
    alert("You win!");
  };

  gameCheck = player => {
    // fix this

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
      alert(`player ${player} wins!`);
      initializeGame();
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

  computerMove = () => {};

  playerMove = tile => {
    let playerTile = document.getElementById(tile);
    if (!workingGameBoard[tile].player) {
      if (player === 1) {
        workingGameBoard[tile].player = 1;
        gameCheck(1)
          ? true
          : (playerTile.innerHTML = `
          <div>X</div>
          `);
        player = 2;
      } else {
        workingGameBoard[tile].player = 2;
        gameCheck(2)
          ? true
          : (playerTile.innerHTML = `
          <div>O</div>
          `);
        player = 1;
      }
    } else if (workingGameBoard[tile].player) {
      alert("You cannot select that tile!");
    } else if ((gameMode = 1)) {
      computerMove(tile);
    }
  };
})();
