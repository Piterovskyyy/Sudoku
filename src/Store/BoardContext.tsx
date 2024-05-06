import React from "react";
interface boardContextInterface {
  board: {
    value: number | string;
    isError: boolean;
    isDefault: boolean;
  }[][];
  setBoard: React.Dispatch<
    React.SetStateAction<
      | []
      | {
          value: number | string;
          isError: boolean;
          isDefault: boolean;
        }[][]
    >
  >;
}

const BoardContext = React.createContext<boardContextInterface>({
  board: [],
  setBoard: () => {},
});

export default BoardContext;
