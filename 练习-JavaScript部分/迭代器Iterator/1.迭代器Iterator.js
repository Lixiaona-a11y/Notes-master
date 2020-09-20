// 可以供 for...of 消费的原生数据结构
// 1.Array
// 2.Map
// 3.Set
// 4.String
// 5.TypedArray（一种通用的固定长度缓冲区类型，允许读取缓冲区中的二进制数据）
// 6.函数中的 arguments 对象
// 7. NodeList 对象
// 可以看上面的原生数据结构中并没有对象（Object），为什么呢？
// 那是因为对象属性的遍历先后顺序是不确定的，需要开发者手动指定。本质上，遍历器是一种线性处理，对于任何非线性的数据结构，部署遍历器接口就等于部署一种线性变换。

// 可迭代对象有Symbol.iterator属性，即具有Symbol.iterator属性的对象都有默认迭代器

// 可以用Symbol.iterator来检测对象是否为可迭代对象
function isIterator(obj) {
    return typeof obj[Symbol.iterator] === "function";
}

console.log(isIterator([11, 22, 33]));
console.log(isIterator('something'));
console.log(isIterator(new Map()))
console.log(isIterator(new Set()));
console.log(isIterator(new WeakMap()));
console.log(isIterator(new WeakSet()));