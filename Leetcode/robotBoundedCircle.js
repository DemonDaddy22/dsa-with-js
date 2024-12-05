/*
  Problem - On an infinite plane, a robot initially stands at (0, 0) and faces north.
  Note that:

  The north direction is the positive direction of the y-axis.
  The south direction is the negative direction of the y-axis.
  The east direction is the positive direction of the x-axis.
  The west direction is the negative direction of the x-axis.
  The robot can receive one of three instructions:

  "G": go straight 1 unit.
  "L": turn 90 degrees to the left (i.e., anti-clockwise direction).
  "R": turn 90 degrees to the right (i.e., clockwise direction).
  The robot performs the instructions given in order, and repeats them forever.

  Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.
*/

// if after initial set of instructions, robot
// doesn't face north
// is at origin

const DIRECTION = Object.freeze({
  NORTH: 'N',
  SOUTH: 'S',
  EAST: 'E',
  WEST: 'W',
});

const INSTRUCTION = Object.freeze({
  STRAIGHT: 'G',
  LEFT: 'L',
  RIGHT: 'R',
});

const isRobotBounded = (instructions) => {
  let currDir = DIRECTION.NORTH;
  let currPosX = 0;
  let currPosY = 0;

  for (let instruction of instructions) {
    if (instruction === INSTRUCTION.STRAIGHT) {
      switch (currDir) {
        case DIRECTION.NORTH:
          currPosY += 1;
          break;
        case DIRECTION.SOUTH:
          currPosY -= 1;
          break;
        case DIRECTION.EAST:
          currPosX += 1;
          break;
        case DIRECTION.WEST:
          currPosX -= 1;
          break;
        default:
          break;
      }
    } else {
      switch (currDir) {
        case DIRECTION.NORTH:
          currDir = instruction === INSTRUCTION.LEFT ? DIRECTION.WEST : DIRECTION.EAST;
          break;
        case DIRECTION.SOUTH:
          currDir = instruction === INSTRUCTION.LEFT ? DIRECTION.EAST : DIRECTION.WEST;
          break;
        case DIRECTION.EAST:
          currDir = instruction === INSTRUCTION.LEFT ? DIRECTION.NORTH : DIRECTION.SOUTH;
          break;
        case DIRECTION.WEST:
          currDir = instruction === INSTRUCTION.LEFT ? DIRECTION.SOUTH : DIRECTION.NORTH;
          break;
        default:
          break;
      }
    }
  }

  return (
    currDir !== DIRECTION.NORTH || (currPosX === 0 && currPosY === 0)
  );
};