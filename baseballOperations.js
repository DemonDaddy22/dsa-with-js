/*
  Problem - You are keeping the scores for a baseball game with strange rules.
  At the beginning of the game, you start with an empty record.

  You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

  An integer x.
  Record a new score of x.

  '+'.
  Record a new score that is the sum of the previous two scores.
  
  'D'.
  Record a new score that is the double of the previous score.
  
  'C'.
  Invalidate the previous score, removing it from the record.
  
  Return the sum of all the scores on the record after applying all the operations.

  The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.
*/

const calPoints = (operations) => {
  const points = [];

  for (let op of operations) {
    let intermediate;
    switch (op) {
      case '+':
        intermediate = points[points.length - 1] + points[points.length - 2];
        points.push(intermediate);
        break;
      case 'D':
        intermediate = points[points.length - 1] * 2;
        points.push(intermediate);
        break;
      case 'C':
        points.pop();
        break;
      default:
        points.push(Number(op));
        break;
    }
  }

  return points.reduce((accu, curr) => accu += curr, 0);
};