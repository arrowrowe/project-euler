const leftPad = (s, l, c=' ') => s.length < l ? c.repeat(l - s.length) + s : s;
const numberFormat = (n, l=2) => leftPad(n.toString(), l, '0');

const dateFormat = d => `\u001b[90m[` +
  `${d.getFullYear()}/${numberFormat(d.getMonth() + 1)}/${numberFormat(d.getDate())}` +
  ` ` +
  `${numberFormat(d.getHours())}:${numberFormat(d.getMinutes())}:${numberFormat(d.getSeconds())}.${numberFormat(d.getMilliseconds(), 3)}` +
  `]\u001b[39m`;

const now = () => dateFormat(new Date());

const matchAll = (pattern, src) => {
  const matches = [];
  let match;
  while (/* eslint-disable no-cond-assign */ match = pattern.exec(src) /* eslint-enable no-cond-assign */)
    matches.push(match);
  return matches;
};

module.exports = {
  leftPad,
  numberFormat,
  dateFormat,
  now,
  matchAll,
};
