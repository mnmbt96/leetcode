/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 * https://leetcode.com/problems/happy-number/description/
 */

// @lc code=start
function isHappy(n: number): boolean {
  let slow = n;
  let fast = getNext(n);

  // ウサギがカメに追いつく（同じ数字になる）までループ
  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow); // カメは1歩
    fast = getNext(getNext(fast)); // ウサギは2歩（次の次の数字）
  }

  // ウサギが1に到達すればHappy、追いついただけならループ
  return fast === 1;
}

// 桁の2乗和を計算する関数
function getNext(n: number): number {
  let totalSum = 0;
  while (n > 0) {
    const d = n % 10;
    n = Math.floor(n / 10);
    totalSum += d * d;
  }
  return totalSum;
}
// @lc code=end
