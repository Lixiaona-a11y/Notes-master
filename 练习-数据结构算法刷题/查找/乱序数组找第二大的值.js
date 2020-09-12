function findSecond(arr) {
    let a = arr[0],
        b = arr[1];
    if (a < b) {
        [a, b] = [b, a];
    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > a) {
            b = a;
            a = arr[i];
        } else if (arr[i] < a && arr[i] > b) {
            b = arr[i];
        }
    }
    return b;
}

const arr = [5, 7, 24, 1, 3, 26, 45];
console.log(findSecond(arr));