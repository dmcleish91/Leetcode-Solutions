function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }

  const leftTree = isSameTree(p.left, q.left);
  const rightTree = isSameTree(p.right, q.right);

  if (leftTree && rightTree && p.val === q.val) {
    return true;
  }

  return false;
}
