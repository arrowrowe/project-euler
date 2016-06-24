const {min} = Math;

const newMatrix = (height, width, fillWith) => {
  const matrix = new Array(height);
  for (let i = 0; i < height; i++)
    matrix[i] = new Array(width).fill(fillWith);
  return matrix;
};

const keyOfMinValue = pairs => {
  let minKey;
  let minValue = Infinity;
  for (let [key, value] of pairs) {
    if (value < minValue) {
      minValue = value;
      minKey = key;
    }
  }
  return minKey;
};

module.exports = ({init, resolve}, valueMatrix) => {
  const size = valueMatrix.length;

  const visited = newMatrix(size, size, false);
  const distances = newMatrix(size, size, Infinity);
  const unvisitedDistances = new Map();

  const encodePos = (i, j) => i * size + j;
  const decodePos = c => {
    const j = c % size;
    return [(c - j) / size, j];
  };

  const knock = (gift, i, j) => {
    if (i < 0 || i >= size || j < 0 || j >= size)
      return;
    if (visited[i][j])
      return;
    unvisitedDistances.set(
      encodePos(i, j),
      distances[i][j] = min(distances[i][j], gift + valueMatrix[i][j])
    );
  };

  const visit = (i, j) => {
    const currentDistance = distances[i][j];
    // mark current node as visited.
    visited[i][j] = true;
    unvisitedDistances.delete(encodePos(i, j));
    // loop over all UNVISITED neighbors of current node.
    knock(currentDistance, i - 1, j);
    knock(currentDistance, i + 1, j);
    knock(currentDistance, i, j - 1);
    knock(currentDistance, i, j + 1);
  };

  const args = {
    // given parameters
    valueMatrix,
    size,
    // cache
    visited,
    distances,
    unvisitedDistances,
    // utility functions
    encodePos,
    decodePos,
    // core logic
    knock,
    visit,
  };

  init(args);

  while (unvisitedDistances.size)
    visit(...decodePos(keyOfMinValue(unvisitedDistances.entries())));

  return resolve(args);
};
