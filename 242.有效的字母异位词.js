/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (64.65%)
 * Likes:    458
 * Dislikes: 0
 * Total Accepted:    317.4K
 * Total Submissions: 490.9K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 *
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "rat", t = "car"
 * 输出: false
 *
 *
 *
 * 提示:
 *
 *
 * 1
 * s 和 t 仅包含小写字母
 *
 *
 *
 *
 * 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false // 如果两值长度不等,异位不成立
  const check = {} // 定义检查对象
  for (i in s) {
    if (check[s[i]] === undefined) { check[s[i]] = 0 } // 如果检查对象上没有映射记录,则配置映射
    check[s[i]] += 1 // 把s内的字符映射到检查对象上
  }
  for (i in t) {
    if (check[t[i]] === undefined || // 如果检查对象上没有映射记录,则异位不成立
    (check[t[i]] -= 1) < 0) { // 把t内的字符从检查对象上剥离
      return false // 如果剥离后的结果小于0,异位也不成立
    }
  }
  return true // 满足以上所有条件,则异位成立
}
// @lc code=end
