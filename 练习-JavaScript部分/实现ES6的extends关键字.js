function B(name){
    this.name=name;
}

function A(name,age){
    // 1.将A的原型链指向B
    _extends(A,B);
    // 2.用A的实例作为this调用B,得到继承B之后的实例，这一步相当于调用super
    Object.getPrototypeOf(A).call(this,name);
    // 3.将A原有的属性添加到新实例上
    this.age=age;
    // 4.返回新实例对象
    return this;
}

function _extends(A,B){
    A.prototype.__proto__=B.prototype;
    A.prototype.constructor=A;
    Object.setPrototypeOf(A,B);
}

var a=new A("wxp",18);
console.log(a);