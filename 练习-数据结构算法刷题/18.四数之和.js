var fourSum = function(nums, target) {
    let result = [];
    nums = nums.sort((a, b) => a - b);

    function dfs(temp, start) {
        if (temp.length == 4) {
            if (equalTarget(temp, target)) {
                result.push(temp);
            }
            return;
        }
        let r;
        for (let i = start; i < nums.length; i++) {
            if (r === nums[i]) continue;
            r = nums[i];
            temp.push(nums[i]);
            dfs(temp.slice(), i + 1);
            temp.pop();
        }
    }
    dfs([], 0);
    return result;
};

function equalTarget(arr, target) {
    return arr.reduce((res, item) => {
        return res += item;
    }, 0) == target;
}

const nums = [1, 0, -1, 0, -2, 2];
console.log(fourSum(nums, 0));