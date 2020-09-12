function hex2rgb(str) {
    str = str.substr(1);
    let r, g, b, len = str.length;
    if (len === 6) {
        r = parseInt(str.substr(0, 2), 16);
        g = parseInt(str.substr(2, 2), 16);
        b = parseInt(str.substr(4, 2), 16);
    } else if (len === 3) {
        r = parseInt(str.substr(0, 1), 16);
        g = parseInt(str.substr(1, 1), 16);
        b = parseInt(str.substr(2, 1), 16);
    }

    return `rgb(${r},${g},${b})`;
}
console.log(hex2rgb('#FFe'));