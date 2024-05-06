import { useState } from "react";
import Board from "./Board";
import Lives from "./Lives";
import Timer from "./Timer";
const Game: React.FC<{
  level: string;
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  gameOver: (result: "WON" | "LOST", time: string, lives: number) => void;
}> = ({ level, setGameStarted, gameOver }) => {
  const [lives, setLives] = useState(3);
  const [time, setTime] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  if (isGameOver && time != "") {
    if (lives == 0) {
      gameOver("LOST", time, lives);
    } else {
      gameOver("WON", time, lives);
    }
  }

  return (
    <>
      <div className="flex w-full justify-between items-center p-2 md:pr-8 relative">
        <Timer isGameOver={isGameOver} setGameTime={setTime} />
        <button
          onClick={() => setGameStarted(false)}
          className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:w-48 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          New Game
        </button>
        <Lives lives={lives} />
      </div>
      <div className="w-full p-2 rounded-lg flex flex-col md:flex-row items-center justify-center">
        <Board
          setLives={setLives}
          level={level}
          setIsGameOver={setIsGameOver}
        />
      </div>
    </>
  );
};
export default Game;
