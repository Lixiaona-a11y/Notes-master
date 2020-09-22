function fuzzyQuery(list, keyWord) {
    var reg = new RegExp(keyWord);
    var arr = [];
    for (let i = 0; i < list.length; i++) {
        if (reg.test(list[i])) {
            arr.push(list[i]);
        }
    }
    return arr;
}
var list = ['key', 'word', 'keyWord', 'hello', 'hell'];
console.log(fuzzyQuery(list, 'hel'));