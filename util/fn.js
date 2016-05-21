const {now} = require('./str');

const curry = (f, ...h) => (...t) => f(...h, ...t);

const identity = x => x;

const plus = (a, b) => a + b;

const sum = a => a.reduce(plus, 0);

const range = function* (a, b) {
  if (b === undefined)
    [a, b] = [0, a];
  for (let i = a; i < b; i++)
    yield i;
};

/* eslint-disable no-console */
const log = (...msg) => console.log(now(), ...msg);

/* eslint-enable no-console */

module.exports = {
  curry,
  identity,
  plus,
  sum,
  range,
  log,
};
