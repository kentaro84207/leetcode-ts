// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

export const toCamelCase = (str: string): string => {
  const arr = str.split(/(-|_)/).filter(x => !x.match(/(-|_)/) );
  return arr.map((x, i) => {
    if (i === 0) return x;
    return x.slice(0, 1).toUpperCase() + x.slice(1);
  }).join("");
};
