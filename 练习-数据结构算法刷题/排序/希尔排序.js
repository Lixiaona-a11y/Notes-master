// 空间复杂度O(1)
// 平均：时间复杂度O(n1.3) 
// 最坏：时间复杂度O(n2) 
// 最好：时间复杂度O(n) 
// 稳定性：不稳定
function shellSort(arr, gap) {
    for (let i = 0; i < gap.length; i++) {
        let n = gap[i];
        for (let j = 0; j < arr.length; j++) {
            for (let k = j; k >= 0; k -= n) {
                if (arr[k - n] > arr[k]) {
                    [arr[k - n], arr[k]] = [arr[k], arr[k - n]];
                } else {
                    continue;
                }
            }
        }
    }
    return arr;
}

const arr = [34, 23, 64, 32, 21, 11, 8, 9, 77];
console.log(shellSort(arr, [4, 2, 1]));