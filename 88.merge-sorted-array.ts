/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/description/
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1; // nums1の実データの末尾
  let j = n - 1; // nums2の末尾
  let k = m + n - 1; // num1(結果)の全体の末尾

  // iとj両方にデータがある間は大きい方からkに入れる
  while (i >= 0 && j >= 0) {
    if (nums1[i] < nums2[j]) {
      nums1[k] = nums2[j];
      j--;
    } else {
      nums1[k] = nums1[i];
      i--;
    }
    k--;
  }

  // nums2に残りがある場合
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
// @lc code=end
