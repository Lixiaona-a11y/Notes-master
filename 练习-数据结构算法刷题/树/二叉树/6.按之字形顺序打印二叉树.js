function zhiRoot(root) {
    if (!root) {
        return [];
    }
    let queue = [],
        result = [],
        flag = true;
    queue.push(root);
    while (queue.length) {
        let len = queue.length;
        let tempArr = [];
        for (let i = 0; i < len; i++) {
            let temp = queue.shift();
            tempArr.push(temp.value);
            temp.left && queue.push(temp.left);
            temp.right && queue.push(temp.right);
        }
        if (!flag) {
            tempArr.reverse();
        }
        flag = !flag;
        result.push(tempArr);
    }
    return result.flat();
}

let root = {
    left: {
        left: null,
        value: 1,
        right: {
            left: null,
            value: 3,
            right: null
        }
    },
    value: 2,
    right: {
        left: null,
        value: 5,
        right: null
    }
}
console.log(zhiRoot(root));