Function.prototype.call1=function(content=window){
    content.fn=this;
    let result;
    let args=[...arguments].slice(1);
    if(args){
        result=content.fn(...args);
    }else{
        result=content.fn();
    }
    delete content.fn;
    return result;
}


var obj1={
    name:"老李",
    age:50
}

var obj2={
    name:"老伍",
    age:51,
    getMess:function(hobby){
        console.log(this.name+"====>"+this.age+"===>"+hobby);
    }
}

obj2.getMess.call1(obj1);
