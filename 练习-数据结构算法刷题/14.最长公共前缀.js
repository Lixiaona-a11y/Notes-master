/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"


示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0) return "";
    strs.sort((a,b)=>a.length-b.length);
    let viewLength=strs[0].length;
    for(let i=1;i<strs.length;i++){
        let flag=false;
        while(viewLength!==0&&flag===false){
            let viewItem=strs[0].substr(0,viewLength);
            let currentItem=strs[i].substr(0,viewLength);
            if(viewItem!==currentItem){
                viewLength--;
            }else{
                flag=true;
            }
        }
    }    
    return strs[0].substr(0,viewLength);
};
const strs=["flower","flow","flight"];
console.log(longestCommonPrefix(strs));