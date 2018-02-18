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

  let player1Name = "Player 1";

  let player2Name = "Player2";

  editNames = () => {
    document.getElementById("hidden").removeAttribute("id");
  };
  submitNames = () => {
      player1Name = document.getElementById("player1-input").value;
      player2Name = document.getElementById("player2-input").value;
    document.getElementById("player-1").innerHTML = `
      <h3>${player1Name}</h3>
      `;
    document.getElementById("player-2").innerHTML = `
      <h3>${player2Name}</h3>
      `;
    document
      .getElementsByClassName("input-visible")[0]
      .setAttribute("id", "hidden");
  };

  initializeGame = () => {
    player = 1;
    for (key in gameBoard) {
      workingGameBoard[key] = Object.assign({}, gameBoard[key]);
      workingGameBoard[key].location.innerHTML = ``;
    }
    console.log("Game initialized", player);
  };

  document.addEventListener("DOMContentLoaded", function() {
    initializeGame();
  });

  switchGameMode = () => {
    playerGame = !playerGame;
    if(playerGame){
        document.getElementById(
            "switch-game"
          ).innerHTML = `<h3>Player vs. Player</h3>`;
          document.getElementById("player-1").innerHTML = `
          <h3>${player1Name}</h3>
          `;
        document.getElementById("player-2").innerHTML = `
          <h3>${player2Name}</h3>
          `;
    }
    else if(!playerGame){
        document.getElementById(
            "switch-game"
          ).innerHTML = `<h3>Player vs. Computer</h3>`
          document.getElementById("player-2").innerHTML = `
          <h3>Watson</h3>
          `;
    }
    initializeGame();
  };

  winGame = () => {
    alert("You win!");
  };

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
      alert(`Player ${player} wins!`);
      player = 1;
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
      player = 2;
      alert("It's a draw!");
      initializeGame();
      return true;
    } else {
      return false;
    }
  };

  computerMove = tile => {
    let computerTile = document.getElementById(tile);
  };

  playerMove = tile => {
    let playerTile = document.getElementById(tile);
    if (!workingGameBoard[tile].player) {
      console.log(player);
      if (player === 1) {
        console.log(player);
        playerTile.innerHTML = `
            <div class="markers">X</div>
            `;

        workingGameBoard[tile].player = 1;
        gameCheck(1) && playerGame ? true : (player = 2);
        if (gameCheck(1) && playerGame) {
          return true;
        } else if (!gameCheck(1) && playerGame) {
          player = 2;
        } else if (!gameCheck(1) && !playerGame) {
          computerMove(1);
        }
      } else if (player === 2) {
        console.log(player);
        player = 1;
        playerTile.innerHTML = `
            <div class="markers">O</div>
            `;
        workingGameBoard[tile].player = 2;
        gameCheck(2);
      }
    } else if (workingGameBoard[tile].player) {
      alert("You cannot select that tile!");
    }
  };
})();
