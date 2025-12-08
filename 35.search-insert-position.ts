/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 * https://leetcode.com/problems/search-insert-position/description/
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    // targetが現在の要素以下
    if (target <= nums[i]) {
      return i;
    }
  }

  // すべての要素より大きい場合
  return nums.length;
}
// @lc code=end
