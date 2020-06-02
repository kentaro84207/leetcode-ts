// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

export const duplicateCount = (text: string): number => {
  const textArr = text.split("").map((v) => v.toLowerCase());
  const newArr = textArr.filter((x, i, self) => {
    return self.indexOf(x) === i &&
      i !== self.lastIndexOf(x);
  });
  return newArr.length;
};
