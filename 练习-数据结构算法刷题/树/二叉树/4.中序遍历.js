function middleroot(root, callback) {
    if (root !== null) {
        middleroot(root.left, callback);
        callback(root.value);
        middleroot(root.right, callback);
    }
}

function callback(val) {
    console.log(val);
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
console.log(middleroot(root, callback));