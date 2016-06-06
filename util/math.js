const {without, enumerate} = require('./fn');

/** Combinations *************************************************************/

function* permutations(array) {
  if (array.length === 1) {
    yield array;
    return;
  }
  for (let [currentValue, index] of enumerate(array))
    for (let restPermutations of permutations(without(array, index)))
      yield restPermutations.concat(currentValue);
}

/** Number Theory ************************************************************/

const fromDigits = digits => Number(digits.map(String).join(''));

const isInt = n => n % 1 === 0;
const isSqr = n => isInt(n) && isInt(Math.sqrt(n));

/** Prime ********************************************************************/

const oddPrimesKnown = [3];
const isOddPrime = n => {
  for (let p of oddPrimesKnown)
    if (n % p === 0)
      return false;
  return true;
};

function* oddPrimeSeries() {
  // yield 2;
  for (let p of oddPrimesKnown)
    yield p;
  for (let n = oddPrimesKnown[oddPrimesKnown.length - 1] + 2; ; n += 2) {
    if (isOddPrime(n)) {
      yield n;
      oddPrimesKnown.push(n);
    }
  }
}

/*****************************************************************************/
module.exports = {
  permutations,
  fromDigits,
  isInt,
  isSqr,
  oddPrimeSeries
};
