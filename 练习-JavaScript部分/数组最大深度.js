let count = 0;

function getDep(arr) {
    let p = arr.some(item => item.length > 0);
    if (p) {
        count++;
        getDep(arr.flat());
    }
    return count;
}

let arr = [1, [1, [3], 2], 2, [1], 3, 4];
console.log(getDep(arr));