const {permutations, fromDigits} = require('../util/math');

const isPro43 = digits =>
  fromDigits(digits.slice(1, 4)) % 2 === 0 &&
    fromDigits(digits.slice(2, 5)) % 3 === 0 &&
    fromDigits(digits.slice(3, 6)) % 5 === 0 &&
    fromDigits(digits.slice(4, 7)) % 7 === 0 &&
    fromDigits(digits.slice(5, 8)) % 11 === 0 &&
    fromDigits(digits.slice(6, 9)) % 13 === 0 &&
    fromDigits(digits.slice(7, 10)) % 17 === 0;

for (let perm of permutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
  if (isPro43(perm))
    process.stdout.write(`${fromDigits(perm)} + `);
process.stdout.write(`0\n`);
