/**
 * 解决：原型继承中无法向Parent传递参数的问题
 * 
 * 缺点：1.公共方法全部定义在构造函数中，会导致每个实例对象内存浪费
 *      2.原型链上的东西并没有被继承
 */
function Parent2() {
    this.name = 'parent2';
}

Parent2.prototype.say = function() {
    console.log('say');
}

function Child2() {
    Parent2.call(this);
    this.type = 'child2';
}

console.log(new Child2());
console.log(new Child2().say());