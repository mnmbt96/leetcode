/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 * https://leetcode.com/problems/summary-ranges/description/
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  const result: string[] = [];
  if (nums.length === 0) {
    return result;
  }
  let start = nums[0];

  for (let i = 0; i < nums.length; i++) {
    // 配列の最後、または次の数字が連続していない
    if (i + 1 === nums.length || nums[i + 1] !== nums[i] + 1) {
      if (start === nums[i]) {
        // 開始と終了が同じ
        result.push(`${start}`);
      } else {
        // 連続していた場合
        result.push(`${start}->${nums[i]}`);
      }

      // 次のレンジの開始地点を更新
      if (i + 1 < nums.length) {
        start = nums[i + 1];
      }
    }
  }

  return result;
}

// @lc code=end
