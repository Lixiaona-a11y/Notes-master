var str = 'ada<option value="hh">0</option>54<div id="as">adda</div>ad';

// 1.匹配标签头部或尾部
var result1 = str.match(/<.*?>/g);
console.log(result1);

// 2.匹配标签头部
var result2 = str.match(/<[A-z].*?>/g);
console.log(result2);

// 3.匹配完整标签
var result3 = str.match(/<[A-z].*?>.*?<\/.*?>/g);
console.log(result3);