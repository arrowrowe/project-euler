const Promise = require('bluebird');

const {range, plus} = require('../util/fn');
const memFnBy = require('../util/mem-fn-by');

module.exports = coins => {
  const countWith = memFnBy(
    (n, [c, ...cs]) => cs.length ?
      Promise.map(
        range(Math.floor(n / c) +  1),
        i => countWith(n - i * c, cs)
      ).reduce(plus, 0) :
      (n % c ? 0 : 1),
    (n, cs) => n * coins.length + cs.length
  );
  return n => countWith(n, coins);
};
