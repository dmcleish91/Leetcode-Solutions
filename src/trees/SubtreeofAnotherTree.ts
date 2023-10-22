function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  // If subRoot is null, it's considered a subtree of any tree
  if (!subRoot) {
    return true;
  }

  // If root is null but subRoot is not, subRoot can't be a subtree
  if (!root) {
    return false;
  }

  // If the trees rooted at root and subRoot are the same, subRoot is a subtree
  if (sameTree(root, subRoot)) {
    return true;
  }

  // If subRoot is not a subtree of the current root, check left and right subtrees
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function sameTree(s: TreeNode | null, t: TreeNode | null) {
  // If both s and t are null, they are the same
  if (!s && !t) {
    return true;
  }

  // If s and t have the same value and structure, check left and right subtrees
  if (s && t && s.val === t.val) {
    return sameTree(s.left, t.left) && sameTree(s.right, t.right);
  }

  // If none of the conditions are met, s and t are not the same tree
  return false;
}
