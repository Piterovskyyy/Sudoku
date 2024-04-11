import { useState } from "react";
import BoardCell from "./BoardCell";
import ButtonNumber from "./ButtonNumber";
const Board = () => {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [sudokuBoard, setSudokuBoard] = useState([
    [5, 3, "", "", 7, "", "", "", ""],
    [6, "", "", 1, 9, 5, "", "", ""],
    ["", 9, 8, "", "", "", "", 6, ""],
    [8, "", "", "", 6, "", "", "", 3],
    [4, "", "", 8, "", 3, "", "", 1],
    [7, "", "", "", 2, "", "", "", 6],
    ["", 6, "", "", "", "", 2, 8, ""],
    ["", "", "", 4, 1, 9, "", "", 5],
    ["", "", "", "", 8, "", "", 7, 9],
  ]);
  const [clickedCell, setClickedCell] = useState<{
    row: number | null;
    col: number | null;
  }>({ row: null, col: null });

  const insertInCell = (value: number) => {
    setSudokuBoard((prevBoard) => {
      if (clickedCell.col != null && clickedCell.row != null) {
        const updatedBoard = [...prevBoard];
        updatedBoard[clickedCell.row] = [...updatedBoard[clickedCell.row]];
        updatedBoard[clickedCell.row][clickedCell.col] = value;
        return updatedBoard;
      }
      return prevBoard;
    });
  };

  return (
    <>
      <h1 className="text-xl font-bold text-center mb-4">Sudoku</h1>
      <div className="w-full md:w-1/2 mx-auto bg-white p-2 shadow-lg rounded-lg flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-9 justify-items-center border-2 border-black w-full md:w-96 h-96">
          {sudokuBoard.map((row, rowIndex) =>
            // Mapujemy każdy wiersz w siatce sudoku
            row.map((cellValue, colIndex) => (
              <BoardCell
                key={`${rowIndex}-${colIndex}`}
                cellValue={cellValue}
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
