/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 * https://leetcode.com/problems/two-sum/description/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const result = [];
  // nums配列をループする
  for (let i = 0; i < nums.length; i++) {
    // nums[i]より後ろの要素のみループする
    for (let y = i + 1; y < nums.length; y++) {
      if (nums[i] + nums[y] === target) {
        result.push(i, y);
      }
    }
  }
  return result;
};
// @lc code=end
