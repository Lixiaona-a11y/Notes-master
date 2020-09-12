function promiseAll(promiseArr) {
    if (!Array.isArray(promiseArr)) {
        return new TypeError("参数为数组");
    }
    return new Promise((resolve, reject) => {
        let resolveValues = [],
            resolveCount = 0;
        for (let i = 0; i < promiseArr.length; i++) {
            Promise.resolve(promiseArr[i]).then(res => {
                resolveCount++;
                resolveValues.push(res);
                if (resolveCount === promiseArr.length) {
                    resolve(resolveValues);
                }
            }, err => {
                reject(err);
            })
        }
    })
}


//用例
function test(text = "666", time = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(text)
        }, time)
    })
}

let p1 = test("p1", 3000);
let p2 = test("p2", 1000);
let p3 = test("p3", 2000);
let pArr = [p1, p2, p3];
promiseAll(pArr).then(res => {
    console.log("res", res);
}, err => console.log("err", err));