/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (35.75%)
 * Likes:    4380
 * Dislikes: 0
 * Total Accepted:    794.9K
 * Total Submissions: 2.2M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "a"
 * 输出："a"
 *
 *
 * 示例 4：
 *
 *
 * 输入：s = "ac"
 * 输出："a"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 仅由数字和英文字母（大写和/或小写）组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const max = s.length
  let back = [0, 0] // 返回的回文串两侧的指针
  let maxlength = 0 // 记录目前保存的最长回文串长度-1
  for (let i = 0; i < max - maxlength - 1; i++) { // 检测的左指针
    for (let j = i + 1; j < max; j++) { // 检测的右指针
      if (s[i] === s[j] && // 如果左右指针相等,检测其划定的字符串是否回文
        (j - i) > maxlength) { // 将检测当前可能是的回文串是否最长挪至前部
        let done = true // 制作回文判定
        const step = Math.floor((j - i) / 2) // n需要走的步数为(字符串的长度-1)/2
        for (let n = 1; n <= step; n++) {
          if (s[i + n] !== s[j - n]) {
            done = false // 如果划定范围内不构成回文,退出检测循环
            break
          }
        }
        if (done) { // 检测完毕仍构成回文
          back = [i, j] // 把当前找到的回文坐标填入记录
          maxlength = j - i
        }
      }
    }
  }
  return s.substring(back[0], back[1] + 1)
}
// @lc code=end
