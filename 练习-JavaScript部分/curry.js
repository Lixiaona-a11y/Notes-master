// ES5写法
function curry(fn, ...args) {
    if (fn.length > args.length) {
        return function() {
            return curry(fn, ...args, ...arguments);
        }
    } else {
        return fn(...args);
    }
}

// ES6写法
const _curry = (fn, ...args) =>
    args.length < fn.length ? (...arguments) => _curry(fn, ...args, arguments) : fn(...args);


function add(a, b) {
    return a + b;
}

var curryAdd = currying(add);
console.log(curryAdd(1)(2));