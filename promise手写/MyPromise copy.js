class MyPromise{
    constructor(callback){
        this.__succ_res=null;
        this.__err_res=null;
        this.status="pending";
        this.__queue=[];

        callback((...arg)=>{
            this.__succ_res=arg;
            this.status="fufilled";
            this.__queue.forEach(json=>json.reolve(...arg));
        },(...arg)=>{
            this.__err_res=arg;
            this.status="rejected";
            this.__queue.forEach(json=>json.reject(...arg));
        })
    }

    then(onFulfilled,onRejected){
        return new MyPromise((resFn,rejFn)=>{
            if(this.status==="fufilled"){
                handle(this.__succ_res);
            }else if(this.statue==="rejected"){
                errBack(this.__err_res);
            }else{
                this.__queue.push({
                    resolve:handle ,
                    reject:errBack
                })
            }

            function handle(value){
                let returnVal=onFulfilled instanceof Function && onFulfilled(value);
                if(returnVal&&returnVal['then']){
                    returnVal.then(res=>{
                        resFn(res);
                    },err=>{
                        rejFn(err);
                    })
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