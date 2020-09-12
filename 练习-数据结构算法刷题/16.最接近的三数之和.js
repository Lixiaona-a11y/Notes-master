/**
 * 难度
中等

561





给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 
示例：
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let result = [],
        minIndex = 0;
    nums = nums.sort((a, b) => a - b);

    function dfs(temp, start) {
        if (temp.length === 3) {
            result.push(temp);
            return;
        }
        let r;
        for (let i = start; i < nums.length; i++) {
            if (nums[i] === r) continue;
            r = nums[i];
            temp.push(nums[i]);
            dfs(temp.slice(), i + 1);
            temp.pop();
        }
    }
    dfs([], 0);
    resMap = result.map(item => {
        return item.reduce((sum, item) => {
            return sum += item;
        }, 0);
    });
    for (let i = 1; i < resMap.length; i++) {
        if (Math.abs(resMap[minIndex] - target) > Math.abs(resMap[i] - target)) {
            minIndex = i;
        }
    }
    return resMap[minIndex];
};
const nums = [-1, 2, 1, -4];
const target = 1;
console.log(threeSumClosest(nums, target));