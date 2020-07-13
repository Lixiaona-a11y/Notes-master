// instanceof 是通过原型链判断的，A instanceof B, 在A的原型链中层层查找，是否有原型等于B.prototype，如果一直找到A的原型链的顶端null,仍然不等于B.prototype，那么返回false，否则返回true.
function instanceOf(x,y){
    while(x.__proto__!==null){
        if(x.__proto__===y.prototype){
            return true;
        }
        x=x.__proto__;
    }
    return false;
}
console.log(instanceOf(() => {}, Function)) // true