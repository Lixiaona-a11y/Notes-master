/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 示例：
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let result=[],
        str='',
        phone={
            2:['a','b','c'],
            3:['d','e','f'],
            4:['g','h','i'],
            5:['j','k','l'],
            6:['m','n','o'],
            7:['p','q','r','s'],
            8:['t','u','v'],
            9:['w','x','y','z']
        };
    function dfs(str,next_digits){
        if(next_digits.length===0){
            result.push(str);
            return;
        }
        for(let word of phone[next_digits[0]]){
            str+=word;
            dfs(str,next_digits.substring(1));
            str=str.substring(0,str.length-1);
        }
    }
    if(digits){
        dfs(str,digits);
    }
    return result;
};

console.log(letterCombinations('23'));