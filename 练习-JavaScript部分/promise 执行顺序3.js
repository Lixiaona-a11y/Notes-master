var p1 = new Promise(function (resolve, reject) {
    foo.bar();
    resolve(1);
});

p1.then(
    function (value) {
        console.log('p1 then value: ' + value);//
    },
    function (err) {
        console.log('p1 then err: ' + err);
    }
).then(
    function (value) {
        console.log('p1 then then value: ' + value); //
    },
    function (err) {
        console.log('p1 then then err: ' + err);
    }
);

var p2 = new Promise(function (resolve, reject) {
    resolve(2);
});

p2.then(
    function (value) {
        console.log('p2 then value: ' + value);
        foo.bar();
    },
    function (err) {
        console.log('p2 then err: ' + err);
    }
).then(
    function (value) {
        console.log('p2 then then value: ' + value);
    },
    function (err) {
        console.log('p2 then then err: ' + err);
        return 1;
    }
).then(
    function (value) {
        console.log('p2 then then then value: ' + value);
    },
    function (err) {
        console.log('p2 then then then err: ' + err);
    }
);  

// 上面值得注意的是 p1、 p2 的多级then回调函数是交替进行的