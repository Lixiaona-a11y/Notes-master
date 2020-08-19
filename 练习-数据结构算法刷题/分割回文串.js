/***
 * 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

返回 s 所有可能的分割方案。

示例:

输入: "aab"
输出:
[
  ["aa","b"],
  ["a","a","b"]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-partitioning
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function checkRevert(str){
    return str.split('').reverse().join('')==str;
}

var partition = function(s) {
    let len=s.length;
    if(len==0) return [];
    let result=[];
    function dfs(temp,start){
        if(temp.join('')==s){
            result.push(temp);
        }
        for(let i=start+1;i<=len;i++){
            let line=s.substring(start,i);
            if(line&&checkRevert(line)){
                temp.push(line);
                dfs(temp.slice(0),i);
                temp.pop();
            }
        }
    }
    dfs([],0);
    return result;
};

console.log(partition('aab'));
