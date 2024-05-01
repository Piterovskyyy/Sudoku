import React from "react";

const SelectLevel: React.FC<{
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setLevel: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setGameStarted, setLevel }) => {
  const selectLevel = (level: string) => {
    setLevel(level);
    setGameStarted(true);
  };

  return (
    <div className="flex flex-col space-y-4 justify-center items-center">
      <h2>Select Level:</h2>
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => selectLevel("Beginner")}
          className="w-48 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Beginner
        </button>
        <button
          onClick={() => selectLevel("Easy")}
          className="w-48 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
        >
          Easy
        </button>
        <button
          onClick={() => selectLevel("Medium")}
          className="w-48 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
        >
          Medium
        </button>
        <button
          onClick={() => selectLevel("Hard")}
          className="w-48 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
        >
          Hard
        </button>
        <button
          onClick={() => selectLevel("Expert")}
          className="w-48 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
        >
          Expert
        </button>
      </div>
    </div>
  );
};
export default SelectLevel;
