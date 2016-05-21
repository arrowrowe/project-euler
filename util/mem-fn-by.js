const Promise = require('bluebird');

module.exports = (f, by) => {
  const records = new Map();
  return (...args) => {
    const key = by(...args);
    if (records.has(key)) {
      return Promise.resolve(records.get(key));
    }
    const y = f(...args);
    records.set(key, y);
    return Promise.resolve(y);
  };
};
