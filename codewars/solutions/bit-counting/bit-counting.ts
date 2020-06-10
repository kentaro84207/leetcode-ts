// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

export const countBits = (n: number): number => {
  const binaryArr = [];
  while (n > 0) {
    binaryArr.push(n % 2);
    n = Math.floor(n / 2);
  }
  return binaryArr.reduce(
    (a, c) => a + c,
    0,
  );
};
