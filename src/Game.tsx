import { useEffect, useState } from "react";
import Board from "./Board";
import Lives from "./Lives";
const Game: React.FC<{
  level: string;
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ level, setGameStarted }) => {
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
      <div className="flex w-full justify-between items-center p-2 md:pr-8 relative">
        <div className="text-xl text-gray-600 font-sans flex flex-row">
          {hours ? hours : ""}
          {minutes.toString().padStart(2, "0")} :{" "}
          {seconds.toString().padStart(2, "0")}
        </div>
        <button
          onClick={() => setGameStarted(false)}
          className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:w-48 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          New Game
        </button>
        <Lives lives={lives} />
      </div>
      <div className="w-full p-2 rounded-lg flex flex-col md:flex-row items-center justify-center">
        <Board setLives={setLives} level={level} />
      </div>
    </>
  );
};
export default Game;
