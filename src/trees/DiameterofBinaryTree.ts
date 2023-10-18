// Time Complexity: O(n) In the worst case, we visit every node in the binary tree once.

// Space Complexity: O(h)
// The space complexity is determined by the height of the binary tree.
// In the worst case, where the tree is completely unbalanced and degenerates into a linked list,
// the space complexity becomes O(n). In a balanced tree, the space complexity is O(log n).
function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;

  function dfs(root: TreeNode | null) {
    if (!root) {
      return 0;
    }

    // Recursively calculate the depth of the left and right subtrees.
    let left = dfs(root.left);
    let right = dfs(root.right);

    // Update the result with the maximum diameter found so far.
    result = Math.max(result, left + right);

    // Return the depth of the current subtree, adding 1 to account for the current node.
    return 1 + Math.max(left, right);
  }

  // Start the depth-first search (DFS) from the root node.
  dfs(root);

  // Return the final result, which represents the diameter of the binary tree.
  return result;
}
