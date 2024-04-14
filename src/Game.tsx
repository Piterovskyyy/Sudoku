import { useEffect, useState } from "react";
import Board from "./Board";
import Lives from "./Lives";
const Game = () => {
  const [lives, setLives] = useState(3);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setTime(time + 1), 10);

    return () => clearInterval(intervalId);
  }, [time]);
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  return (
    <>
      <h1 className="text-xl font-bold text-center mb-4">Sudoku</h1>
      <div className="w-full md:w-1/2 mx-auto bg-white p-2 shadow-lg rounded-lg flex flex-col items-center justify-center">
        <div className="flex w-full justify-between items-center p-2 md:pr-8">
          <div className="text-xl text-gray-600 font-sans flex flex-row">
            {hours ? hours : ""}
            {minutes.toString().padStart(2, "0")} :{" "}
            {seconds.toString().padStart(2, "0")}
          </div>

          <Lives lives={lives} />
        </div>
        <div className="w-full p-2 rounded-lg flex flex-col md:flex-row items-center justify-center">
          <Board setLives={setLives} />
        </div>
      </div>
    </>
  );
};
export default Game;
