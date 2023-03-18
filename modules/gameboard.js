export const gameboard = () => {
  const board = new Array(9);

  const setBoard = (index, sign) => (board[index] = sign);
  const getBoard = (index) => board[index];

  return { setBoard, getBoard };
};
