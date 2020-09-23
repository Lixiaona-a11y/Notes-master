// 普通方法
function numberWithCommas(x) {
    let xArr = x.toString().split('').reverse();
    for (let i = 1; i < xArr.length; i++) {
        if (i % 3 === 0) {
            xArr[i] += ',';
        }
    }
    return xArr.reverse().join('');
}

// 正则表达式法
function numberWithCommas1(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
console.log(numberWithCommas1('123456789876'));