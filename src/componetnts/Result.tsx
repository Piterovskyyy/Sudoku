import React, { useContext } from "react";
import BoardContext from "../Store/BoardContext";

const Result: React.FC<{
  result: "WON" | "LOST";
  time: string;
  lives: number;
}> = ({ result, time, lives }) => {
  const completedBoard = useContext(BoardContext);
  console.log(completedBoard.board);

  return (
    <div className="m-4 w-full md:w-1/2 flex flex-col justify-center items-center space-y-2 rounded-lg p-4 bg-slate-200 shadow-lg shadow-gray-300">
      <h2 className="text-2xl font-bold">Game Over</h2>
      <div className="flex flex-col justify-center items-center">
        <span className="text-xl">You {result}</span>
        <span className="text-md">lives: {lives}</span>
        <span className="text-md">time: {time}</span>
      </div>
      <h3 className="text-xl font-bold">example of solved board</h3>
      <div className="grid grid-cols-9 justify-items-center border-2 border-black w-full h-[400px]">
        {completedBoard.board.map((row, rowIndex) => {
          return row.map((cell, colIndex) => {
            return (
              <div
                className={`cell border-gray-300 flex justify-center items-center w-full border h-full ${
                  colIndex === 2 || colIndex === 5
                    ? "border-r-2 border-r-black "
                    : ""
                } ${
                  rowIndex === 2 || rowIndex === 5
                    ? "border-b-2  border-b-black"
                    : ""
                }`}
              >
                <span>{cell.value}</span>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default Result;
