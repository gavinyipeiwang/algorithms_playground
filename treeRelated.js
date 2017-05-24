/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) {
    return null
  }
  const left = root.left
  const right = root.right
  root.left = invertTree(right)
  root.right = invertTree(left)
  return root
};

var invertTreeQueue = function(root) {
  if (root === null) {
    return null
  }
  const queue = [root]
  while (queue.length) {
    const node = queue.shift(1)
    let tmp = node.left
    node.left = node.right
    node.right = tmp
    if (node.left !== null) {
      queue.push(node.left)
    }
    if (node.right !== null) {
      queue.push(node.right)
    }
  }
  return root
};
