// https://leetcode.com/problems/search-insert-position/

export const searchInsert = (nums: number[], target: number): number => {
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

export const searchInsertBinarySearch = (
  nums: number[],
  target: number
): number => {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    if (target === nums[middle]) return middle;
    if (target > nums[middle]) {
      left = middle + 1;
    } else if (target < nums[middle]) {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }

  return left;
};
