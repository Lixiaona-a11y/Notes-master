function sort(arr) {
    let res = [],
        index;
    while (arr.length) {
        index = Math.floor(arr.length * Math.random());
        res.push(arr[index]);
        arr.splice(index, 1)
    }
    return res;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(sort(arr));