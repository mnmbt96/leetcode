/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 * https://leetcode.com/problems/number-of-1-bits/description/
 */

// @lc code=start
// function hammingWeight(n: number): number {
//   // 2進数に変換して配列に入れる
//   const binArr = n.toString(2).split("");
//   // 1の数を返す
//   return binArr.filter((bin) => bin === "1").length;
// }

function hammingWeight(n: number): number {
  let count = 0;

  while (n !== 0) {
    // nの「一番右の1」を0にする
    n &= n - 1;
    count++;
  }

  return count;
}
// @lc code=end
