function isValid(str) {
    var stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            stack.push(')');
        } else if (str[i] == '{') {
            stack.push('}');
        } else if (str[i] == '[') {
            stack.push(']');
        } else if (str[i] !== stack.pop()) {
            return false;
        }
    }
    return !stack.length;
}

const str = '[{[(())]}]]';
console.log(isValid(str));