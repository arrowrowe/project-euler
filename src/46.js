const {isSqr, oddPrimeSeries} = require('../util/math');
const {log} = require('../util/fn');

function pro46() {
  let n = 1;
  const ps = [];
  const isThis = n => {
    for (let q = ps.length - 1; q >= 0; q--) {
      if (isSqr(n - ps[q])) {
        log(`${n} = ${ps[q]} + r^2`);
        return false;
      }
    }
    return true;
  };

  for (let p of oddPrimeSeries()) {
    p = (p - 1) / 2;
    if (p > n) {
      for (; n < p; n++)
        if (isThis(n))
          return 1 + 2 * n;
    } else {
      log(`${n} = ${p}`);
    }
    n++;
    ps.push(p);
  }
}

log(`ans = ${pro46()}`);
