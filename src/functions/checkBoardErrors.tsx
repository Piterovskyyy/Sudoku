import locateClickedSquare from "./locateClickedSquare";

type boardType = {
  value: number | string;
  isError: boolean;
  isDefault: boolean;
}[][];

const checkBoardErrors: (
  board: boardType,
  clickedCell: {
    row: number | null;
    col: number | null;
    value: number | null;
  },
  val: number,
  setError: React.Dispatch<
    React.SetStateAction<{
      isError: boolean;
      errorCellRow: number | null;
      errorCellCol: number | null;
    }>
  >
) => boardType = (board, clickedCell, val, setError) => {
  const { row, col } = clickedCell;
  if (row == null || col == null) {
    return board;
  }
  const clickedSquare = locateClickedSquare(clickedCell);
  //clear firstly all errors
  for (let i = 0; i < 9; i++) {
    board[row][i].isError = false;
    board[i][col].isError = false;
  }
  for (let i = clickedSquare.rowStart; i < clickedSquare.rowEnd; i++) {
    for (let j = clickedSquare.colStart; j < clickedSquare.colEnd; j++) {
      board[i][j].isError = false;
    }
  }

  let isError = false;
  for (let i = 0; i < 9; i++) {
    if (board[row][i].value === val) {
      if (!(i === col)) {
        isError = true;
        board[row][i].isError = true;
      }
    }

    if (board[i][col].value === val) {
      if (!(i === row)) {
        isError = true;
        board[i][col].isError = true;
      }
    }
  }

  for (let i = clickedSquare.rowStart; i < clickedSquare.rowEnd; i++) {
    for (let j = clickedSquare.colStart; j < clickedSquare.colEnd; j++) {
      if (i === row && j === col) {
        continue;
      }
      if (board[i][j].value === val) {
        isError = true;
        board[i][j].isError = true;
      }
    }
  }

  if (isError) {
    board[row][col].isError = true;
    setError({ isError: true, errorCellRow: row, errorCellCol: col });
  } else {
    setError({ isError: false, errorCellRow: null, errorCellCol: null });
  }
  return board;
};

export default checkBoardErrors;
