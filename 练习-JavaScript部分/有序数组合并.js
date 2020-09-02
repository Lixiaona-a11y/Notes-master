function merge(arr1, arr2) {
    let index1 = 0,
        index2 = 0,
        res = [];
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] > arr2[index2]) {
            res.push(arr2[index2++]);
        } else {
            res.push(arr1[index1++]);
        }
    }
    while (index1 < arr1.length) {
        res.push(arr1[index1++]);
    }
    while (index2 < arr2.length) {
        res.push(arr2[index2++]);
    }
    return res;
}

const arr1 = [1, 3, 4, 6, 7, 10];
const arr2 = [2, 4, 5, 5, 7, 8, 9];
console.log(merge(arr1, arr2));