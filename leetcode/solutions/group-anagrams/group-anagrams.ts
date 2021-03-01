// https://leetcode.com/problems/group-anagrams/

export const groupAnagrams = (strs: string[]): string[][] => {
  const map = new Map<string, string[]>();
  for (let i = 0; i < strs.length; i++) {
    const el = strs[i];
    const sortedEl = el.split('').sort().join('');
    const valueArr = map.get(sortedEl);
    if (valueArr !== undefined) {
      valueArr.push(el);
      map.set(sortedEl, valueArr);
    } else {
      map.set(sortedEl, [el]);
    }
  }
  return [...map.values()];
};
