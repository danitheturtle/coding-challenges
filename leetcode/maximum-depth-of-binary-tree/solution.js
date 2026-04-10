function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const treeFromArray = (arr, i = 0) => {
  if (arr.length === 0) return null;
  if (i > arr.length - 1 || arr[i] == null) return null;
  return new TreeNode(
    arr[i],
    treeFromArray(arr, 2 * i + 1),
    treeFromArray(arr, 2 * i + 2),
  );
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

console.dir(maxDepth(treeFromArray([3, 9, 20, null, null, 15, 7])));
console.dir(maxDepth(treeFromArray([1, null, 2])));