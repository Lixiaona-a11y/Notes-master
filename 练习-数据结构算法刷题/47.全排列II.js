/*
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。

示例:

输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* @param {number[]} nums
* @return {number[][]}
*/
var permuteUnique = function(nums) {
  let result=[];
  let set=new Set();

  function dfs(temp,arrs){
    if(temp.length==nums.length){
      result.push(temp);
      return;
    }
    if(arrs.length==0){
      return;
    }

    for(let i=0;i<arrs.length;i++){
      var letter=arrs[i];
      var tempArrs=arrs.slice();
      tempArrs.splice(i,1);
      temp.push(letter);
      var s=temp.join('');
      if(!set.has(s)){
        set.add(s);
        dfs(temp.slice(),tempArrs)
      }
      temp.pop();
    }
  }
  dfs([],nums);
  return result;
};
var nums=[1,1,2];
console.log(permuteUnique(nums));
