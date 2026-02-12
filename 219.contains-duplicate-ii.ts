/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 * https://leetcode.com/problems/contains-duplicate-ii/description/
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const numIndexMap = new Map<number, number>(); // key: num, value: index

  for (let i = 0; i < nums.length; i++) {
    const prevValue = numIndexMap.get(nums[i]);

    if (prevValue !== undefined && i - prevValue <= k) {
      // 既に同じ数字が出現しているかつ、数字の距離がk以内
      return true;
    }

    // 常に最新のインデックスを保存
    numIndexMap.set(nums[i], i);
  }

  return false;
}
// @lc code=end
