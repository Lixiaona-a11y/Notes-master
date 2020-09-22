/**
 * 存在的问题：
 * 
 * - 引用值共享,(改变了一个实例对象，另一个实例对象也跟着改变)
 * - 创建子类时无法向Parent传递参数
 */
function Parent1() {
    this.name = 'parent1';
    this.play = [1, 2, 3];
}

function Child1() {
    this.type = 'child1';
}

Child1.prototype = new Parent1();
Child1.prototype.constructor = Child1;

var s1 = new Child1();
var s2 = new Child1();

s1.play.push(4);

console.log(s1.play, s2.play);