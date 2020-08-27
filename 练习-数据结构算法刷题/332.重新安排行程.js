/**
 * 给定一个机票的字符串二维数组 [from, to]，子数组中的两个成员分别表示飞机出发和降落的机场地点，对该行程进行重新规划排序。所有这些机票都属于一个从 JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 开始。

说明:


	如果存在多种有效的行程，你可以按字符自然排序返回最小的行程组合。例如，行程 ["JFK", "LGA"] 与 ["JFK", "LGB"] 相比就更小，排序更靠前
	所有的机场都用三个大写字母表示（机场代码）。
	假定所有机票至少存在一种合理的行程。


示例 1:

输入: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
输出: ["JFK", "MUC", "LHR", "SFO", "SJC"]


示例 2:

输入: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
输出: ["JFK","ATL","JFK","SFO","ATL","SFO"]
解释: 另一种有效的行程是 ["JFK","SFO","ATL","JFK","ATL","SFO"]。但是它自然排序更大更靠后。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reconstruct-itinerary
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const res=['JFK'];//初始放入起点"JFK"
    const map={};

    for(const ticket of tickets){
        const [from,to]=ticket;
        if(!map[from]){
            map[from]=[];
        }
        map[from].push(to);
    }

    for(const city in map){ //每个城市的list按照字母顺序排序一下
        map[city].sort();
    }
    
    const dfs=(node,done)=>{ //node是当前访问的城市 done是已经用掉的机票数
        if(done==tickets.length){
            return true;
        }
        const nextNodes=map[node];
        if(!nextNodes||nextNodes.length===0){
            return false; 
        }
        for(let i=0;i<nextNodes.length;i++){
            const next=nextNodes[i];
            nextNodes.splice(i,1);
            res.push(next);
            if(dfs(next,done+1)){
                return true;
            }
            nextNodes.splice(i,0,next);
            res.pop();
        }
    }
    dfs('JFK',0)
    return res;
};
let tickets=[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
console.log(findItinerary(tickets));