// 空间复杂度O(1)
// 平均：时间复杂度O(n2) 
// 最坏：时间复杂度O(n2) 
// 最好：时间复杂度O(n) 
// 稳定性：不稳定 
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            } else {
                continue;
            }
        }
    }
    return arr;
}
var array = [2, 4, 4, 1, 6, 7, 2, 1];
console.log(insertSort(array));