import "./style.scss";

const appContainer = document.querySelector(".app");

window.onload = function () {
  createBoard();
};

const gameboard = () => {
  let board = new Array(9);
};

function createBoard() {
  for (let start = 0; start < 9; start++) {
    const newBoard = document.createElement("div");
    newBoard.classList.add("board");
    newBoard.setAttribute("id", start);
    newBoard.addEventListener("click", makeMove);

    appContainer.appendChild(newBoard);
  }
}

function makeMove(event) {
  console.log("yey i can click!");
}
