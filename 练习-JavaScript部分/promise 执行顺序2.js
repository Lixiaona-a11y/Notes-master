
const first = () => (new Promise((resolve, reject) => {
    console.log(11111);
    const p = new Promise((resolve, reject) => {
        console.log('222222' + 'new Promise');
        setTimeout(() => {
            console.log(66666);
            resolve('77777--0000'); // 虽然这里又有一次p的 resolve 但是p的then的语句不会再执行了
        }, 0)
        resolve('4444444' + 'p');
    });
    resolve('555555' + 'first');
    p.then((arg) => {
        console.log(arg); // p 第一次被resolve后 第二次再resolve 不会再执行了
    });
}));

first().then((arg) => {
    console.log(arg);
});
console.log(333333);
// 上面有一点值得注意，就是p的状态一旦改变了(resolve)就不会再改变了，所以 resolve('77777--0000')不会执行了



















