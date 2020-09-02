function flatten(arr) {
    return arr.reduce((newArr, item) => {
        return newArr.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}

let givenArr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];
console.log(flatten(givenArr));
console.log(givenArr.flat(Infinity));