function promiseRace(promiseArr) {
    if (!Array.isArray(promiseArr)) {
        return new TypeError("参数为数组");
    }
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseArr.length; i++) {
            Promise.resolve(promiseArr[i]).then(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
        }
    })
}

// 用例
function test(text = "666", delay = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(text);
        }, delay)
    })
}
let p1 = test("p1", 3000);
let p2 = test("p2", 1000);
let p3 = test("p3", 2000);
let pArr = [p1, p2, p3];
promiseRace(pArr).then(res => {
    console.log(res);
}, err => {
    console.log(err);
});