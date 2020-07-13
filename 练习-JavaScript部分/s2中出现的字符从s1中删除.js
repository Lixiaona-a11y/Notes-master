// 给定两个字符串s1 s2,s2出现的字符从s1中删除
function remove(s1,s2){
    for(let i=0;i<s2.length;i++){
        var reg=new RegExp(s2[i],"g");
        if(reg.test(s1)){
            s1=s1.replace(reg,'');
        }
    }
    return s1;
}

var s1="hahahhahha1231231231";
var s2="aaa1222222"
console.log(remove(s1,s2));