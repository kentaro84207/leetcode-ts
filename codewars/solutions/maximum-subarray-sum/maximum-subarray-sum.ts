// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

export const maxSequence = (arr: number[]): number => {
  let currentSum = 0;
  let maxSum = 0;
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let currentNum = arr[i];

    currentSum = Math.max((currentSum + currentNum), 0);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};
