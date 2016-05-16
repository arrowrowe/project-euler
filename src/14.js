const Promise = require('bluebird');

const memFn = require('../util/mem-fn');
const memMaxFn = require('../util/mem-max-fn');
const partially = require('../util/partially');

const next = n => n % 2 ? 3 * n + 1 : n / 2;
const len = memFn(n => n === 1 ? 1 :
  Promise.resolve(len(next(n))).then(l => l + 1)
);

const mLen = memMaxFn(len);
partially(mLen, {
  xLower: 1,
  xUpper: 1000000,
  pieceCount: 10,
  callback: xBegin => console.log(`From ${xBegin}: ${mLen}`)
})
  .tap(() => console.log(`End: ${mLen}`));
