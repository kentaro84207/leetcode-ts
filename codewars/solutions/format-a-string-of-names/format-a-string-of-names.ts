// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

export const list = (names: Array<{ name: string }>): string => {
  const a = names.map((x, i, arr) => {
    if (i === (arr.length - 2)) return `${x.name} & ${arr[i + 1].name}`;
    return x.name;
  });
  if (a.length > 1) a.pop();
  return a.join(", ");
};
