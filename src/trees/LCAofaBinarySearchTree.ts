function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let current = root;

  while (current) {
    if (p.val > current.val && q.val > current.val) {
      current = current.right;
    } else if (p.val < current.val && q.val < current.val) {
      current = current.left;
    } else {
      return current;
    }
  }
}
