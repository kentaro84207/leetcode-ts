// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

export const findUniq = (arr: number[]): number | Error => {
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (arr.indexOf(num) === i && arr.lastIndexOf(num) === i) {
      return num;
    }
  }
  throw new Error("no answer");

  // better way
  // return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
};
