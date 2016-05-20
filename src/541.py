"""

Usage:
  $ time python src/541.py 5

See details here:
  https://zybuluo.com/arrowrowe/note/381056

Note:
  This implementation is very very slow.

"""

from fractions import Fraction

def M(p):
  h = 1
  for k in range(2, p):
    h += Fraction(1, k)
  t = 0
  n = p
  while True:
    h += Fraction(1, n)
    if h.denominator % p:
      t = 0
    elif t:
      if n == p * t - 1:
        return t - 1
    else:
      t = n
    n += 1

import sys
print(M(int(sys.argv[1])))
