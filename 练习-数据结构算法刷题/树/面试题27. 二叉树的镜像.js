/**
 * 画图找规律：从上到下，交换root 的左右节点值；可以借助递归来完成该过程
 * @param {*} root 
 */
var mirrorTree = function(root) {
  if (!root) {
    return null;
}
// 交换当前节点的左右节点
const leftCopy = root.left;
root.left = root.right;
root.right = leftCopy;

// 对左右子树做相同操作
mirrorTree(root.left);
mirrorTree(root.right);

return root;
};