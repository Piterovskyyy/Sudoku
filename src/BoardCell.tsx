import React, { Dispatch, SetStateAction } from "react";

const BoardCell: React.FC<{
  cellValue: string | number;
  rowIndex: number;
  colIndex: number;
  clickedCell: { row: number | null; col: number | null };
  setClickedCell: Dispatch<
    SetStateAction<{ row: number | null; col: number | null }>
  >;
}> = ({ cellValue, rowIndex, colIndex, setClickedCell, clickedCell }) => {
  return (
    <div
      className={`cell border-gray-300 flex justify-center items-center w-full border h-full ${
        colIndex === 2 || colIndex === 5 ? "border-r-2 border-r-black" : ""
      } ${
        rowIndex === 2 || rowIndex === 5 ? "border-b-2  border-b-black" : ""
      } ${cellValue ? "bg-gray-200" : "bg-white"}  ${
        clickedCell.row == rowIndex && clickedCell.col == colIndex
          ? "bg-blue-300"
          : ""
      } ${clickedCell.row == rowIndex ? "bg-blue-100" : ""} ${
        clickedCell.col == colIndex ? "bg-blue-100" : ""
      } `}
      onClick={() => {
        setClickedCell({ row: rowIndex, col: colIndex });
      }}
    >
      {cellValue || ""}
    </div>
  );
};
export default BoardCell;
