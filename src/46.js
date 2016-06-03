// TODO: refine this.

function* enumerate(iterable) {
  let index = 0;
  for (let value of iterable)
    yield [value, index++, iterable];
}

const knowns = [3];
const primeQ = n => {
  for (let p of knowns)
    if (n % p === 0)
      return false;
  return true;
};

function* primes() {
  // yield 2;
  for (let p of knowns)
    yield p;
  for (let n = knowns[knowns.length - 1] + 2; ; n += 2) {
    if (primeQ(n)) {
      yield n;
      knowns.push(n);
    }
  }
}

const isInt = n => n % 1 === 0;
const isSqr = n => isInt(n) && isInt(Math.sqrt(n));

(() => {
  let n = 1;
  const ps = [];
  const isThis = n => {
    for (let q = ps.length - 1; q >= 0; q--) {  
      if (isSqr(n - ps[q])) {
        console.log(`${n} = ${ps[q]} + r^2`);
        return false;
      }
    }
    return true;
  };
  for (let [p, i] of enumerate(primes())) {
    p = (p - 1) / 2;
    if (p > n) {
      for (; n < p; n++) {
        if (isThis(n)) {
          console.log(`This is ${n}!`);
          return n;
        }
      }
    } else {
      console.log(`${n} = ${p}`);
    }
    n++;
    ps.push(p);
  }
})();
