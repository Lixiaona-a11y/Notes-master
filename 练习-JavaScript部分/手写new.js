/**
 * 测试用例：
 * function Son () {
 *   ...
 * }
 * let son = myNew(Son,name)
 */
function myNew(fn, ...args) {
    let obj = {};
    obj.__proto__ = fn.prototype;
    let result = fn.apply(obj, args);
    return result instanceof Object ? result : obj;
}