// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

export const deleteNth = (arr: number[], n: number): number[] => {
  const counts = {} as { [key: number]: number };
  const newArr: number[] = [];
  arr.forEach((e) => {
    counts[e] = counts[e] ? counts[e] + 1 : 1;
    if (counts[e] <= n) newArr.push(e);
  });

  return newArr;
};
