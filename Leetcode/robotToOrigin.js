/*
  Problem - There is a robot starting at the position (0, 0), the origin, on a 2D plane.
  Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

  You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move.
  Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

  Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

  Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc.
  Also, assume that the magnitude of the robot's movement is the same for each move.
*/

const judgeCircle = (moves) => {
  let horizontal = 0, vertical = 0;

  for (let move of moves) {
    switch (move) {
      case 'U':
        vertical += 1;
        break;
      case 'D':
        vertical -= 1;
        break;
      case 'L':
        horizontal -= 1;
        break;
      case 'R':
        horizontal += 1;
        break;
      default:
        break;
    }
  }

  return horizontal === 0 && vertical === 0;
};