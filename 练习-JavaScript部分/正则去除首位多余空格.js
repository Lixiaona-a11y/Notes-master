function trim(str) {
    var reg = /^\s+|\s+$/;
    return str.replace(reg, '');
}

let str = "    hello  ";
console.log(str);
console.log(trim(str));