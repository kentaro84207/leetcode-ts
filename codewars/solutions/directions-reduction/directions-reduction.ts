// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

export const dirReduc = (arr: string[]): string[] => {
  interface Reverse {
    NORTH: string;
    EAST: string;
    SOUTH: string;
    WEST: string;
    [key: string]: string;
  }

  const reverse = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  } as Reverse;

  return arr.reduce(
    (a: string[], c) => {
      if (a[a.length - 1] === reverse[c]) {
        a.pop();
      } else {
        a.push(c);
      }
      return a;
    },
    [],
  );
};
