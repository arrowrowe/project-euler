const io = require('../util/io');
const {log, curry, plus} = require('../util/fn');
const {matchAll} = require('../util/str');

const {solve, parse} = require('./sudoku');

const getTopDigits = m => m[0][0] * 100 + m[0][1] * 10 + m[0][2];

io.get('https://projecteuler.net/project/resources/p096_sudoku.txt')
  .get('body')
  .then(curry(matchAll, /^Grid \d+((?:\n\d{9}){9})/gm))
  .map(match => solve(parse(match[1])))
  .map(getTopDigits)
  .reduce(plus)
  .tap(log);
