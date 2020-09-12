var obj = { name: 'jay', age: 18 };

Object.defineProperty(obj, "b", {
    get() {
        console.log("get name");
        return obj.name;
    },
    set(newVal) {
        console.log("set name", newVal);
        obj.name = newVal
    },
    enumerable: true,
    configurable: true
})

obj.b = "amy";
console.log(obj.b);