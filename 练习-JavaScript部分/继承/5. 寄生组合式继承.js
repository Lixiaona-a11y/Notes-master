// 解决 组合继承的两次调用构造函数
function Parent(name) {
    this.name = name;
}
Parent.prototype.func = function() {
    console.log('继承成功');
}

function Child(age, ...args) {
    Parent.call(this, ...args);
    this.age = age;
}

(function() {
    var None = function() {};
    None.prototype = Parent.prototype;
    Child.prototype = new None();
    Child.prototype.constructor = Child;
})();

let child = new Child(18, '花花');
console.log(child);