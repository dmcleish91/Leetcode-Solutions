// Time Complexity: O(n), where 'n' is the number of nodes in the binary tree.
// Space Complexity: O(h), where 'h' is the height of the binary tree. In the worst case, 'h' can be 'n' in a skewed tree.
function isValidBST(root: TreeNode | null): boolean {
  // Base case: If the tree is empty, it's considered a valid BST.
  if (!root) return true;

  // Helper function to validate if a subtree is a valid BST
  function valid(node: TreeNode | null, leftBound: number, rightBound: number): boolean {
    // Base case: If the node is null, it's a valid BST by definition.
    if (!node) {
      return true;
    }

    // Check if the current node's value is within the allowed range.
    if (!(leftBound < node.val && node.val < rightBound)) {
      return false;
    }

    // Recursively validate the left and right subtrees while updating the bounds.
    return valid(node.left, leftBound, node.val) && valid(node.right, node.val, rightBound);
  }

  // Start the validation with initial bounds of negative infinity and positive infinity.
  return valid(root, -Number.MAX_VALUE, Number.MAX_VALUE);
}
