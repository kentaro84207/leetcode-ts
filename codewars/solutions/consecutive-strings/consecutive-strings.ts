// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

export const longestConsec = (strarr: string[], k: number): string => {
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) return "";

  return strarr.reduce((acc, _, i) => {
    const currString = strarr.slice(i, i + k).join("");
    return currString.length > acc.length ? currString : acc;
  }, "");
};
