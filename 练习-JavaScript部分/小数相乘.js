function accMul(num1, num2) {
    let s1 = num1.toString(),
        s2 = num2.toString();
    let len1 = s1.split(".")[1].length || 0;
    let len2 = s2.split(".")[1].length || 0;
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, len1 + len2);
}

console.log(accMul(0.04, 0.03));