import React from "react";
import { useEffect, useState } from "react";
const Timer: React.FC<{
  isGameOver: boolean;
  setGameTime: React.Dispatch<React.SetStateAction<string>>;
}> = ({ isGameOver, setGameTime }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setTime(time + 1), 10);
    if (isGameOver) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [time, isGameOver]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);

  if (isGameOver) {
    const time = `${hours ? `${hours} : ` : ""}${minutes
      .toString()
      .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
    setGameTime(time);
  }

  return (
    <div className="text-xl text-gray-600 font-sans flex flex-row">
      {hours ? hours : ""}
      {minutes.toString().padStart(2, "0")} :{" "}
      {seconds.toString().padStart(2, "0")}
    </div>
  );
};

export default Timer;
