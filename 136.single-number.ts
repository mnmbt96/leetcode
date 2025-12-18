/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 * https://leetcode.com/problems/single-number/description/
 */

// @lc code=start
// function singleNumber(nums: number[]): number {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     // 同じ数字の個数を出す
//     const count = nums.filter((num) => num === nums[i]).length;
//     // 重複なしの場合
//     if (count == 1) {
//       return nums[i];
//     }
//   }
//   return result;
// }

// XOR(排他的論理和)を使った解答
function singleNumber(nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
}
// @lc code=end
