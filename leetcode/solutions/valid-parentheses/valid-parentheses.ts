// https://leetcode.com/problems/valid-parentheses/

export const isValid = (s: string): boolean => {
  const stack: string[] = [];
  const map = new Map<string, string>([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  const sArr = s.split('');
  for (let i = 0; i < sArr.length; ++i) {
    const e = sArr[i];
    const v = map.get(e);
    if (v !== undefined) {
      if (v !== stack.pop()) return false;
    } else {
      stack.push(e);
    }
  }
  return stack.length === 0;
};
