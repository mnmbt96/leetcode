/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 * https://leetcode.com/problems/remove-element/description/
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  // ユニークな要素を書き込む位置
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    // 現在の値がvalと違う
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
// @lc code=end
