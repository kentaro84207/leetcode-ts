// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

export const uniqueInOrder = (
  iterable: string | (string | number)[],
): (string | number)[] => {
  const arr = Array.isArray(iterable) ? iterable : iterable.split("");
  return arr.filter((x, i, self) => x !== self[i + 1]);
};
