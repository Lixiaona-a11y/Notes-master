function throttle(fn, delay) {
    let flag = true;
    return function() {
        if (!flag) return;
        flag = false;
        setTimeout(function() {
            fn.apply(this, argumennts);
            flag = true;
        }, delay)
    }
}