/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 * https://leetcode.com/problems/move-zeroes/description/
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let insertPos = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
    i++;
  }

  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
}
// @lc code=end
