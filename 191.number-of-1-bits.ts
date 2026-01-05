/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
function hammingWeight(n: number): number {
  // 2進数に変換して配列に入れる
  const binArr = n.toString(2).split("");
  // 1の数を返す
  return binArr.filter((bin) => bin === "1").length;
}
// @lc code=end
