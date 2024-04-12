class Sudoku {
  // Constructor
  constructor(K) {
    this.N = 9;
    this.K = K;

    // Compute square root of N
    const SRNd = Math.sqrt(this.N);
    this.SRN = Math.floor(SRNd);

    // Initialize all entries as false to indicate
    // that there are no edges initially
    this.board = Array.from(
      {
        length: this.N,
      },
      () =>
        Array.from(
          {
            length: this.N,
          },
          () => {
            return {
              value: "",
              isDefault: false,
              isError: false,
            };
          }
        )
    );
  }

  // Sudoku Generator
  fillValues() {
    // Fill the diagonal of SRN x SRN matrices
    this.fillDiagonal();

    // Fill remaining blocks
    this.fillRemaining(0, this.SRN);

    // Remove Randomly K digits to make game
    this.removeKDigits();

    return this.board;
  }

  // Fill the diagonal SRN number of SRN x SRN matrices
  fillDiagonal() {
    for (let i = 0; i < this.N; i += this.SRN) {
      // for diagonal box, start coordinates->i==j
      this.fillBox(i, i);
    }
  }

  // Returns false if given 3 x 3 block contains num.
  unUsedInBox(rowStart, colStart, num) {
    for (let i = 0; i < this.SRN; i++) {
      for (let j = 0; j < this.SRN; j++) {
        if (this.board[rowStart + i][colStart + j].value === num) {
          return false;
        }
      }
    }
    return true;
  }

  // Fill a 3 x 3 matrix.
  fillBox(row, col) {
    let num = 0;
    for (let i = 0; i < this.SRN; i++) {
      for (let j = 0; j < this.SRN; j++) {
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

  // Random generator
  randomGenerator(num) {
    return Math.floor(Math.random() * num + 1);
  }

  // Check if safe to put in cell
  checkIfSafe(i, j, num) {
    return (
      this.unUsedInRow(i, num) &&
      this.unUsedInCol(j, num) &&
      this.unUsedInBox(i - (i % this.SRN), j - (j % this.SRN), num)
    );
  }

  // check in the row for existence
  unUsedInRow(i, num) {
    for (let j = 0; j < this.N; j++) {
      if (this.board[i][j].value === num) {
        return false;
      }
    }
    return true;
  }

  // check in the row for existence
  unUsedInCol(j, num) {
    for (let i = 0; i < this.N; i++) {
      if (this.board[i][j].value === num) {
        return false;
      }
    }
    return true;
  }

  // A recursive function to fill remaining
  // matrix
  fillRemaining(i, j) {
    // Check if we have reached the end of the matrix
    if (i === this.N - 1 && j === this.N) {
      return true;
    }

    // Move to the next row if we have reached the end of the current row
    if (j === this.N) {
      i += 1;
      j = 0;
    }

    // Skip cells that are already filled
    if (this.board[i][j].value !== "") {
      return this.fillRemaining(i, j + 1);
    }

    // Try filling the current cell with a valid value
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

    // No valid value was found, so backtrack
    return false;
  }

  // Print sudoku

  // Remove the K no. of digits to
  // complete game
  removeKDigits() {
    let count = this.K;

    while (count !== 0) {
      // extract coordinates i and j
      let i = Math.floor(Math.random() * this.N);
      let j = Math.floor(Math.random() * this.N);
      if (this.board[i][j].value !== 0) {
        count--;
        this.board[i][j].value = "";
        this.board[i][j].isDefault = false;
      }
    }

    return;
  }
}

// Driver code
let K = 80;
let sudoku = new Sudoku(K);
const board = sudoku.fillValues();
export default board;
