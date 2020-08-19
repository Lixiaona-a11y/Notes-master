Function.prototype.bind1=function(content=window){
    let _this=this;
    let args=[...arguments].slice(1);
    let fNOP=function(){};
    function fbound(){
        //判断是否被当作构造函数，当作为构造函数时，传入时指定的this值会失效，this会指向实例本身，但是传入的参数依然生效
        return _this.apply(this instanceof fbound?this:content,args.concat([...arguments]));
    }   
    fNOP.prototype=this.prototype;
    fbound.prototype=new fNOP();
    return fbound;
}

var foo={
    value:1
};

function bar(name,age){
    this.value=3;
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend='kevin';

var binFoo=bar.bind1(foo,'daisy');

var obj=new binFoo('18');
console.log(obj);