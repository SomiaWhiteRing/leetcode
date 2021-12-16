/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 翻转字符串里的单词
 *
 * https://leetcode-cn.com/problems/reverse-words-in-a-string/description/
 *
 * algorithms
 * Medium (48.73%)
 * Likes:    411
 * Dislikes: 0
 * Total Accepted:    184.3K
 * Total Submissions: 377.7K
 * Testcase Example:  '"the sky is blue"'
 *
 * 给你一个字符串 s ，逐个翻转字符串中的所有 单词 。
 *
 * 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
 *
 * 请你返回一个翻转 s 中单词顺序并用单个空格相连的字符串。
 *
 * 说明：
 *
 *
 * 输入字符串 s 可以在前面、后面或者单词间包含多余的空格。
 * 翻转后单词间应当仅用一个空格分隔。
 * 翻转后的字符串中不应包含额外的空格。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "the sky is blue"
 * 输出："blue is sky the"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "  hello world  "
 * 输出："world hello"
 * 解释：输入字符串可以在前面或者后面包含多余的空格，但是翻转后的字符不能包括。
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "a good   example"
 * 输出："example good a"
 * 解释：如果两个单词间有多余的空格，将翻转后单词间的空格减少到只含一个。
 *
 *
 * 示例 4：
 *
 *
 * 输入：s = "  Bob    Loves  Alice   "
 * 输出："Alice Loves Bob"
 *
 *
 * 示例 5：
 *
 *
 * 输入：s = "Alice does not even like bob"
 * 输出："bob like even not does Alice"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 包含英文大小写字母、数字和空格 ' '
 * s 中 至少存在一个 单词
 *
 *
 *
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 请尝试使用 O(1) 额外空间复杂度的原地解法。
 *
 *
 */

// @lc code=start
function reverseWords (s: string): string {
  // 把字符串转化为字符数组
  const str: string[] = s.split('')
  let max: number = str.length

  // 去除额外空格
  let i: number = 0 // 定义会走到字符串尽头的快指针
  let j: number = 0 // 定义完成后会裁剪字符串的慢指针
  for (; i < max; i++) {
    if (!(str[i] === ' ' && (str[i - 1] === ' ' || i === 0))) {
      str[j++] = str[i]
    }
  }
  // 判断最后一个字符是否为空格
  str[j - 1] === ' ' ? str.splice(j - 1, str.length - j + 1) : str.splice(j, str.length - j)

  // 反转字符串
  max = str.length // 更新max
  i = -1; j = max // 反转时 把i与j放置为左右指针
  while (++i < --j) [str[i], str[j]] = [str[j], str[i]]

  // 反转单词
  let step: number = 1 // 记录要反转的单词的长度
  for (let n: number = 0; n < max; n++) { // 定义将数组从头扫到尾的n
    if (str[n + 1] === ' ' || n === max - 1) { // 如果n扫到了空格或者数组末尾 则进行单词反转
      i = n - step; j = n + 1
      while (++i < --j) { [str[i], str[j]] = [str[j], str[i]] }
      step = 1; n++
    } else {
      step++ // 如果没有出现需要翻转的情况,增加step储存的长度
    }
  }

  return str.join('')
};
// @lc code=end
