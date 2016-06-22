def digits(n):
  while n > 0:
    d = n % 10
    yield d
    n = int((n - d) / 10)

def meet(n):
  if n == 1:
    return 1
  if n == 89:
    return 89
  return meet(sum(map(lambda x: x ** 2, digits(n))))

def countTo(n):
  return sum(map(lambda n: 1 if meet(n) == 89 else 0, range(1, 1 + n)))

print(countTo(10000000))
