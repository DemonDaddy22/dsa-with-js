/*
  Problem - Given a square matrix mat, return the sum of the matrix diagonals.

  Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
*/

const primaryDiagonalSum = (mat) => {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
  }
  return sum;
};

const secondaryDiagonalSum = (mat) => {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][mat.length - i - 1];
  }
  if (mat.length % 2 !== 0) {
    const mid = Math.floor(mat.length / 2);
    sum -= mat[mid][mid];
  }
  return sum;
};

const diagonalSum = (mat) => {
  return primaryDiagonalSum(mat) + secondaryDiagonalSum(mat);
};