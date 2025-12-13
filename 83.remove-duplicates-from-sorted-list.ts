/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next; // 重複スキップ
    } else {
      current = current.next; // 次へ
    }
  }

  return head;
}
// @lc code=end
