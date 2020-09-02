function toCamel(str) {
    return str.replace(/-[a-z]/g, $0 => $0.substr(1).toUpperCase());
}
console.log(toCamel('a-bs-sd'));