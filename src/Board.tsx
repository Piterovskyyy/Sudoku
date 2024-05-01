import { useEffect, useState } from "react";
import BoardCell from "./BoardCell";
import ButtonNumber from "./ButtonNumber";
import Sudoku from "./generateBoard";
import checkBoardErrors from "./checkBoardErrors";
import LevelsEnum from "./Levels";

const Board: React.FC<{
  setLives: React.Dispatch<React.SetStateAction<number>>;
  level: string;
}> = ({ setLives, level }) => {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [sudokuBoard, setSudokuBoard] = useState<
    { value: number | string; isError: boolean; isDefault: boolean }[][]
  >([]);
  const [error, setError] = useState<{
    isError: boolean;
    errorCellRow: number | null;
    errorCellCol: number | null;
  }>({
    isError: false,
    errorCellRow: null,
    errorCellCol: null,
  });
  const [clickedCell, setClickedCell] = useState<{
    row: number | null;
    col: number | null;
    value: number | null;
  }>({ row: null, col: null, value: null });

  useEffect(() => {
    const sudoku = new Sudoku(LevelsEnum[level as keyof typeof LevelsEnum]);
    const board = sudoku.fillValues();
    setSudokuBoard(board);
  }, [level]);

  useEffect(() => {
    if (error.isError) {
      setLives((prevLives) => {
        const lives = prevLives - 1;
        if (lives === 0) {
          // setGameOver(true);
        }

        return lives;
      });
    }
  }, [error, setLives]);

  const insertInCell = (value: number) => {
    setSudokuBoard((prevBoard) => {
      if (
        clickedCell.col != null &&
        clickedCell.row != null &&
        !prevBoard[clickedCell.row][clickedCell.col].isDefault &&
        (!error.isError ||
          (error.errorCellRow == clickedCell.row &&
            error.errorCellCol == clickedCell.col))
      ) {
        const updatedBoard = [...prevBoard];
        updatedBoard[clickedCell.row][clickedCell.col].value = value;
        const validatedBoard = checkBoardErrors(
          updatedBoard,
          clickedCell,
          value,
          setError
        );
        setClickedCell((prevClickedCell) => {
          return { ...prevClickedCell, value: value };
        });
        return validatedBoard;
      }
      return prevBoard;
    });
  };

  const clearCell = () => {
    setSudokuBoard((prevBoard) => {
      if (
        clickedCell.col != null &&
        clickedCell.row != null &&
        !prevBoard[clickedCell.row][clickedCell.col].isDefault &&
        (!error.isError ||
          (error.errorCellRow == clickedCell.row &&
            error.errorCellCol == clickedCell.col))
      ) {
        const updatedBoard = [...prevBoard];
        updatedBoard[clickedCell.row][clickedCell.col].value = "";
        const validatedBoard = checkBoardErrors(
          updatedBoard,
          clickedCell,
          0,
          setError
        );
        setClickedCell((prevClickedCell) => {
          return { ...prevClickedCell, value: 0 };
        });
        return validatedBoard;
      }
      return prevBoard;
    });
  };

  return (
    <>
      <div className="grid grid-cols-9 justify-items-center border-2 border-black w-full md:w-1/2 h-[400px] cursor-pointer">
        {sudokuBoard.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <BoardCell
              key={`${rowIndex}-${colIndex}`}
              cell={cell}
              rowIndex={rowIndex}
              colIndex={colIndex}
              clickedCell={clickedCell}
              setClickedCell={setClickedCell}
              errorCell={error}
            />
          ))
        )}
      </div>
      <div className="grid grid-cols-3 gap-2 m-4 justify-items-center w-full md:w-1/2 h-[400px]">
        {buttons.map((button) => (
          <ButtonNumber
            key={button}
            buttonValue={button}
            insertInCell={insertInCell}
          />
        ))}
        <button
          className="col-span-3 w-full bg-gray-200 rounded-md text-xl font-bold"
          onClick={clearCell}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default Board;
