// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

export const findEvenIndex = (arr: number[]): number => {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    const leftArr = arr.slice(0, i);
    const rightArr = arr.slice(i + 1);
    const leftSum = leftArr.reduce((a, c) => a + c, 0);
    const rightSum = rightArr.reduce((a, c) => a + c, 0);
    if (leftSum === rightSum) {
      index = i;
      break;
    }
  }

  return index;
};
