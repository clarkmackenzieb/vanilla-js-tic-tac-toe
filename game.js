let gameBoard = {
  tile0: {
    marked: false,
    location: document.getElementById("tile0")
  },
  tile1: {
    marked: false,
    location: document.getElementById("tile1")
  },
  tile2: {
    marked: false,
    location: document.getElementById("tile2")
  },
  tile3: {
    marked: false,
    location: document.getElementById("tile3")
  },
  tile4: {
    marked: false,
    location: document.getElementById("tile4")
  },
  tile5: {
    marked: false,
    location: document.getElementById("tile5")
  },
  tile6: {
    marked: false,
    location: document.getElementById("tile6")
  },
  tile7: {
    marked: false,
    location: document.getElementById("tile7")
  },
  tile8: {
    marked: false,
    location: document.getElementById("tile8")
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

computerMove = () => {};

playerMove = tile => {
  let playerTile = document.getElementById(tile);
  if (workingGameBoard[tile].marked === false) {
    workingGameBoard[tile].marked = true;
    console.log("saved", gameBoard[tile].marked);
    console.log("copy", workingGameBoard[tile].marked);
    if (player === 1) {
      document.getElementById(tile).classList.add("blue");
      player = 2;
    } else {
      document.getElementById(tile).classList.add("red");
      player = 1;
    }
  } else if (workingGameBoard[tile].marked === true) {
    alert("You cannot select that tile!");
  } else if ((gameMode = 1)) {
    computerMove(tile);
  }
};
