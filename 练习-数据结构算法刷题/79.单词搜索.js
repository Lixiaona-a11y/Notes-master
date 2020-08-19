var board=[
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
];

var word="ABCCED";

var exist = function(board,word) {
    if(board.length===0) return false;
    if(word.length===0) return true;
    const row=board.length;
    const col=board[0].length;

    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(dfs(i,j,0)) return true;
        }
    }
    return false;

    function dfs(i,j,cur){
        if(i>=row||i<0||j>=col||j<0){
            return false;
        }
        const now=board[i][j];
        if(now!==word[cur]){
            return false;
        }
        if(cur===word.length-1){
            return true;
        }
        board[i][j]=null;
        const res=dfs(i+1,j,cur+1)||
                  dfs(i-1,j,cur+1)||
                  dfs(i,j+1,cur+1)||
                  dfs(i,j-1,cur+1);
        board[i][j]=now;
        return res;
    }
};
console.log(exist(board,word));
