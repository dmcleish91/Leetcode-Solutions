// Time Complexity: O(N), where N is the number of nodes in the binary tree.
// This is because we visit each node exactly once in a level-order traversal.
// Space Complexity: O(N), where N is the maximum number of nodes at any level in the binary tree.
// In the worst case, all nodes at the last level will be stored in the 'queue' array.

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []; // If the root is null, return an empty array.
  }
  const queue: TreeNode[] = [root]; // Create a queue and add the root node to it.
  const answers: number[][] = []; // Create an array to store the final answer.

  while (queue.length > 0) {
    const levelSize = queue.length; // Get the number of nodes at the current level.
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // Remove the first node from the queue.
      currentLevel.push(node.val); // Add the node's value to the current level array.

      if (node.left) queue.push(node.left); // Add the left child to the queue if it exists.
      if (node.right) queue.push(node.right); // Add the right child to the queue if it exists.
    }
    answers.push(currentLevel); // Add the current level to the answers array.
  }

  return answers; // Return the level-order traversal result.
}

// -------------------------------------------------------------------------

// Time Complexity: O(N), where N is the number of nodes in the binary tree.
// This is because we visit each node exactly once in a post-order traversal.
// Space Complexity: O(H), where H is the height of the binary tree. In the worst case, the recursion stack can go as deep as the height of the tree.

function levelOrderRecursion(root: TreeNode | null): number[][] {
  const levels: number[][] = []; // Create an array to store the final answer.

  // Recursive function to traverse the tree and build the 'levels' array.
  function getHeight(node: TreeNode | null, height: number) {
    if (!node) return 0; // Base case: If the node is null, return 0.

    if (node.left || node.right) {
      getHeight(node.left, height + 1); // Recursively process the left child with an increased height.
      getHeight(node.right, height + 1); // Recursively process the right child with an increased height.
    }

    if (levels[height]) {
      levels[height].push(node.val); // Add the node's value to the appropriate level in 'levels'.
    } else {
      levels[height] = [node.val]; // Create a new level array and add the node's value.
    }
  }

  getHeight(root, 0); // Start the recursion from the root node with an initial height of 0.

  return levels; // Return the level-order traversal result.
}
