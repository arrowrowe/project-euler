const Promise = require('bluebird');
const {range, identity} = require('../util/fn');

const findNextCellToFill = (m, i, j) => {
  for (let x of range(i, 9))
    for (let y of range(j, 9))
      if (m[x][y] === 0)
        return [x, y]
  for (let x of range(9))
    for (let y of range(i))
      if (m[x][y] === 0)
        return [x, y]
  return [-1, -1];
};

const secTop = i => Math.floor(i / 3) * 3;

const isValid = (m, i, j, e) => {
  for (let x of range(9))
    if (m[i][x] === e || m[x][j] === e)
      return false;
  const secTopX = secTop(i);
  const secTopY = secTop(j);
  for (let x of range(secTopX, secTopX + 3))
    for (let y of range(secTopY, secTopY + 3))
      if (m[x][y] === e)
        return false;
  return true;
};

const isSolvable = (m, i=0, j=0) => {
  [i, j] = findNextCellToFill(m, i, j);
  if (i === -1)
    return true;
  for (let e of range(1, 10))
    if (isValid(m, i, j, e)) {
      m[i][j] = e;
      if (isSolvable(m, i, j))
        return true;
      m[i][j] = 0
    }
  return false;
};

class SudokuUnsolvableError extends Error {}

const solve = m => Promise.try(() => {
  if (isSolvable(m)) {
    return m;
  } else {
    throw new SudokuUnsolvableError();
  }
});

const parse = s => s
  .split('\n')
  .map(r => r.trim())
  .filter(identity)
  .map(r => r.split('').map(Number));

module.exports = {
  solve,
  SudokuUnsolvableError,
  parse
};
