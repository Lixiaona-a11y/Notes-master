// 空间复杂度O(1)
// 平均：时间复杂度O(nlogn) 
// 最坏：时间复杂度O(n2) 
// 最好：时间复杂度O(nlogn) 
// 稳定性：不稳定
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivotIndex = Math.floor(arr.length / 2),
        pivot = arr.splice(pivotIndex, 1)[0],
        left = [],
        right = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

const arr1 = [7, 4, 9, 25, 74, 24, 65, 21];
console.log(quickSort(arr1));