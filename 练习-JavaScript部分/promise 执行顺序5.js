var p1 = new Promise(function(resolve, reject){
  resolve(Promise.resolve('resolve'));
});

var p2 = new Promise(function(resolve, reject){
  resolve(Promise.reject('reject'));
});

var p3 = new Promise(function(resolve, reject){
  reject(Promise.resolve('resolve'));
});

p1.then(
  function fulfilled(value){
    console.log('p1 fulfilled: ' + value);
  },
  function rejected(err){
    console.log('p1 rejected: ' + err);
  }
);

p2.then(
  function fulfilled(value){
    console.log('p2 fulfilled: ' + value);
  },
  function rejected(err){
    console.log('p2 rejected: ' + err);
  }
);

p3.then(
  function fulfilled(value){
    console.log('p3 fulfilled: ' + value);
  },
  function rejected(err){
    console.log('p3 rejected: ' + err);
  }
);
// 1、为啥p3在最后写 却最先执行了 因为p3 执行的是reject 所以其不需要进行拆箱，因此不会像p1和p2 那样需要拆箱才能异步拿到结果；
// 2、为啥p2 没有执行 fulfilled 回调 因为 p2 在创建时 拆箱得到的结果是reject 因此走的是 rejected 函数的回调而不是fulfilled ；
