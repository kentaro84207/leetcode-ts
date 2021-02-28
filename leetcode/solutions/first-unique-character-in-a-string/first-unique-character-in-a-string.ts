// https://leetcode.com/problems/first-unique-character-in-a-string/

export const firstUniqChar = (s: string): number => {
  const sMap = new Map<string, number>();
  const sArr = s.split('');
  for (let i = 0; i < sArr.length; ++i) {
    const v = sArr[i];
    const mapV = sMap.get(v);
    const num = mapV !== undefined ? mapV + 1 : 1;
    sMap.set(v, num);
  }
  for (let i = 0; i < sArr.length; ++i) {
    const v = sArr[i];
    if (sMap.get(v) === 1) return i;
  }
  return -1;
};
