/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 奇数の場合はfalse
  if (s.length % 2 !== 0) {
    return false;
  }

  const pair = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (Object.keys(pair).includes(current)) {
      // 閉じ括弧の場合
      // stackの最後の要素を取り出し、pairと一致しているか確認
      if (stack.pop() !== pair[current]) {
        return false;
      }
    } else {
      // 開き括弧の場合
      // stackに括弧を入れる
      stack.push(current);
    }
  }

  return stack.length === 0;
};
// @lc code=end
