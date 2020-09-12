function getknum(root, k) {
    if (root == null || k < 0) return;
    if (root !== null && k == 1) return 1;
    return getknum(root.left, k - 1) + getknum(root.right, k - 1);
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
console.log(getknum(root, 2));