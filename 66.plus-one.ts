/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 * https://leetcode.com/problems/plus-one/description/
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      // 現在の要素を0にする
      digits[i] = 0;
    } else {
      // 現在の要素が9以外の場合、要素に1を足してループを抜ける
      digits[i] += 1;
      return digits;
    }
  }

  // 全て9の場合、先頭に1を追加する
  digits.unshift(1);
  return digits;
}
// @lc code=end
