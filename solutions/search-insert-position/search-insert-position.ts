// https://leetcode.com/problems/search-insert-position/

export const searchInsert = (
  nums: number[],
  target: number,
): number => {
  const numExists = nums.indexOf(target);
  if (numExists !== -1) return numExists;

  const numsLength = nums.length;
  let output = numsLength;
  for (let i = 0; i < numsLength; i++) {
    if (nums[i] > target) {
      output = i;
      break;
    }
  }

  return output;
};
