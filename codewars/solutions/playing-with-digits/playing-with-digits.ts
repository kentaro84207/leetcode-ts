// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

export const digPow = (n: number, p: number): number => {
  const nArr = [...String(n)].map((x) => Number(x));
  const sum = nArr.reduce((accumulator, currentValue, currentIndex) => {
    return accumulator + Math.pow(currentValue, p + currentIndex);
  }, 0);
  if (sum % n === 0) return sum / n;
  return -1
};
