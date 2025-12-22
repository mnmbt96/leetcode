/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 * https://leetcode.com/problems/majority-element/description/
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let resultNum = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    // 現在の数字がresultNumと違う場合
    if (nums[i] !== resultNum) {
      // 現在の数字が配列に何個あるか
      const count = nums.filter((num) => num === nums[i]).length;
      // 現在の数字の個数がmaxCountより多い場合
      if (count > maxCount) {
        // 結果の数字と最大の個数を変更する
        resultNum = nums[i];
        maxCount = count;
      }
    }
  }
  return resultNum;
}
// @lc code=end
