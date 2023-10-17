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

// Time Complexity: O(n), where n is the number of nodes in the binary tree.
// Since we visit each node once, the time complexity is linear.

// Space Complexity: O(h), where h is the height of the binary tree.
// In the worst case, where the tree is completely unbalanced (like a linked list),
// the space complexity is O(n), but in the average case, it's O(h) due to the
// usage of the stack for the depth-first traversal.
function maxDepth(root: TreeNode | null): number {
  let result = 0;
  const stack: [TreeNode | null, number][] = [];
  stack.push([root, 1]);

  while (stack.length > 0) {
    const [node, depth] = stack.pop();
    if (node) {
      result = Math.max(result, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }

  return result;
}

function maxDepthRec(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepthRec(root.left), maxDepthRec(root.right));
}
