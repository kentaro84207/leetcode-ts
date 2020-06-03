// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

export const spinWords = (str: string): string => {
  const strArr = str.split(" ");
  return strArr.map((x) => {
    if (x.length < 5) return x;
    return [...x].reverse().join("");
  }).join(" ");
};
