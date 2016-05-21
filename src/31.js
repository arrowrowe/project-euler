const coin = require('./coin');
const {log} = require('../util/fn');

coin([200, 100, 50, 20, 10, 5, 2, 1])(200).then(log);
