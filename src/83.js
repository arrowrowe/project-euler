const {log, curry} = require('../util/fn');
const io = require('../util/io');

const shortestPathByVertex = require('./shortest-path-by-vertex');

const parse = raw =>
  raw
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => line.split(',').map(Number));

io.get('https://projecteuler.net/project/resources/p082_matrix.txt')
  .get('body')
// require('bluebird').resolve(`
//   131,673,234,103,18
//   201,96,342,965,150
//   630,803,746,422,111
//   537,699,497,121,956
//   805,732,524,37,331
// `)
  .then(parse)
  .then(curry(
    shortestPathByVertex,
    {

      init: ({distances, valueMatrix, visit}) => {
        distances[0][0] = valueMatrix[0][0];
        visit(0, 0);
      },

      resolve: ({distances, size}) => distances[size - 1][size - 1]

    }
  ))
  .tap(log);
