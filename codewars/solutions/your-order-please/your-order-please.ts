// https://www.codewars.com/kata/55c45be3b2079eccff00010f

export const order = (words: string): string => {
  const arr = words.split(" ");
  return arr.sort((a, b) => {
    return cutNumber(a) - cutNumber(b);
  }).join(" ")
};

const cutNumber = (str: string): number => {
  return Number(str.split("").find((x) => !isNaN(Number(x))));
};
