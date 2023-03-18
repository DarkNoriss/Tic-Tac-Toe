import "./style.scss";
import { gameboard } from "./modules/gameboard.js";
import { player } from "./modules/player";

const appContainer = document.querySelector(".app");
const modalBegin = document.querySelector(".modalBegin");
const modalEnd = document.querySelector(".modalEnd");
const modalText = document.querySelector(".modalText");
const btnX = document.querySelector(".btnX");
const btnO = document.querySelector(".btnO");
const btnAgain = document.querySelector(".btnAgain");

const gameObj = () => {
  const gameBoard = gameboard();
  const playerOne = player();
  const playerTwo = player();
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let playerTurn = "playerOne";
  let winner = "";

  const makeMove = (event) => {
    if (event.target.childNodes[0].innerText != "") return;
    if (playerTurn == "playerOne") {
      event.target.childNodes[0].innerText = playerOne.getSigh();
      gameBoard.setBoard(event.target.id, playerOne.getSigh());
      playerTurn = "playerTwo";
    } else {
      event.target.childNodes[0].innerText = playerTwo.getSigh();
      gameBoard.setBoard(event.target.id, playerTwo.getSigh());
      playerTurn = "playerOne";
    }
    checkWinner();
  };

  const checkWinner = () => {
    winConditions.forEach((elementA) => {
      let scoreA = 0;
      let scoreB = 0;
      elementA.forEach((elementB) => {
        if (gameBoard.getBoard(elementB) == "X") {
          scoreA++;
        }
        if (gameBoard.getBoard(elementB) == "O") {
          scoreB++;
        }
        if (scoreA == 3) return (winner = "playerOne");
        else if (scoreB == 3) return (winner = "playerTwo");
      });
    });
    if (winner != "") winningScreen();
  };

  const winningScreen = () => {
    if (winner == "playerOne") {
      playerOne.setScore();
      modalText.innerText = "Player one won!";
    } else if (winner == "playerTwo") {
      playerTwo.setScore();
      modalText.innerText = "Player two won!";
    }

    modalEnd.showModal();
  };

  const clearBoard = () => {
    const boardFraments = document.querySelectorAll("#boardFragment");
    boardFraments.forEach((element) => {
      element.innerText = "";
    });
    for (let index = 0; index < 9; index++) {
      gameBoard.setBoard(index, "");
    }
    playerTurn = "playerOne";
    winner = "";
  };

  const drawBoard = () => {
    for (let start = 0; start < 9; start++) {
      const newBoard = document.createElement("div");
      const newBoardText = document.createElement("p");
      newBoard.classList.add("board");
      newBoard.setAttribute("id", start);
      newBoard.addEventListener("click", game.makeMove);
      newBoardText.setAttribute("id", "boardFragment");
      newBoard.appendChild(newBoardText);
      appContainer.appendChild(newBoard);
    }
  };
  return { playerOne, playerTwo, makeMove, clearBoard, drawBoard };
};

const game = gameObj();

window.onload = () => {
  btnX.addEventListener("click", () => {
    game.playerOne.setSign("X");
    game.playerTwo.setSign("O");
  });
  btnO.addEventListener("click", () => {
    game.playerOne.setSign("O");
    game.playerTwo.setSign("X");
  });
  btnAgain.addEventListener("click", () => {
    game.clearBoard();
    modalBegin.showModal();
  });
  game.drawBoard();
  // ask player one X or O
  modalBegin.showModal();
};
