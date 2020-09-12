function getNodeNum(root) {
    if (!root) return 0;
    return getNodeNum(root.left) + getNodeNum(root.right) + 1;
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
console.log(getNodeNum(root));