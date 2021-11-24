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
var addTwoNumbers = function(l1, l2) {
  let answer = []
  let plusLabel = 0
  for(let i = 0;l1[i] !== undefined && l2[i] !== undefined; i++){
    if(l1[i] === undefined){l1[i] = 0}
    if(l2[i] === undefined){l2[i] = 0}
    let release = l1[i] + l2[i] + plusLabel
    plusLabel = 0
    if(release >= 10){
      release -= 10
      plusLabel = 1
    }
    answer.push(release)
  }
  return(answer)
};
// @lc code=end

