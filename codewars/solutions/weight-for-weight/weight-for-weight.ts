// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

export const orderWeight = (strng: string): string => {
  return strng.split(" ").sort((a, b) => {
    if (getSum(a) === getSum(b)) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
    return getSum(a) - getSum(b);
  }).join(" ");
};

const getSum = (stNumber: string): number => {
  return stNumber.split("")
    .map((x) => Number(x))
    .reduce((a, c) => a + c);
};
