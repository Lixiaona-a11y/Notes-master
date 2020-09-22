function factorial(num) {
    return tailFactorial(num, 1);
}

function tailFactorial(num, total) {
    if (num === 1) return total;
    return tailFactorial(num - 1, total * num);
}
console.log(factorial(5));