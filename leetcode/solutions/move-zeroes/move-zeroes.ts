// https://leetcode.com/problems/move-zeroes/
export const moveZeroes = (nums: number[]): number[] => {
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    const target = i - pointer;
    if (nums[target] === 0) {
      nums.splice(target, 1);
      nums.push(0);
      pointer++;
    }
  }
  return nums;
};
