function _sort(arr) {
    let array = ['赵', '钱', '孙', '李'];
    return arr.sort((a, b) => {
        return array.indexOf(a.substr(0, 1)) - array.indexOf(b.substr(0, 1))
    });
}

console.log(_sort(['孙静', '钱多多', '赵哈哈', '李逵', '赵敏']));