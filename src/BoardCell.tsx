import React, { Dispatch, SetStateAction } from "react";

const BoardCell: React.FC<{
  cell: { value: string | number; isDefault: boolean; isError: boolean };
  rowIndex: number;
  colIndex: number;
  clickedCell: { row: number | null; col: number | null; value: number | null };
  setClickedCell: Dispatch<
    SetStateAction<{
      row: number | null;
      col: number | null;
      value: number | null;
    }>
  >;
}> = ({ cell, rowIndex, colIndex, setClickedCell, clickedCell }) => {
  const clickedSquare = {
    rowStart:
      clickedCell.row != null
        ? clickedCell.row < 3
          ? 0
          : clickedCell.row < 6
          ? 3
          : 6
        : 0,
    rowEnd:
      clickedCell.row != null
        ? clickedCell.row < 3
          ? 3
          : clickedCell.row < 6
          ? 6
          : 9
        : 0,
    colStart:
      clickedCell.col != null
        ? clickedCell.col < 3
          ? 0
          : clickedCell.col < 6
          ? 3
          : 6
        : 0,
    colEnd:
      clickedCell.col != null
        ? clickedCell.col < 3
          ? 3
          : clickedCell.col < 6
          ? 6
          : 9
        : 0,
  };

  const cellClasses =
    clickedCell.row == rowIndex && clickedCell.col == colIndex
      ? "bg-blue-300"
      : clickedCell.row == rowIndex ||
        clickedCell.col == colIndex ||
        (clickedCell.value == +cell.value && clickedCell.value != 0) ||
        (rowIndex >= clickedSquare.rowStart &&
          rowIndex < clickedSquare.rowEnd &&
          colIndex >= clickedSquare.colStart &&
          colIndex < clickedSquare.colEnd)
      ? "bg-blue-100"
      : cell.isDefault
      ? "bg-gray-200"
      : "bg-white";

  return (
    <div
      className={`cell border-gray-300 flex justify-center items-center w-full border h-full ${
        colIndex === 2 || colIndex === 5 ? "border-r-2 border-r-black" : ""
      } ${
        rowIndex === 2 || rowIndex === 5 ? "border-b-2  border-b-black" : ""
      } ${cellClasses} `}
      onClick={() => {
        setClickedCell({ row: rowIndex, col: colIndex, value: +cell.value });
      }}
    >
      <span className={`${cell.value === "" ? "opacity-0" : ""}`}>
        {cell.value || 0}
      </span>
    </div>
  );
};
export default BoardCell;
