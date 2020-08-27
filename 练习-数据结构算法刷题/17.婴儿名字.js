/**
 * 每年，政府都会公布一万个最常见的婴儿名字和它们出现的频率，也就是同名婴儿的数量。有些名字有多种拼法，例如，John 和 Jon 本质上是相同的名字，但被当成了两个名字公布出来。给定两个列表，一个是名字及对应的频率，另一个是本质相同的名字对。设计一个算法打印出每个真实名字的实际频率。注意，如果 John 和 Jon 是相同的，并且 Jon 和 Johnny 相同，则 John 与 Johnny 也相同，即它们有传递和对称性。

在结果列表中，选择字典序最小的名字作为真实名字。

示例：

输入：names = ["John(15)","Jon(12)","Chris(13)","Kris(4)","Christopher(19)"], synonyms = ["(Jon,John)","(John,Johnny)","(Chris,Kris)","(Chris,Christopher)"]
输出：["John(27)","Chris(36)"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/baby-names-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/baby-names-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {string[]} names
 * @param {string[]} synonyms
 * @return {string[]}
 */
var trulyMostPopular = function(names, synonyms) {
    let parent={};
    let sum={};
    for(let i=0;i<names.length;i++){
        let nameStr=names[i].split("(")
        let name=nameStr[0];
        sum[name]=parseInt(nameStr[1].slice(0,nameStr[1].length-1));
        parent[name]=name;
    }
    const findParent=(p)=>{
        while(parent[p]!=p){
            p=parent[p];
        }
        return p;
    }

    const union=(p,q)=>{
        let rootP=findParent(p),rootQ=findParent(q);
        if(rootP===rootQ) return;
        [rootP,rootQ]=[rootP,rootQ].sort();
        parent[rootQ]=rootP;
        sum[rootP]+=sum[rootQ];
    }
    for(let i=0;i<synonyms.length;i++){
        let namesArr=synonyms[i].slice(1,synonyms[i].length-1).split(',');
        let p=namesArr[0],q=namesArr[1];
        if(!parent[p]){
            parent[p]=p;
            sum[p]=0;
        } 
        if(!parent[q]){
            parent[q]=q;
            sum[q]=0;
        } 
        union(p,q);
    }
    let result=[...new Set(Object.keys(parent).map(item=>parent[item]))];
    result=result.map(item=>`${item}(${sum[item]})`);
    return result;
};

let names=["John(15)","Jon(12)","Chris(13)","Kris(4)","Christopher(19)"];
let synonyms = ["(Jon,John)","(John,Johnny)","(Chris,Kris)","(Chris,Christopher)"];
console.log(trulyMostPopular(names,synonyms));