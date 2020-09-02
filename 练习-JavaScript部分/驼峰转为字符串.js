function toLine(str) {
    return str.replace(/[A-Z]/g, $0 => `-${$0.toLowerCase()}`);
}
console.log(toLine('jAbCd'));