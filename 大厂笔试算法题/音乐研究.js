function difference(str1, str2) {
    let sum = 0;
    for (let i = 0; i < str1.length; i++) {
        sum += Math.pow((Number(str1[i]) - Number(str2[i])), 2);
    }
    return sum;
}

function getMinDiff(lowMusic, highMusic, N, M) {
    let str = '',
        result = [];
    for (let i = 0; i < M - 1; i++) {
        let j = i;
        while (j - i < N) {
            str += highMusic[j++];
        }
        result.push(difference(lowMusic, str));
        str = '';
    }
    return result.sort((a, b) => a - b)[0];
    // return result;
}

console.log(getMinDiff('12', '31024', 2, 5));