const io = require('../util/io');
const {log} = require('../util/fn');

const value = s => {
  let v = 0;
  for (let i = 0; i < s.length; i++)
    v += s.charCodeAt(i) - 64;
  return v;
};

const isTriangle = m => {
  const n = Math.floor(Math.sqrt(2 * m));
  return n * (n + 1) === 2 * m;
};

io.get('https://projecteuler.net/project/resources/p042_words.txt')
  .get('body')
  .then(raw => raw.slice(1, -1).split('","'))
  .filter(word => isTriangle(value(word)))
  .get('length')
  .tap(log);
