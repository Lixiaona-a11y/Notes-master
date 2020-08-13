class MyPromise {
    constructor(callback) {
        this.__succ_res = null;//保存成功的返回结果
        this.__err_res = null;
        this.status = "pending";
        this.__queue = [];

        callback((...arg) => {
            this.__succ_res = arg;
            this.status = "fufilled";
            this.__queue.forEach(json => { json.resolve(...arg) });
        }, (...arg) => {
            this.__err_res = arg;
            this.status = "rejected";
            this.__queue.forEach(json => { json.reject(...arg) });
        })
    }

    then(onFullfilled, onRejected) {
        return new MyPromise((resFn, rejFn) => {
            if (this.status === "fufilled") {
                handle(this.__succ_res);
            } else if (this.status === "rejected") {
                errBack(this.__err_res);
            } else {
                this.__queue.push(
                    {
                        resolve: handle,
                        reject: errBack
                    }
                )
            }

            function handle(value) {
                let returnVal = onFullfilled instanceof Function && onFullfilled(value);
                if (returnVal && returnVal["then"] instanceof Function) {
                    returnVal.then(res => {
                        resFn(res)
                    },err=>{
                        rejFn(err);
                    }
                    )
                }else{
                    resFn(returnVal);
                }
            }

            function errBack(reason){
                if(onRejected instanceof Function){
                    let returnVal=onRejected(reason);
                    if(returnVal&&returnVal["then"] instanceof Function){
                        returnVal.then(res=>{
                            resFn(res);
                        },err=>{
                            rejFn(err);
                        })
                    }
                }else{
                    rejFn(reason);
                }
            }
        })
    }
}