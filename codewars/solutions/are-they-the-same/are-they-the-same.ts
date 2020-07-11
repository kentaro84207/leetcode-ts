// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

export const comp = (array1: number[], array2: number[] | null): boolean => {
  if (array1 === null || array2 === null) return false
  const sqrtArray2 = array2.map(x => Math.sqrt(x)).sort();
  return array1.sort().toString() === sqrtArray2.toString();
};
