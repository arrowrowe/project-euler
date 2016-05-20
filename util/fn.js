const curry = (f, ...h) => (...t) => f(...h, ...t);

const identity = x => x;

const plus = (a, b) => a + b;

const range = function* (a, b) {
  if (b === undefined)
    [a, b] = [0, a];
  for (let i = a; i < b; i++)
    yield i;
};

const leftPad = (s, l, c=' ') => s.length < l ? c.repeat(l - s.length) + s : s;
const numberFormat = (n, l=2) => leftPad(n.toString(), l, '0');

const dateFormat = d => `\u001b[90m[` +
  `${d.getFullYear()}/${numberFormat(d.getMonth() + 1)}/${numberFormat(d.getDate())}` +
  ` ` +
  `${numberFormat(d.getHours())}:${numberFormat(d.getMinutes())}:${numberFormat(d.getSeconds())}.${numberFormat(d.getMilliseconds(), 3)}` +
  `]\u001b[39m`;

const now = () => dateFormat(new Date());

const log = (...msg) => console.log(now(), ...msg);

module.exports = {
  curry,
  identity,
  plus,
  range,
  leftPad,
  numberFormat,
  dateFormat,
  now,
  log,
};
