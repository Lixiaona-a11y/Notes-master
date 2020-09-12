// 空间复杂度O(1)
// 平均：时间复杂度O(n2) 
// 最坏：时间复杂度O(n2) 
// 最好：时间复杂度O(n) 
// 稳定性：稳定
function bubbleSort(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                count++;
            }
        }
    }
    console.log(count);
    return arr;
}

let array = [4, 29, 10, 19, 2, 7];
console.log(bubbleSort(array));