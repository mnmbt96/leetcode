/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/description/
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  // 重複なしの要素数と元の配列の要素数が違うかどうか
  return new Set(nums).size !== nums.length;
}
// @lc code=end
