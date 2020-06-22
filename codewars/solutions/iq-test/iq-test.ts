// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript

export const iqTest = (numbers: string): number => {
  const arrNumbers = numbers.split(" ").map((x) => Number(x) % 2);
  if (arrNumbers.filter((x) => x === 0).length === 1) {
    return arrNumbers.indexOf(0) + 1;
  }
  return arrNumbers.indexOf(1) + 1;
};
