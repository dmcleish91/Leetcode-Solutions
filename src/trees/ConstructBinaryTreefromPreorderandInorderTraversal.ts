// The trick to solving this problem is to under that that the first index of preorder is
// always the root and inorder the left and right of the index of the root is the left and right branches
// so you can use recursion to always find the root of each node

// Time Complexity: O(n^2) in the worst case
// Space Complexity: O(n^2) in the worst case
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) return null;

  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
}
