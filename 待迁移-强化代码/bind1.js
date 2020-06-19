Function.prototype.bind1=function(content=window){
    if(typeof this !=="function"){
        throw new Error("not a function");
    }
    let args=[...arguments].slice(1);
    let _this=this;
    let fNOP=function(){};
    var fbound=function(){
        _this.apply(this instanceof fbound?this:content,args.concat(...arguments));
    }
    fNOP.prototype=this.prototype;
    fbound.prototype=new fNOP();
    return fbound;
}

var foo={
    value:1
};
function bar(name,age){
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend='kevin';

var bindFoo=bar.bind1(foo,'daisy');

var obj=new bindFoo('18');
// console.log(obj);
// console.log(obj.friend);