var getPermutation = function(n, k) {
    let result=[],used={};
    function dfs(str){
        if(str.length===n){
            result.push(str);
            return;
        }
        for(let i=1;i<=n;i++){
            if(used[i]){
                continue;
            }
            str+=i;
            used[i]=true;
            dfs(str);
            str=str.substr(0,str.length-1);
            used[i]=false;         
        }
    }
    dfs("");
    return result[k-1];
};
console.log(getPermutation(3,3));