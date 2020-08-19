/**
 * 
 * 一条包含字母 A-Z 的消息通过以下方式进行了编码：
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 给定一个只包含数字的非空字符串，请计算解码方法的总数。
 * 
 * 示例1:
 * 输入: "12"
 * 输出: 2
 * 解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
 * 
 * 示例2：
 * 输入: "226"
 * 输出: 3
 * 解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
   if(s[0]==="0") return 0;
   let len=s.length;
   let dp=new Array(len+1);
   dp[0]=1;dp[1]=1;
   for(let i=1;i<len;i++){
       if(s[i-1]!='0'){
           //a|0 相当于 parseInt(a,10);
           let num=(s[i-1]+s[i])|0;
           if(num=>1&&num<=26){
               dp[i+1]=s[i]!='0'?dp[i]+dp[i-1]:dp[i-1];
           }else if(s[i]!='0'){
               dp[i+1]=dp[i];
           }else{
               return 0;
           }
       }else if(s[i]!='0'){
           dp[i+1]=dp[i];
       }else{
           return 0;
       }
   }
   return dp[len];
};