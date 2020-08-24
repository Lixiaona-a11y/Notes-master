/**
 * 
 班上有 N 名学生。其中有些人是朋友，有些则不是。他们的友谊具有是传递性。如果已知 A 是 B 的朋友，B 是 C 的朋友，那么我们可以认为 A 也是 C 的朋友。所谓的朋友圈，是指所有朋友的集合。
 给定一个 N * N 的矩阵 M，表示班级中学生之间的朋友关系。如果M[i][j] = 1，表示已知第 i 个和 j 个学生互为朋友关系，否则为不知道。你必须输出所有学生中的已知的朋友圈总数。

 

示例 1：

输入：
[[1,1,0],
 [1,1,0],
 [0,0,1]]
输出：2 
解释：已知学生 0 和学生 1 互为朋友，他们在一个朋友圈。
第2个学生自己在一个朋友圈。所以返回 2 。


示例 2：

输入：
[[1,1,0],
 [1,1,1],
 [0,1,1]]
输出：1
解释：已知学生 0 和学生 1 互为朋友，学生 1 和学生 2 互为朋友，所以学生 0 和学生 2 也是朋友，所以他们三个在一个朋友圈，返回 1 。


 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/friend-circles
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 *  - 因为矩阵是n*n的，所以是n个人之间的关系，创建一个长度为n的数组，表示初始化的n个独立的集合，自己是自己的集合代表(parent), 此时集合数量count = n
 *  - 遍历矩阵M，如果i,j两个人的关系 M[i][j] == 1，那就找到他们各自的集合代表，如果不一致，就合并为一个集合，因为他们是一个共同的朋友圈
 *  - 返回集合数量
 */
const findCircleNum=(M)=>{
    if(!M.length) return 0;
    let n=M.length,count=n;
    let parent=new Array(n);
    for(let i=0;i<n;i++){
        parent[i]=i;
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
        parent[rootP]=rootQ;
        count--;
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(M[i][j]===1) union(i,j);
        }
    }
    return count;
}

var M=[[1,1,0],[1,1,0],[0,0,1]]
console.log(findCircleNum(M));

