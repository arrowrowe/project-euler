const {log} = require('../util/fn');

const {max} = Math;

const primesKnown = [];

const getFactorRank = (n, p) => {
  let k = 0;
  while (n % p === 0) {
    n /= p;
    k++;
  }
  return k;
};

const generatePrimeRanks = function* (p, s) {
  for (;;) {
    s++;
    yield [s, getFactorRank(s, p) + 1];
  }
};

const spKnown = new Map();
const solveForPrimePowers = (p, q) => {
  const known = spKnown.get(p);
  if (q <= known.length)
    return p * known[q - 1];
  for (let [s, qDelta] of generatePrimeRanks(p, known[known.length - 1])) {
    while (qDelta--)
      known.push(s);
    if (known.length >= q)
      break;
  }
  return p * known[q - 1];
};

const solve = n => {
  let s = 0;
  for (let p of primesKnown) {
    let q = 0;
    while (n % p === 0) {
      n /= p;
      q++;
    }
    if (q) {
      s = max(s, solveForPrimePowers(p, q));
      if (n === 1)
        break;
    }
  }
  if (s)
    return s;
  primesKnown.push(n);
  spKnown.set(n, [1]);
  return n;
};

const sumSolve = N => {
  let S = 0;
  for (let n = 2; n <= N; n++)
    S += solve(n);
  return S;
};

log(sumSolve(100));
