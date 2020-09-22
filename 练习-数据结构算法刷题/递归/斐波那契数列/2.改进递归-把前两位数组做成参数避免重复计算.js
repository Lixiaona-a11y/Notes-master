function fibonacci(n) {
    function fib(n, v1, v2) {
        if (n === 1) return v1;
        if (n === 2) return v2;
        return fib(n - 1, v2, v1 + v2);
    }
    return fib(n, 1, 1);
}
console.log(fibonacci(8));