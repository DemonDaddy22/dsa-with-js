/*
  Given an m x n matrix, return all elements of the matrix in spiral order.
*/

/*

1 2 3
4 5 6
7 8 9

1 2 3 6 9 8 7 4 5

i = 0, j = 0-2 -> i = 0, j = 0-2
i = 1-2, j = 2 -> i = 0-2, j = 2
i = 2, j = 1-0 -> i = 2, j = 2-0
i = 1, j = 0 -> i = 2-0, j = 0
i = 1, j = 1 -> i = 1-1, j = 1-1

i -> low: 0, high: mat.length - 1
j -> low: 0, high: mat[0].length - 1

After each spiral, increment low by 1, decrement high by 1

*/

const spiralOrder = (matrix) => {
  const result = [];
  const visited = Array.from(matrix).map((_, index) => matrix[index].map((_) => false));

  let rowLow = 0, colLow = 0, rowHigh = matrix.length - 1, colHigh = matrix[0].length - 1;

  while (rowLow <= rowHigh && colLow <= colHigh) {
    // left -> right
    for (let j = colLow; j <= colHigh; j++) {
      if (!visited[rowLow][j]) {
        result.push(matrix[rowLow][j]);
        visited[rowLow][j] = true;
      }
    }

    // top -> bottom
    for (let i = rowLow; i <= rowHigh; i++) {
      if (!visited[i][colHigh]) {
        result.push(matrix[i][colHigh]);
        visited[i][colHigh] = true;
      }
    }

    // right -> left
    for (let j = colHigh; j >= colLow; j--) {
      if (!visited[rowHigh][j]) {
        result.push(matrix[rowHigh][j]);
        visited[rowHigh][j] = true;
      }
    }

    // bottom -> top
    for (let i = rowHigh; i >= rowLow; i--) {
      if (!visited[i][colLow]) {
        result.push(matrix[i][colLow]);
        visited[i][colLow] = true;
      }
    }

    // update limits
    rowLow++;
    rowHigh--;
    colLow++;
    colHigh--;
  }

  return result;
};