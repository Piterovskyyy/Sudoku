import { useState } from "react";
import BoardCell from "./BoardCell";
import ButtonNumber from "./ButtonNumber";
import board from "./generateBoard";
const Board = () => {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [sudokuBoard, setSudokuBoard] =
    useState<
      { value: number | string; isError: boolean; isDefault: boolean }[][]
    >(board);
  const [clickedCell, setClickedCell] = useState<{
    row: number | null;
    col: number | null;
    value: number | null;
  }>({ row: null, col: null, value: null });

  const insertInCell = (value: number) => {
    setSudokuBoard((prevBoard) => {
      if (
        clickedCell.col != null &&
        clickedCell.row != null &&
        !prevBoard[clickedCell.row][clickedCell.col].isDefault
      ) {
        const updatedBoard = [...prevBoard];
        updatedBoard[clickedCell.row] = [...updatedBoard[clickedCell.row]];
        updatedBoard[clickedCell.row][clickedCell.col].value = value;
        setClickedCell((prevClickedCell) => {
          return { ...prevClickedCell, value: value };
        });
        return updatedBoard;
      }
      return prevBoard;
    });
  };

  return (
    <>
      <h1 className="text-xl font-bold text-center mb-4">Sudoku</h1>
      <div className="w-full md:w-1/2 mx-auto bg-white p-2 shadow-lg rounded-lg flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-9 justify-items-center border-2 border-black w-full md:w-[400px] h-[400px]">
          {sudokuBoard.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <BoardCell
                key={`${rowIndex}-${colIndex}`}
                cell={cell}
                rowIndex={rowIndex}
                colIndex={colIndex}
                clickedCell={clickedCell}
                setClickedCell={setClickedCell}
              />
            ))
          )}
        </div>
        <div className="grid grid-cols-3 gap-2 p-2 justify-items-center w-full md:w-96 h-96">
          {buttons.map((button) => (
            <ButtonNumber
              key={button}
              buttonValue={button}
              insertInCell={insertInCell}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Board;
