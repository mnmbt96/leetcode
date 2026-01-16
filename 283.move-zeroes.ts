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
  let insertPos = 0; // 数字を入れる場所
  let i = 0;

  // 0以外を前に詰める
  while (i < nums.length) {
    if (nums[i] !== 0) {
      // 0以外の数字の場合、insertPosに現在の要素を入れる
      nums[insertPos] = nums[i];
      insertPos++;
    }
    i++;
  }

  // insertPos以降を全部0にする
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
}
// @lc code=end
