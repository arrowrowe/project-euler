const Promise = require('bluebird');

const noop = () => {};

module.exports = (f, {xLower, xUpper, pieceCount, pieceEach=100000, callback}) => {
  if (pieceCount)
    pieceEach = Math.ceil(xUpper / pieceCount);
  const range = xBegin => Array.from({length: Math.min(xUpper - xBegin, pieceEach)}, (_, i) => f(xBegin + i));
  callback = callback || noop;
  const partial = xBegin =>
    Promise.all(range(xBegin))
      .tap(() => callback(xBegin))
      .then(() => {
        xBegin += pieceEach;
        if (xBegin < xUpper)
          return partial(xBegin);
      });
  return partial(xLower);
};
