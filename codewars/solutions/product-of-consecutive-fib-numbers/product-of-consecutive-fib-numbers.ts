// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

export const productFib = (prod: number): [number, number, boolean] => {
  let n = 1;
  while (fib(n - 1) * fib(n) <= prod) {
    if (fib(n - 1) * fib(n) === prod) return [fib(n - 1), fib(n), true];
    n++;
  }
  return [fib(n - 1), fib(n), false];
};

const fib = (n: number, memo: number[] = []): number => {
  if (n < 3) return 1;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) +
    fib(n - 2, memo);
  return memo[n];
};
