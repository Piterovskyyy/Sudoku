class Sudoku {
  N: number;
  K: number;
  SRN: number;
  board: SudokuCell[][];

  constructor(K: number) {
    this.N = 9;
    this.K = K;

    this.SRN = Math.floor(Math.sqrt(this.N));

    this.board = Array.from({ length: this.N }, () =>
      Array.from({ length: this.N }, () => {
        return {
          value: "",
          isDefault: false,
          isError: false,
        };
      })
    );
  }

  fillValues(): SudokuCell[][] {
    this.fillDiagonal();

    this.fillRemaining(0, this.SRN);

    this.removeKDigits();

    return this.board;
  }

  fillDiagonal(): void {
    for (let i = 0; i < this.N; i += this.SRN) {
      this.fillBox(i, i);
    }
  }

  unUsedInBox(rowStart: number, colStart: number, num: number): boolean {
    for (let i = 0; i < this.SRN; i++) {
      for (let j = 0; j < this.SRN; j++) {
        if (this.board[rowStart + i][colStart + j].value === num) {
          return false;
        }
      }
    }
    return true;
  }

  fillBox(row: number, col: number): void {
    let num = 0;
    for (let i = 0; i < this.SRN; i++) {
      for (let j = 0; j < this.SRN; j++) {
        // eslint-disable-next-line no-constant-condition
        while (true) {
          num = this.randomGenerator(this.N);
          if (this.unUsedInBox(row, col, num)) {
            break;
          }
        }
        this.board[row + i][col + j].value = num;
        this.board[row + i][col + j].isDefault = true;
      }
    }
  }

  randomGenerator(num: number): number {
    return Math.floor(Math.random() * num + 1);
  }

  checkIfSafe(i: number, j: number, num: number): boolean {
    return (
      this.unUsedInRow(i, num) &&
      this.unUsedInCol(j, num) &&
      this.unUsedInBox(i - (i % this.SRN), j - (j % this.SRN), num)
    );
  }

  unUsedInRow(i: number, num: number): boolean {
    for (let j = 0; j < this.N; j++) {
      if (this.board[i][j].value === num) {
        return false;
      }
    }
    return true;
  }

  unUsedInCol(j: number, num: number): boolean {
    for (let i = 0; i < this.N; i++) {
      if (this.board[i][j].value === num) {
        return false;
      }
    }
    return true;
  }

  fillRemaining(i: number, j: number): boolean {
    if (i === this.N - 1 && j === this.N) {
      return true;
    }

    if (j === this.N) {
      i += 1;
      j = 0;
    }

    if (this.board[i][j].value !== "") {
      return this.fillRemaining(i, j + 1);
    }

    for (let num = 1; num <= this.N; num++) {
      if (this.checkIfSafe(i, j, num)) {
        this.board[i][j].value = num;
        this.board[i][j].isDefault = true;
        if (this.fillRemaining(i, j + 1)) {
          return true;
        }
        this.board[i][j].value = "";
        this.board[i][j].isDefault = false;
      }
    }

    return false;
  }

  removeKDigits(): void {
    let count = this.K;

    while (count !== 0) {
      const i = Math.floor(Math.random() * this.N);
      const j = Math.floor(Math.random() * this.N);
      if (this.board[i][j].value !== "") {
        count--;
        this.board[i][j].value = "";
        this.board[i][j].isDefault = false;
      }
    }
  }
}

interface SudokuCell {
  value: number | string;
  isDefault: boolean;
  isError: boolean;
}

export default Sudoku;
