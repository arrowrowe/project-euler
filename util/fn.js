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

const enumerate = function* (iterable) {
  let index = 0;
  for (let value of iterable)
    yield [value, index++, iterable];
};

const without = (array, index) => array.slice(0, index).concat(array.slice(index + 1));

/* eslint-disable no-console */
const log = (...msg) => console.log(now(), ...msg);

/* eslint-enable no-console */

module.exports = {
  curry,
  identity,
  plus,
  sum,
  range,
  enumerate,
  without,
  log,
};
