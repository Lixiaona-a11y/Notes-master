/***
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var lengthOfLIS = function(nums) {
    const len=nums.length;
    if(len==0) return 0;
    if(len==1) return 1;
    let dp=new Array(len).fill(1);
    for(let i=1;i<len;i++){
        for(let j=0;j<i;j++){
            dp[i]=Math.max(dp[i],(nums[j]<nums[i]?dp[j]+1:1));
        }
    }
    dp.sort((a,b)=>b-a);
    return dp[0];
};
const nums=[10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums));