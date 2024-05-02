import Game from "./Game";
import { useState } from "react";
import SelectLevel from "./SelectLevel";
import Result from "./Result";
function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [level, setLevel] = useState<string>("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameResult, setGameResult] = useState<React.ReactNode | null>(null);

  const gameOver = (result: "WON" | "LOST", time: string, lives: number) => {
    setGameResult(<Result result={result} time={time} lives={lives} />);
    setIsGameOver(true);
    setGameStarted(false);
  };

  return (
    <>
      <div className="w-screen min-h-screen md:p-4 flex justify-center items-center md:block">
        <div className="w-full md:w-1/2 mx-auto bg-gray-100 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold text-center mb-4">Sudoku</h1>
          {gameStarted && !isGameOver && (
            <Game
              level={level}
              setGameStarted={setGameStarted}
              gameOver={gameOver}
            />
          )}
          {!gameStarted && !isGameOver && (
            <SelectLevel setGameStarted={setGameStarted} setLevel={setLevel} />
          )}
          {isGameOver && gameResult}
        </div>
      </div>
    </>
  );
}

export default App;
