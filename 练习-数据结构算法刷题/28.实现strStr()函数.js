// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

// 示例 1:

// 输入: haystack = "hello", needle = "ll"
// 输出: 2


// 示例 2:

// 输入: haystack = "aaaaa", needle = "bba"
// 输出: -1
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let reg = new RegExp(`^${needle}`, "g");
    for (let i = 0; i < haystack.length; i++) {
        if (reg.test(haystack.slice(i))) {
            return i;
        }
    }
    return -1;
};

var haystack = 'hello';
var needle = "bba";
console.log(strStr(haystack, needle));