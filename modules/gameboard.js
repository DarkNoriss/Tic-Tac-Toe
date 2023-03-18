export const gameboard = () => {
  const board = new Array(9);

  const getBoard = () => board;
  const setBoard = (index, sign) => (board[index] = sign);

  return { getBoard, setBoard };
};
