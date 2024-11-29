/*
  Problem - You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point.
  Check if these points make a straight line in the XY plane.
*/

const checkStraightLine = (coordinates) => {
  const [coordinate1, coordinate2] = coordinates;
  // all the points in a straight line must have same slope
  // m = (y2 - y1) / (x2 - x1)

  // in order to avoid division by zero, check by cross product of differences
  // (y2 - y1) / (x2 - x1) = (y3 - y2) / (x3 - x2) -> (y2 - y1) * (x3 - x2) = (y3 - y2) * (x2 - x1)

  const dY = (coordinate2[1] - coordinate1[1]);
  const dX = (coordinate2[0] - coordinate1[0]);

  for (let i = 2; i < coordinates.length; i++) {
    const c1 = coordinates[i - 1];
    const c2 = coordinates[i];
    const dy = c2[1] - c1[1];
    const dx = c2[0] - c1[0];
    if (dY * dx !== dy * dX) {
      return false;
    }
  }

  return true;
};