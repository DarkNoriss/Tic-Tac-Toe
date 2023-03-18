import "./style.scss";
import { gameboard } from "./modules/gameboard.js";
import { player } from "./modules/player";

const appContainer = document.querySelector(".app");
const modal = document.querySelector(".modal");
const btnX = document.querySelector(".btnX");
const btnO = document.querySelector(".btnO");

const gameObj = () => {
  const gameBoard = gameboard();
  const playerOne = player();
  const playerTwo = player();
  let playerTurn = "playerOne";

  const makeMove = (event) => {
    if (event.target.childNodes[0].innerText != "") return;

    if (playerTurn == "playerOne") {
      event.target.childNodes[0].innerText = playerOne.getSigh();
      gameBoard.setBoard(event.target.id, playerOne.getSigh());
      playerTurn = "playerTwo";
      return;
    }
    event.target.childNodes[0].innerText = playerTwo.getSigh();
    gameBoard.setBoard(event.target.id, playerTwo.getSigh());
    playerTurn = "playerOne";
  };

  return { playerOne, playerTwo, makeMove };
};

const game = gameObj();

window.onload = () => {
  // create 9 divs for the play board
  for (let start = 0; start < 9; start++) {
    const newBoard = document.createElement("div");
    const newBoardText = document.createElement("p");

    newBoard.classList.add("board");
    newBoard.setAttribute("id", start);
    newBoard.addEventListener("click", game.makeMove);

    newBoard.appendChild(newBoardText);
    appContainer.appendChild(newBoard);
  }

  btnX.addEventListener("click", () => {
    game.playerOne.setSign("X");
    game.playerTwo.setSign("O");
    modal.remove();
  });
  btnO.addEventListener("click", () => {
    game.playerOne.setSign("O");
    game.playerTwo.setSign("X");
    modal.remove();
  });

  // ask player one X or O
  modal.showModal();
};
