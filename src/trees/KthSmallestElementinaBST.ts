function kthSmallest(root: TreeNode | null, k: number): number {
  let kth = 0;
  const stack = [];
  let current = root;
  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    kth++;
    if (kth == k) {
      return current.val;
    }
    current = current.right;
  }
}

// Recursion Solution
function inDepth(node: TreeNode | null, stack: number[]) {
  if (node === null) return;

  inDepth(node.left, stack);

  stack.push(node.val);

  inDepth(node.right, stack);
}

function kthSmallestRecursion(root: TreeNode | null, k: number): number {
  let stack = [];

  inDepth(root, stack);

  return stack[k - 1];
}
