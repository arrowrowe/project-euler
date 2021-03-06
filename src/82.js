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
  .then(parse)
  .then(curry(
    shortestPathByVertex,
    {

      init: ({size, visited, unvisitedDistances, encodePos, distances, valueMatrix}) => {
        for (let i = 0; i < size; i++) {
          visited[i][0] = true;
          unvisitedDistances.set(
            encodePos(i, 1),
            distances[i][1] = (distances[i][0] = valueMatrix[i][0]) + valueMatrix[i][1]
          );
        }
      },

      resolve: ({distances, size}) => Math.min(...distances.map(row => row[size - 1]))

    }
  ))
  .tap(log);
