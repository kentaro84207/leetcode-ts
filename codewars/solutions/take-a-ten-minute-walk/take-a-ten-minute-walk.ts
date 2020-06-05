// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

export const isValidWalk = (walk: ("n" | "w" | "e" | "s")[]): boolean => {
  const nLength = walk.filter((x) => x === "n").length;
  const wLength = walk.filter((x) => x === "w").length;
  const eLength = walk.filter((x) => x === "e").length;
  const sLength = walk.filter((x) => x === "s").length;

  return walk.length === 10 && nLength === sLength && wLength === eLength;
};
