/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  // ユニークな要素を書き込む位置
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    // 現在の値が直前の値と違えばユニーク
    if (nums[i] !== nums[i - 1]) {
      // ユニーク値を前に詰める
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
// @lc code=end
