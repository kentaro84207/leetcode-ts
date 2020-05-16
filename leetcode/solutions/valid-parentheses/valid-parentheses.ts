// https://leetcode.com/problems/valid-parentheses/

export const isValid = (s: string): boolean => {
  if (s.length === 0) return true;

  const sArr = s.split("");
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
