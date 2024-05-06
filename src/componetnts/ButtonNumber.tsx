import React from "react";

const ButtonNumber: React.FC<{
  buttonValue: number;
  insertInCell: (value: number) => void;
}> = ({ buttonValue, insertInCell }) => {
  return (
    <button
      className="w-full bg-gray-200 rounded-md text-xl font-bold"
      onClick={() => {
        insertInCell(buttonValue);
      }}
    >
      {buttonValue}
    </button>
  );
};

export default ButtonNumber;
