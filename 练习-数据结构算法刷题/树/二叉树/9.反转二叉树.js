//反转二叉树
function reverseRoot(root) {
    if (root == null) return;
    let temp = root.left;
    root.left = reverseRoot(root.right);
    root.right = reverseRoot(temp);
    return root;
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
console.log(reverseRoot(root));