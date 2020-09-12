function binarySearch(arr, pivot) {
    let start = 0,
        end = arr.length - 1,
        middle;
    while (start <= end) {
        middle = Math.floor((end + start) / 2);
        if (arr[middle] === pivot) {
            return middle;
        } else if (arr[middle] < pivot) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

const arr = [1, 3, 4, 5, 6, 7, 8];
console.log(binarySearch(arr, 5));