// tic tac toe javascript
const board = document.getElementById('board')
const cell = document.getElementsByClassName('board-place');
console.log(board, cell);
const players = ["X", "O"];
let currentPlayer = players[0];
const commentry = document.createElement("h2");
commentry.textContent = "Let's Play!";
commentry.style.textAlign = "center";
commentry.style.fontSize = "40px";
commentry.style.color = "white";
commentry.style.fontFamily = "Montserrat";
board.after(commentry);
let setResetBtn = document.querySelector(".controls");
let startBtn = document.querySelector("#start");

setResetBtn.setAttribute("hidden", "hidden");

const winning_combis = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", () => {
        console.log("hey");
    if (cell[i].textContent !== "") {
      return;
    }
    cell[i].textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
        commentry.textContent = `Game over! ${currentPlayer} wins!`;
        return;
    }
    if (checkTie()) {
      commentry.textContent = `Game is tied!`;
      return;
    }
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    if (currentPlayer == players[0]) {
      commentry.textContent = `X's turn!`;
    } else {
      commentry.textContent = `O's turn!`;
    }
  });
}

function checkWin(currentPlayer) {
  for (let i = 0; i < winning_combis.length; i++) {
    const [a, b, c] = winning_combis[i];
    if (
      cell[a].textContent === currentPlayer &&
      cell[b].textContent === currentPlayer &&
      cell[c].textContent === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  for (let i = 0; i < cell.length; i++) {
    if (cell[i].textContent === "") {
      return false;
    }
  }
  return true;
}


setResetBtn.addEventListener("click", () => {
    for (let i = 0; i < cell.length; i++) {
        cell[i].textContent = "";
    }
    commentry.textContent = "X's Turn!";
    currentPlayer = players[0];
})

startBtn.addEventListener("click", () => {
    for (let i = 0; i < cell.length; i++) {
        cell[i].textContent = "";
    }
    commentry.textContent = "X's Turn!";
    currentPlayer = players[0];
    startBtn.setAttribute("hidden", "hidden");
    setResetBtn.removeAttribute("hidden");
})
