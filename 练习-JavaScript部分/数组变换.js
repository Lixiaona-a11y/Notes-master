// ['abc', 'def', 'ghi'] => [ 'adg', 'beh', 'cfi' ]
let a = ['abc', 'def', 'ghi'];

function fn(arr) {
    let len = arr[0].length;
    let res = new Array(len).fill('');
    arr.forEach((item) => {
        for (let i = 0; i < len; i++) {
            res[i] += item[i];
        }
    })
    return res;
}
console.log(fn(a));