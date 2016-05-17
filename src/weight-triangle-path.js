const Promise = require('bluebird');

const memFn = require('../util/mem-fn');

const max = arr => Math.max(...arr);

const parse = raw =>
  raw
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => line.split(' ').map(Number));

const solve = T => {
  const n = T.length;
  const ub = n - 1;
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      T[i][j] += Math.max(T[i + 1][j], T[i + 1][j + 1]);
    }
  }
  return T[0][0];
};

module.exports = {
  parse,
  solve
};
