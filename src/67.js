const {parse, solve} = require('./weight-triangle-path');

const {log} = require('../util/fn');

const io = require('../util/io');

io.get('https://projecteuler.net/project/resources/p067_triangle.txt')
  .then(({body}) => solve(parse(body)))
  .then(log);
