function bfs(root) {
    let queue = [],
        result = [];
    if (root !== null) {
        queue.push(root);
    }
    let pointer = 0;
    while (pointer < queue.length) {
        let temp = queue[pointer++];
        result.push(temp.value);
        temp.left && queue.push(temp.left);
        temp.right && queue.push(temp.right);
    }
    return result;
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
console.log(bfs(root));