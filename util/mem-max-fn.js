module.exports = (f, {x: maxX, y: maxY=-Infinity, xUpper=Infinity}={}) => {
  const g = x => {
    return f(x).tap(y => {
      if (y > g.maxY && x < xUpper) {
        g.maxY = y;
        g.maxX = x;
      }
    });
  };
  g.maxX = maxX;
  g.maxY = maxY;
  g.toString = () => `max (${g.maxX} => ${g.maxY})`;
  return g;
};
