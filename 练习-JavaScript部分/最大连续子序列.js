function getNum(arr) {
    let sum = 0,
        max = 0;
    for (let num of arr) {
        if (sum < 0) sum = 0;
        sum += num;
        max = sum > max ? sum : sum;
    }
    return max;
}

const arr = [1, -5, 8, 3, -4, 15, 8];
console.log(getNum(arr));