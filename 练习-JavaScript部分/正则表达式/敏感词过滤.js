// 比如：“我草你妈哈哈背景天胡景涛哪肉涯剪短发欲望”
// 过滤：‘草肉欲胡景涛’
var str = '我草你妈哈哈背景天胡景涛哪肉涯剪短发欲望';
var res = str.replace(/草|肉|欲|胡|景|涛/g, '*');
console.log(res);