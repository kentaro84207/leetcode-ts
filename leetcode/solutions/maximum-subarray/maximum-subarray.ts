// https://leetcode.com/problems/maximum-subarray/

export const maxSubArray = (nums: number[]): number => {
  let sum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; ++i) {
    const currentNum = nums[i];
    sum = Math.max(currentNum, sum + currentNum);
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
};
