// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

export const tribonacci = (signature: number[], n: number): number[] => {
  for (let i = 0; i < n - 3; i++) {
    const sum = signature.slice(-3).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    signature.push(sum);
  }

  return signature.slice(0, n);
};
