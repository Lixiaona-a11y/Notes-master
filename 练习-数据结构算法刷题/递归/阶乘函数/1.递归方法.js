function factiorial(n) {
    if (n <= 2) return n;
    return n * factiorial(n - 1);
}

console.log(factiorial(5));