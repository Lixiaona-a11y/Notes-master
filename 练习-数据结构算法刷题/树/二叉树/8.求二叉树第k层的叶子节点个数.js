//求二叉树第k层的叶子节点数
function getksonnum(root, k) {
    if (root == null || k < 0) return;
    if (root !== null && k == 1) {
        if (root.left == null && root.right == null) {
            return 1;
        } else {
            return 0;
        }
    }
    return getksonnum(root.left, k - 1) + getksonnum(root.right, k - 1);
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
console.log(getksonnum(root, 2));