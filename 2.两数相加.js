/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let plus = 0
  const answer = new ListNode('')
  let l3 = answer
  while (l1 || l2 || plus) {
    const v1 = l1 ? l1.val : 0
    const v2 = l2 ? l2.val : 0
    const submit = v1 + v2 + plus
    console.log(v1 + '+' + v2 + '+' + plus + '=' + submit)
    l3.next = new ListNode(submit % 10)
    submit >= 10 ? plus = 1 : plus = 0
    if (l1) { l1 = l1.next }
    if (l2) { l2 = l2.next }
    l3 = l3.next
  }
  return answer.next
}
// @lc code=end
