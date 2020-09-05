// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

export const towerBuilder = (nFloors: number): string[] => {
  const arr: string[] = [];
  for (let i = 0; i < nFloors; i++) {
    const space = nFloors - (i + 1);
    const mark = (2 * (i + 1)) - 1;
    arr[i] = `${" ".repeat(space)}${"*".repeat(mark)}${" ".repeat(space)}`;
  }
  return arr;
};
