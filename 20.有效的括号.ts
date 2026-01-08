/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 *
 * https://leetcode.cn/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (45.32%)
 * Likes:    4866
 * Dislikes: 0
 * Total Accepted:    2.4M
 * Total Submissions: 5.3M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "()"
 * 
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "()[]{}"
 * 
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "(]"
 * 
 * 输出：false
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "([])"
 * 
 * 输出：true
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：s = "([)]"
 * 
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 仅由括号 '()[]{}' 组成
 * 
 * 
 */

// @lc code=start
function isValid(s: string): boolean {
  // 优化：剪枝：如果s的长度为奇数，直接判错。
  if (s.length % 2 === 1) return false
  // 定义堆栈
  const Stack: Array<string> = []
  // 快速获取栈顶
  // 优化：判断合一，无需单独建立函数
  // function getStackTop(): string {
  //   return Stack[Stack.length - 1]
  // }
  // 定义指针
  let point: number = 0
  // 指针开始遍历
  while (point < s.length) {
    switch (s[point]) {
      // 如果是左括号，将新字符推入栈
      // 优化：改为将反向字符入栈，简化判断
      case "(": Stack.push(")"); break;
      case "[": Stack.push("]"); break;
      case "{": Stack.push("}"); break;
      // 如果是右括号，先检测栈顶括号是否对应，对应则相消，不对应则报错
      case ")":
      case "]":
      case "}":
        if (Stack.pop() !== s[point]) return false;
        break;
    }
    // 指针后移
    point ++
  }
  // 如果栈为空，为真，否则为假
  return Stack.length === 0
};
// @lc code=end

