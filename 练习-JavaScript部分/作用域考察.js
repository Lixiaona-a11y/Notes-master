let a=1;
let obj={
    b:2
}
let fn=function(){}
fn.c=3;
function test(x,y,z){
    x=4;
    y.b=5;
    z.c=6;
    return z;
}
test(a,obj,fn);
console.log(a+obj.b+fn.c);