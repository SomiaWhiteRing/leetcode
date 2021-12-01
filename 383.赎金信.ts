/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 *
 * https://leetcode-cn.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (60.88%)
 * Likes:    200
 * Dislikes: 0
 * Total Accepted:    82.1K
 * Total Submissions: 134.6K
 * Testcase Example:  '"a"\n"b"'
 *
 * 为了不在赎金信中暴露字迹，从杂志上搜索各个需要的字母，组成单词来表达意思。
 *
 * 给你一个赎金信 (ransomNote) 字符串和一个杂志(magazine)字符串，判断 ransomNote 能不能由 magazines
 * 里面的字符构成。
 *
 * 如果可以构成，返回 true ；否则返回 false 。
 *
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：ransomNote = "a", magazine = "b"
 * 输出：false
 *
 *
 * 示例 2：
 *
 *
 * 输入：ransomNote = "aa", magazine = "ab"
 * 输出：false
 *
 *
 * 示例 3：
 *
 *
 * 输入：ransomNote = "aa", magazine = "aab"
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote 和 magazine 由小写英文字母组成
 *
 *
 */

// @lc code=start
function canConstruct (ransomNote: string, magazine: string): boolean {
  const check = {} // 定义检查对象
  for (const i of magazine) {
    if (check[i] === undefined) { check[i] = 0 } // 如果检查对象上没有映射记录,则配置映射
    check[i] += 1 // 把magazine内的字符映射到检查对象上
  }
  for (const i of ransomNote) {
    if (check[i] === undefined || // 如果检查对象上没有映射记录,则异位不成立
    (check[i] -= 1) < 0) { // 把ransomNote内的字符从检查对象上剥离
      return false // 如果剥离后的结果小于0,异位也不成立
    }
  }
  return true // 满足以上所有条件,则异位成立
};
// @lc code=end
