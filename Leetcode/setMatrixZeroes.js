/*
  Problem - Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

  You must do it in place.
*/

const markZeroes = (row, column, matrix) => {
  for (let j = 0; j < matrix[row].length; j++) {
    if (matrix[row][j] !== 0) {
      matrix[row][j] = 0;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][column] !== 0) {
      matrix[i][column] = 0;
    }
  }
};

const setZeroes = (matrix) => {
  const initialZeros = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        initialZeros.push([i, j]);
      }
    }
  }

  for (let [row, column] of initialZeros) {
    markZeroes(row, column, matrix);
  }
};