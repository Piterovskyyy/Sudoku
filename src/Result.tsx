import React from "react";

const Result: React.FC<{
  result: "WON" | "LOST";
  time: string;
  lives: number;
}> = ({ result, time, lives }) => {
  return (
    <div className="m-4 w-full md:w-1/2 flex flex-col justify-center items-center space-y-2 rounded-lg p-4 bg-slate-200 shadow-lg shadow-gray-300">
      <h2 className="text-2xl font-bold">Game Over</h2>
      <div className="flex flex-col justify-center items-center">
        <span className="text-xl">You {result}</span>
        <span className="text-md">lives: {lives}</span>
        <span className="text-md">time: {time}</span>
      </div>
    </div>
  );
};

export default Result;
