/**
 * 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

示例:

X X X X
X O O X
X X O X
X O X X


运行你的函数后，矩阵变为：

X X X X
X X X X
X X X X
X O X X


解释:

被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/surrounded-regions
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const rows=board.length;
    if(rows===0) return;
    const cols=board[0].length;
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(i===0||i===rows-1||j===0||j===cols-1){
                mark(board,i,j,rows,cols);
            }
        }
    }
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(board[i][j]==="O"){
                board[i][j]="X";
            }else if(board[i][j]==="A"){
                board[i][j]="O";
            }
        }
    }
    return board;
};

// 将边缘的O以及和边缘O连通的O 标记为了 "A"
function mark(board,i,j,rows,cols){
    if(i<0||j<0||i>rows-1||j>cols-1||board[i][j]!=='O'){
        return;
    }
    board[i][j]="A";
    mark(board,i+1,j,rows,cols);
    mark(board,i-1,j,rows,cols);
    mark(board,i,j+1,rows,cols);
    mark(board,i,j-1,rows,cols);
}

let board=[
    ["X","X","X","X"],
    ["X","O","O","X"],
    ["X","X","O","X"],
    ["X","O","X","X"]
];
console.log(solve(board));
