// Time Complexity: O(n) - where n is the number of nodes in the tree.
// Space Complexity: O(h) - where h is the height of the tree (recursive stack space).

// The main function for counting good nodes in the binary tree.
function goodNodes(root: TreeNode | null): number {
  // Start with 1 because the root node is always a good node.
  // Then, recursively call the helper function for the left and right subtrees.
  return 1 + getGoodNodes(root.left, root.val) + getGoodNodes(root.right, root.val);
}

// Helper function to recursively count good nodes in the tree.
function getGoodNodes(node: TreeNode | null, value: number) {
  // If the node is null, there are no good nodes in this subtree.
  if (!node) {
    return 0;
  }

  // Check if the current node's value is greater than or equal to the value of the
  // ancestor nodes (the path from the root to this node). If it is, the current node
  // is a good node, and we add 1 to the count.
  if (node.val >= value) {
    // Recursively count good nodes in the left and right subtrees while passing the
    // value of the current node (since it is now the highest value in the path).
    return 1 + getGoodNodes(node.left, node.val) + getGoodNodes(node.right, node.val);
  } else {
    // If the current node is not a good node, we don't increment the count.
    // Instead, we continue counting good nodes in both subtrees, but we pass
    // the value of the ancestor node (the highest value in the path).
    return 0 + getGoodNodes(node.left, value) + getGoodNodes(node.right, value);
  }
}
