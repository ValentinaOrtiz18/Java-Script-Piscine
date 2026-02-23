// JS Piscine Crossword Solver Valentina Ortiz
function crosswordSolver(crossword, words) {
  // Input Validation: checks if the crossword is not a string, if words is not an array, or if any element in words is not a string.
  if (
    typeof crossword !== 'string' ||
    !Array.isArray(words) ||
    words.some((word) => typeof word !== 'string')
  ) {
    console.log('Error not valid input');
    return 'Error not valid input';
  }
  // Check if crossword is valid via regular expressions to ensure that the crossword structure is valid.
  if (!/^[.\n012]+$/.test(crossword)) {
    console.log('Error not valid crossword');
    return 'Error not valid crossword';
  }
  // Parse the crossword into a matrix of numbers
  // This code takes the crossword string and transforms it into a 2D array (puzzleNumbers).
  // Each cell in the array contains either a number (starting point) or "-1" for an empty cell.
  // The code splits the string by lines and then by characters, converting '.' to -1 and other characters to integers.
  const puzzleNumbers = crossword
    .trim()
    .split('\n')
    .map((row) =>
      row.split('').map((cell) => (cell === '.' ? -1 : parseInt(cell)))
    );
  // This section checks various constraints
  const wordsBeginnings = puzzleNumbers
    .map((row, rowIndex) =>
      row.map((cell, colIndex) => ({ row: rowIndex, col: colIndex }))
    )
    .flat()
    .filter((cell) => puzzleNumbers[cell.row][cell.col] > 0);
  if (
    wordsBeginnings.reduce(
      (acc, cell) => acc + puzzleNumbers[cell.row][cell.col],
      0
    ) !== words.length
  ) {
    console.log('Error not enough words');
    return 'Error not enough words';
  }
  // this section, calculates puzzleWidth as the length of the first row in puzzleNumbers; it uses puzzleNumbers.some(...) to check if there is any row whose length is not equal to puzzleWidth.
  const puzzleWidth = puzzleNumbers[0].length;
  if (puzzleNumbers.some((row) => row.length !== puzzleWidth)) {
    console.log('Error width not valid');
    return 'Error width not valid';
  }
  // checks if the words are unique. If there are duplicates, it prints an error message and returns an error string.
  if (new Set(words).size !== words.length) {
    console.log('Error words not unique');
    return 'Error words not unique';
  }
  // Sort the array of words by length in descending order by the custom comparator function (a, b) => b.length - a.length. This ensures that the longest words are placed first.
  words.sort((a, b) => b.length - a.length);
  const puzzleWords = puzzleNumbers.map((row) =>
    row.map((cell) => (cell === -1 ? '.' : ''))
  );
  const canAddWord = (word, row, col, direction) => {
    var aw;
    if (
      direction === 'horizontal' &&
      col + word.length > puzzleNumbers[row].length
    ) {
      return false;
    }
    if (direction === 'vertical' && row + word.length > puzzleNumbers.length) {
      return false;
    }
    for (let i = 0; i < word.length; i++) {
      if (puzzleWords[row][col] !== '') {
        if (puzzleWords[row][col] !== word[i]) {
          return false;
        }
      }
      direction === 'horizontal' ? col++ : row++;
    }
    const afterWordCell =
      (aw = puzzleNumbers[row]) === null || aw === void 0 ? void 0 : aw[col];
    return afterWordCell === -1 || afterWordCell === undefined;
  };
  // Recursive function to add words to the puzzle
  // this section defines the addWords function, which is a recursive function responsible for attempting to add words to the crossword puzzle.
  // It iterates through each word and starting point, checking if the word can be added either horizontally or vertically.
  // If the word can be added, it adds the word to the puzzle and calls itself recursively with the remaining words. If the word cannot be added, it backtracks and tries the next word.
  const addWords = (words) => {
    if (words.length === 0) {
      return true;
    }
    for (const word of words) {
      for (const cell of wordsBeginnings) {
        if (puzzleNumbers[cell.row][cell.col] === 0) continue;
        if (canAddWord(word, cell.row, cell.col, 'horizontal')) {
          const backupRow = puzzleWords[cell.row].slice();
          for (let j = 0; j < word.length; j++) {
            puzzleWords[cell.row][cell.col + j] = word[j];
          }
          puzzleNumbers[cell.row][cell.col]--;
          if (addWords(words.filter((w) => w !== word))) {
            return true;
          }
          puzzleWords[cell.row][cell.col]++;
          puzzleWords[cell.row] = backupRow;
        }
        if (canAddWord(word, cell.row, cell.col, 'vertical')) {
          const backupCol = puzzleWords.map((row) => row[cell.col]);
          for (let j = 0; j < word.length; j++) {
            puzzleWords[cell.row + j][cell.col] = word[j];
          }
          puzzleNumbers[cell.row][cell.col]--;
          if (addWords(words.filter((w) => w !== word))) {
            return true;
          }
          puzzleWords[cell.row][cell.col]++;
          puzzleWords.map((row, index) => (row[cell.col] = backupCol[index]));
        }
      }
    }
    return false;
  };
  if (!addWords(words)) {
    console.log('Error multiple solution');
    return 'Error multiple solution';
  }
  const result = puzzleWords.map((row) => row.join('')).join('\n');
  console.log(result);
  return result;
}
// Test cases
// The final solved crossword is printed to the console.
// Test cases are provided in a separate file (testcases.js), and the solver is applied to each test case.
const testCases = require('./testcases');
testCases.forEach(testCase => {
    console.log('Running test case:', testCase);
    crosswordSolver(testCase.puzzle, testCase.words);
});
// Example
// const emptyPuzzle = `2001
// 0..0
// 1000
// 0..0`;
// const words = ['casa', 'alan', 'ciao', 'anta'];
// crosswordSolver(emptyPuzzle, words);