var _dec, _class;

let MyClass = (_dec = log("hi"), _dec(_class = class MyClass {}) || _class);


function log(text) {
    return function (target) {
        target.prototype.logger = () => `${text},${target.name}被调用`;
    };
}

const test = new MyClass();
console.log(test.logger());
