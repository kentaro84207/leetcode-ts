// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

export const pigIt = (str: string): string => {
  const strArr = str.split(" ");
  const punctionMarks = [".", ",", ":", ";", "?", "!"]
  return strArr.map(x => {
    const c = x.slice(0, 1);
    const replacedX = x.slice(1).concat(c);
    if(punctionMarks.includes(x)) replacedX;
    return replacedX.concat("ay");
  }).join(" ")
};
