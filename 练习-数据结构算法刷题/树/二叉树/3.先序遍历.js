function preroot(root, callback) {
    if (root !== null) {
        callback(root.value);
        preroot(root.left, callback);
        preroot(root.right, callback);
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
console.log(preroot(root, callback));