// Time Complexity: O(n) - We visit each node once, where n is the number of nodes in the tree.
// Space Complexity: O(n) - In the worst case, the queue can store all nodes in a single level.
function rightSideView(root: TreeNode | null) {
  if (!root) {
    return [];
  }

  const result = []; // Initialize the result array to store the right side view.
  const queue = [root]; // Initialize a queue with the root node.

  while (queue.length) {
    const levelSize = queue.length; // Get the number of nodes in the current level.

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // Remove the front node from the queue.

      if (i === levelSize - 1) {
        result.push(node.val); // If this is the last node in the level, add it to the result.
      }

      if (node.left) {
        queue.push(node.left); // Add the left child to the queue if it exists.
      }

      if (node.right) {
        queue.push(node.right); // Add the right child to the queue if it exists.
      }
    }
  }

  return result; // Return the right side view of the tree.
}

// sub-optimal
function rightSideViewOC(root: TreeNode | null) {
  if (!root) return [];

  const queue: TreeNode[] = [root];
  const result: number[] = [];

  while (queue.length) {
    const subqueue: TreeNode[] = [];

    while (queue.length) {
      subqueue.push(queue.shift());
    }

    while (subqueue.length) {
      const node = subqueue.shift();

      if (subqueue.length === 1) {
        result.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}
