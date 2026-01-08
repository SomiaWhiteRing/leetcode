/*
 * @lc app=leetcode.cn id=165 lang=typescript
 *
 * [165] 比较版本号
 *
 * https://leetcode.cn/problems/compare-version-numbers/description/
 *
 * algorithms
 * Medium (55.22%)
 * Likes:    489
 * Dislikes: 0
 * Total Accepted:    237.6K
 * Total Submissions: 430.2K
 * Testcase Example:  '"1.2"\n"1.10"'
 *
 * 给你两个 版本号字符串 version1 和 version2 ，请你比较它们。版本号由被点 '.' 分开的修订号组成。修订号的值 是它 转换为整数
 * 并忽略前导零。
 * 
 * 比较版本号时，请按 从左到右的顺序 依次比较它们的修订号。如果其中一个版本字符串的修订号较少，则将缺失的修订号视为 0。
 * 
 * 返回规则如下：
 * 
 * 
 * 如果 version1 < version2 返回 -1，
 * 如果 version1 > version2 返回 1，
 * 除此之外返回 0。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：version1 = "1.2", version2 = "1.10"
 * 
 * 输出：-1
 * 
 * 解释：
 * 
 * version1 的第二个修订号为 "2"，version2 的第二个修订号为 "10"：2 < 10，所以 version1 <
 * version2。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：version1 = "1.01", version2 = "1.001"
 * 
 * 输出：0
 * 
 * 解释：
 * 
 * 忽略前导零，"01" 和 "001" 都代表相同的整数 "1"。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：version1 = "1.0", version2 = "1.0.0.0"
 * 
 * 输出：0
 * 
 * 解释：
 * 
 * version1 有更少的修订号，每个缺失的修订号按 "0" 处理。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= version1.length, version2.length <= 500
 * version1 和 version2 仅包含数字和 '.'
 * version1 和 version2 都是 有效版本号
 * version1 和 version2 的所有修订号都可以存储在 32 位整数 中
 * 
 * 
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
  // 定义指针。
  let v1pointer: number = 0
  let v2pointer: number = 0
  // 只要有一个指针还没超出范围，循环就会继续。
  while (v1pointer < version1.length || v2pointer < version2.length) {
    // 在新层次下，版本号默认为0。
    let v1num: number = 0
    let v2num: number = 0
    // 开始计算在这一层次下的版本号，直到层次结束或超出范围为止。
    while (v1pointer < version1.length && version1[v1pointer] !== ".") {
      v1num = 10 * v1num + Number(version1[v1pointer])
      v1pointer++
    }
    while (v2pointer < version2.length && version2[v2pointer] !== ".") {
      v2num = 10 * v2num + Number(version2[v2pointer])
      v2pointer++
    }
    // 结算这一层次。
    if (v1num < v2num) return -1
    if (v1num > v2num) return 1
    // 若这一层次相等，指针前往下一层次。
    v1pointer++
    v2pointer++
  }
  // 所有层次均相等。
  return 0
};
// @lc code=end

