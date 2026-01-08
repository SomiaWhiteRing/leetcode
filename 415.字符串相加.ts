/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 *
 * https://leetcode.cn/problems/add-strings/description/
 *
 * algorithms
 * Easy (55.03%)
 * Likes:    896
 * Dislikes: 0
 * Total Accepted:    399.1K
 * Total Submissions: 725.3K
 * Testcase Example:  '"11"\n"123"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 * 
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：num1 = "0", num2 = "0"
 * 输出："0"
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= num1.length, num2.length <= 10^4
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 * 
 * 
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  // 将字符串转换为堆栈
  // 优化：改为双指针法避免转换流程
  let num1Point: number = num1.length - 1
  let num2Point: number = num2.length - 1
  // 定义答案
  // 优化：改为数组避免转换开销
  let answer: Array<number> = []
  // 定义当前计算的数位
  let level: number = 0
  // 定义是否需要进位
  let carry: number = 0
  // 重复直到堆栈均为空
  // 优化：将进位加入判断条件
  while (num1Point >= 0 || num2Point >= 0 || carry !== 0) {
    // 当前需要追加的值
    let nowvalue: number = 
      (num1Point >= 0 ? +num1[num1Point] : 0) + 
      (num2Point >= 0 ? +num2[num2Point] : 0) + 
      carry
    // 如果nowvalue有两位，则将第一位拆出来进位
    carry = nowvalue >= 10 ? 1 : 0
    // 将当前值推入答案
    answer.push(nowvalue % 10)
    // 数位提升
    level ++
    // 指针后移
    num1Point --
    num2Point --
  }
  // 将数组转化成答案
  return answer.reverse().join("")
};
// @lc code=end

