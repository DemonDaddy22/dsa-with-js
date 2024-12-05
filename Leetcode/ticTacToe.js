/*
  Problem - Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

  Players take turns placing characters into empty squares ' '.
  The first player A always places 'X' characters, while the second player B always places 'O' characters.
  'X' and 'O' characters are always placed into empty squares, never on filled ones.
  The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
  The game also ends if all squares are non-empty.
  No more moves can be played if the game is over.

  Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli].
  Return the winner of the game if it exists (A or B).
  In case the game ends in a draw return "Draw".
  If there are still movements to play return "Pending".

  You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.
*/

const SIZE = 3;
const PRIMARY_DIAGONAL = new Set(['0,0', '1,1', '2,2']);
const SECONDARY_DIAGONAL = new Set(['0,2', '1,1', '2,0']);

const isStraightMatch = (sequence) => {
  const counter = {};
  for (let curr of sequence) {
    counter[curr] = (counter[curr] ?? 0) + 1;
    if (counter[curr] === SIZE) {
      return true;
    }
  }
  return false;
};

const isOneDiagonalMatch = (playerMoves, isPrimary = true) => {
  let count = 0;
  const diagonal = isPrimary ? PRIMARY_DIAGONAL : SECONDARY_DIAGONAL;
  for (let move of playerMoves) {
    const moveSequence = move.join();
    if (diagonal.has(moveSequence)) {
      count++;
      if (count === SIZE) {
        return true;
      }
    }
  }
  return false;
};

const isDiagonalMatch = (playerMoves) => {
  return (
    isOneDiagonalMatch(playerMoves)
    || isOneDiagonalMatch(playerMoves, false)
  );
};

const isWinner = (playerMoves) => {
  return (
    isStraightMatch(playerMoves.map((move) => move[0]))
    || isStraightMatch(playerMoves.map((move) => move[1]))
    || isDiagonalMatch(playerMoves)
  );
};

const ticTacToe = (moves) => {
  const movesA = [];
  const movesB = [];

  for (let i = 0; i < moves.length; i++) {
    if (i % 2 === 0) {
      movesA.push(moves[i]);
    } else {
      movesB.push(moves[i]);
    }
  }

  const isWinnerA = isWinner(movesA);
  const isWinnerB = isWinner(movesB);

  if (!isWinnerA && !isWinnerB && (moves.length === SIZE * SIZE)) {
    return 'Draw';
  }
  if (isWinnerA) {
    return 'A';
  }
  if (isWinnerB) {
    return 'B';
  }
  return 'Pending';
};