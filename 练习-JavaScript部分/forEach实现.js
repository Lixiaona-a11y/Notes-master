Array.prototype.forEach1 = function(fn, context) {
    if (typeof fn !== "function") {
        throw new TypeError(fn + "is not a function");
    }
    for (let i = 0; i < this.length; i++) {
        fn.call(context, this[i], i, this);
    }
}

var arr = [1, 2, 3, 4, 5];
arr.forEach(function(item, index, array) {
    console.log(item);
})