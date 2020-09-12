Function.prototype.call1 = function(content = window) {
    content.fn = this;
    let result;
    let args = [...arguments].slice(1);
    if (args.length) {
        result = content.fn(...args);
    } else {
        result = content.fn();
    }
    delete content.fn;
    return result;
}

function Parent(name, age) {
    this.name = name;
    this.age = age;
}

function Son() {
    Parent.call1(this, '老李', 60);
}

console.log(new Son());