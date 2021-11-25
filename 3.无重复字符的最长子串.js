/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let str = ''
  let maxLength = 0
  for(let k = 0 ;k < s.length ;k++ ){
    str = ''
    for(let i = k ;i < s.length ;i++ ){
      if (str.indexOf(s[i]) === -1){
        str += s[i]
        if(maxLength < str.length){
          maxLength =str.length
        }
      }else{
        str = ''
        break
      }
    }
  }
  return maxLength
};
// @lc code=end

