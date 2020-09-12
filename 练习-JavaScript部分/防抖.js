function debounce(fn, delay) {
    let timer = null;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(this, arguments);
        }, delay)
    }
}