// 总结方法运行耗时：普通递归>改进递归>for循环
function fibonacci(n) {
    let n1 = 1,
        n2 = 1;
    for (let i = 2; i < n; i++) {
        [n1, n2] = [n2, n1 + n2];
    }
    return n2;
}

console.log(fibonacci(8));