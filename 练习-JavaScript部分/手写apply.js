Function.prototype.apply1=function(content=window){
    content.fn=this;
    let result;
    if(arguments[1]){
        result=content.fn(...arguments[1]);
    }else{
        result=content.fn();
    }
    delete content.fn;
    return result;
}

function Parent(name,age){
    this.name=name;
    this.age=age;
}

function Son(){
    Parent.apply1(this,['老李',70]);
}

console.log(new Son());