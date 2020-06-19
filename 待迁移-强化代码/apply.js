Function.prototype.apply1=function(content=window){
    content.fn=this;
    let args=arguments[1];
    let result;
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
    getMess:function(hobby1,hobby2){
        console.log(this.name+"====>"+this.age+"===>"+hobby1+hobby2);
    }
}

obj2.getMess.apply1(obj1,["游泳","打篮球"]);