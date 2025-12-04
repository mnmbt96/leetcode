/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const list = new ListNode();
  // 現在のマージの位置（listの末尾を指す）
  let current = list;

  // list1とlist2が両方nullになるまでループ
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      // list1 が小さい場合：currentの次につなぎ、list1を進める
      current.next = list1;
      list1 = list1.next;
    } else {
      // list2 が小さい場合：currentの次につなぎ、list2を進める
      current.next = list2;
      list2 = list2.next;
    }
    // currentも次に進める
    current = current.next;
  }

  // どちらかのリストがまだ残っている場合、まとめてcurrentの末尾につなぐ
  current.next = list1 || list2;

  return list.next;
};
// @lc code=end
