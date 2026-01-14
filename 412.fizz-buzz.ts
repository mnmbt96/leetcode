/*
 * @lc app=leetcode id=412 lang=typescript
 *
 * [412] Fizz Buzz
 * https://leetcode.com/problems/fizz-buzz/description/
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
  let i = 1;
  const result = [];

  while (i <= n) {
    if (i % 3 === 0 && i % 5 === 0) {
      // 3と5両方で割り切れる
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      // 3で割り切れる
      result.push("Fizz");
    } else if (i % 5 === 0) {
      // 5で割り切れる
      result.push("Buzz");
    } else {
      // 上記以外
      result.push(String(i));
    }

    i++;
  }

  return result;
}
// @lc code=end
