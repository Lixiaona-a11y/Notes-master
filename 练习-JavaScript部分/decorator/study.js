@log("hi")
class MyClass {}

function log(text) {
    return function(target) {
        target.prototype.logger = () => `${text},${target.name}被调用`
    }

}

const test = new MyClass();
console.log(test.logger());