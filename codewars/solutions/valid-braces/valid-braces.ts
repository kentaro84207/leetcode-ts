// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

export const validBraces = (braces: string): boolean => {
  const sArr = braces.split("");
  const stackArr: string[] = [];

  for (let i = 0; i < sArr.length; i++) {
    const c = sArr[i];
    if (c === "(") stackArr.push(")");
    else if (c === "{") stackArr.push("}");
    else if (c === "[") stackArr.push("]");
    else if (stackArr.length === 0 || c !== stackArr.pop()) return false;
  }
  return stackArr.length === 0;
};
