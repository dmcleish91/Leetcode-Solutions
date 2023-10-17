/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// Time Complexity: O(n) - where n is the number of nodes in the tree
//   We visit each node once, so the time complexity is linear with respect to the number of nodes.

// Space Complexity: O(h) - where h is the height of the tree
//   In the worst case, where the tree is completely unbalanced (skewed), the space complexity is O(n).
//   In the best case, where the tree is balanced, the space complexity is O(log(n)).
function invertTree(root: TreeNode | null): TreeNode | null {
  // If the root is null (empty tree), return null.
  if (!root) {
    return null;
  }

  // Swap the left and right subtrees of the current node.
  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  // Recursively invert the left and right subtrees.
  invertTree(root.left);
  invertTree(root.right);

  // Return the modified root.
  return root;
}

