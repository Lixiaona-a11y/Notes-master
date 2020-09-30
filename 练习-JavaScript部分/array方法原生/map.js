// var newArray=arr.map(callback(element,[,index[,array]])[,thisArg])
/**
 * callback:用来测试数组的每个元素的函数。返回true表示该元素通过测试，保留该元素，false则不保留。
 *          它接受以下三个参数：
 *       element:数组中当前正在处理的元素。
 *       index：正在处理的元素在数组中的索引。
 *       array：调用了filter的数组本身。
 *       thisArg:执行callback时，用this的值
 * 
 * 返回值：一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。
 */
Array.prototype._map = function(callback, thisArg) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(callback.call(thisArg, this[i], i, this));
    }
    return res;
}

console.log([1, 3, 4, 2, 4, 6, 7]._map((item) => {
    return item * 2;
}))