/**
 * 当前字符串中包含字母和数字，用一个方法实现做多的字母和数字
 * 1）如果只有字母，那么指返回出现最多的字母，只有数字情况同理
 * 2）如果有相同次数多的字母和数字出现，将按照第一次出现的顺序返回在列表中
 * 如下：
 * 字符串：var str='abcdccbdb58575'
 * 返回：["b","c","5"]
 */
function getMax(str) {
    let map = new Map(),
        res = [],
        maxCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (!map.has(str[i])) {
            map.set(str[i], 1);
        } else {
            map.set(str[i], map.get(str[i]) + 1);
        }
    }
    for (let val of map.values()) {
        if (maxCount < val) {
            maxCount = val;
        }
    }
    for (let key of map.keys()) {
        if (map.get(key) === maxCount) {
            res.push(key);
        }
    }
    return res;
}
console.log(getMax('abcdccbdb58575'));