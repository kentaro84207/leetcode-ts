// https://leetcode.com/problems/subarray-sum-equals-k/
// Input: nums = [1,1,1], k = 2
// Output: 2

export const subarraySum = (nums: number[], k: number): number => {
  const map = new Map<number, number>([[0, 1]]);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    const el = nums[i];
    sum += el;
    const diff = sum - k;
    const d = map.get(diff);
    if (d !== undefined) count += d;
    const v = map.get(sum);
    v !== undefined ? map.set(sum, v + 1) : map.set(sum, 1);
  }
  return count;
};
