// 方法一：递归
function deepClone1(origin,target){
    var target=target||{};
    for(let key in origin){
        if(origin.hasOwnProperty(key)){
            if(Array.isArray(origin[key])){
                target[key]=[];
                deepClone1(origin[key],target[key]);
            }else if(Object.prototype.toString.call(origin[key])==="[object Object]"){
                target[key]={};
                deepClone1(origin[key],target[key]);
            }else{
                target[key]=origin[key];
            }
        }     
    }
    return target;
}

// 方法2：技巧
function deepClone2(origin){
    return JSON.parse(JSON.stringify(origin));
}

var obj={
    a:1,
    b:{
        c:2,
        d:3
    },
    f:[123,456,677]
};
console.log(deepClone2(obj));