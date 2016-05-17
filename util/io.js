const Promise = require('bluebird');
const request = require('request');

module.exports = {
  get: (...args) => new Promise((resolve, reject) => request.get(...args, (err, res, body) => err ? reject({err, res, body}) : resolve({res, body})))
};
