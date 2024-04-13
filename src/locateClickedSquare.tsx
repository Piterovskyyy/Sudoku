const locateClickedSquare: (clickedCell: {
  row: number | null;
  col: number | null;
  value: number | null;
}) => {
  rowStart: number;
  rowEnd: number;
  colStart: number;
  colEnd: number;
} = (clickedCell) => {
  return {
    rowStart:
      clickedCell.row != null
        ? clickedCell.row < 3
          ? 0
          : clickedCell.row < 6
          ? 3
          : 6
        : 0,
    rowEnd:
      clickedCell.row != null
        ? clickedCell.row < 3
          ? 3
          : clickedCell.row < 6
          ? 6
          : 9
        : 0,
    colStart:
      clickedCell.col != null
        ? clickedCell.col < 3
          ? 0
          : clickedCell.col < 6
          ? 3
          : 6
        : 0,
    colEnd:
      clickedCell.col != null
        ? clickedCell.col < 3
          ? 3
          : clickedCell.col < 6
          ? 6
          : 9
        : 0,
  };
};

export default locateClickedSquare;
