// Time Complexity: O(n)
// In the worst case, we visit every node in the binary tree once.

// Space Complexity: O(h)
// The space complexity is determined by the height of the binary tree.
// In the worst case, where the tree is completely unbalanced and degenerates into a linked list,
// the space complexity becomes O(n). In a balanced tree, the space complexity is O(log n).

function isBalanced(root: TreeNode | null): boolean {
  // Call the getHeight function and return the first element of the result, which indicates
  // whether the tree is balanced or not.
  let answer = getHeight(root);
  return answer[0];
}

function getHeight(root: TreeNode | null): [boolean, number] {
  if (!root) {
    // If the current node is null, return [true, 0] because an empty subtree is balanced
    // and has a height of 0.
    return [true, 0];
  }

  // Recursively calculate the balance and height of the left and right subtrees.
  let [leftBalanced, leftHeight] = getHeight(root.left);
  let [rightBalanced, rightHeight] = getHeight(root.right);

  // Determine if the current subtree is balanced by checking if both left and right subtrees
  // are balanced and the height difference is at most 1.
  let balanced = leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1;

  // Return the balance status and the height of the current subtree.
  return [balanced, 1 + Math.max(leftHeight, rightHeight)];
}
