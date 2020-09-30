// 求两个日期中间的有效日期
// 如 2015-2-8 到 2015-3-3，返回【2015-2-8 2015-2-9…】
function getBetweenDateStr(startDay, endDay) {
    const result = [];
    const dayTimes = 24 * 60 * 60 * 1000;
    const startTime = new Date(startDay).getTime();
    const range = new Date(endDay).getTime() - startTime;
    let total = 0;
    while (total <= range) {
        result.push(new Date(startTime + total).toLocaleDateString());
        total += dayTimes;
    }
    return result;
}

console.log(getBetweenDateStr('2020-02-02', '2020-03-02'));