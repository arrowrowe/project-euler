const Promise = require('bluebird');

module.exports = f => {
  const records = new Map();
  return x => {
    if (records.has(x)) {
      return Promise.resolve(records.get(x));
    }
    const y = f(x);
    records.set(x, y);
    return Promise.resolve(y);
  };
};
