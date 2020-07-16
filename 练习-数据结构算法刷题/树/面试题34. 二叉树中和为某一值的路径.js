var pathSum = function(root, sum) {
    if(!root) return [];
    let paths=[];
    _pathsum(root,sum,paths,[]);
    return paths;
};

function _pathsum(root,sum,paths,path){
    if(!root) return;
    path=[...path,root.val];
    if(!root.left&&!root.right&&root.val==sum){
        paths.push(path);
        return;
    }
    _pathsum(root.left,sum-root.val,paths,path);
    _pathsum(root.right,sum-root.val,paths,path);
}