// 1.将两个数组转成字符串比较
console.log([1, 2, 3].toString());
// 1.1.但是发现他们只是顺序不相等也被当做不相等
console.log([1, 2, 3].toString() == [3, 2, 1].toString());
// 1.2.可以先把数组排序按照从小到大的顺序排序sort()函数
console.log([1, 2, 3].sort().toString() == [3, 2, 1].sort().toString());


// 如果数组的元素是标量,非object类型,可以使用==比较数组里的元素
var scalarArrayEquals = function (array1, array2) {
    return array1.length == array2.length && array1.every(function (item, key) {
        return item === array2[key];
    })
}
var a=[1,3,4];
var b=[1,3,4];
var c=[1,4,3];

console.log(scalarArrayEquals(a,b));
console.log(scalarArrayEquals(a,c));