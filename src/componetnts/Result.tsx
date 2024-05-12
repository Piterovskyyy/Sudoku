import React, { useContext } from "react";
import BoardContext from "../Store/BoardContext";
import Lives from "./Lives";

const Result: React.FC<{
  result: "WON" | "LOST";
  time: string;
  lives: number;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ result, time, lives, setIsGameOver }) => {
  const completedBoard = useContext(BoardContext);
  console.log(completedBoard.board);

  return (
    <div className="m-4 w-full md:w-1/2 flex flex-col justify-center items-center space-y-2 rounded-lg p-4 bg-slate-200 shadow-lg shadow-gray-300">
      <h2 className="text-2xl font-bold">Game Over</h2>
      <div className="flex flex-col justify-center items-center w-full">
        <span className="text-xl">You {result}</span>
        <div className="flex flex-row space-x-2 w-full text-md items-center justify-center">
          <div>lives:</div> <Lives lives={lives} />
        </div>
        <span className="text-md">time: {time}</span>
      </div>
      {}
      <h3 className="text-xl font-bold">
        {result == "WON" ? "your board" : "example of solved board"}
      </h3>
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
      <button
        onClick={() => {
          setIsGameOver(false);
        }}
        className="w-48 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Back to menu
      </button>
    </div>
  );
};

export default Result;
