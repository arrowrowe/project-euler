const matchAll = (pattern, src) => {
  const matches = [];
  let match;
  while (match = pattern.exec(src)) {
    matches.push(match);
  }
  return matches;
};

module.exports = {
  matchAll,
};
