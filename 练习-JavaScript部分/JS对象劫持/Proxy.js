let obj = { name: "jay", age: 12 };

let obj1 = new Proxy(obj, {
    get(target, key, receiver) {
        console.log(`get ${key}--${target[key]}`);
    },
    set(target, key, value) {
        console.log(`set ${target}--${target[key]}--${value}`)
    }
})

console.log(obj1.name);