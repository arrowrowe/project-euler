const io = require('../util/io');
const {log, plus} = require('../util/fn');

const value = s => Array.from(s).reduce((a, b) => a + b.charCodeAt(0) - 64, 0)

io.get('https://projecteuler.net/project/resources/p022_names.txt')
  .get('body')
  .then(raw => raw.slice(1, -1).split('","'))
  .call('sort', (a, b) => a > b ? 1 : -1)
  .map((name, index) => value(name) * (index + 1))
  .reduce(plus, 0)
  .tap(log);
