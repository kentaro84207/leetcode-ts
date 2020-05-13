// https://leetcode.com/problems/two-sum/

export const twoSum = (nums: number[], target: number): [number, number] => {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    const matchIndex = map.get(target - value);

    if (matchIndex !== undefined) return [matchIndex, i]

    map.set(value, i);
  }

  throw new Error('No two sum solution');
}
