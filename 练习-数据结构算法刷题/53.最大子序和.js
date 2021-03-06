/***
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp=new Array(nums.length);
    dp[0]=nums[0];
    for(let i=1;i<nums.length;i++){
        if(dp[i-1]>=0){
            dp[i]=dp[i-1]+nums[i];
        }else{
            if(nums[i]>=0) dp[i]=nums[i];
            if(nums[i]<0){
                dp[i]=dp[i-1]<=nums[i]?nums[i]:dp[i-1];
            }
        }
    }
    return dp.sort((a,b)=>b-a)[0];
};
var nums=[-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));