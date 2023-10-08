namespace solution {
  class Node {
    val: number;
    next: Node | null;
    random: Node | null;
    constructor(val?: number, next?: Node, random?: Node) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
      this.random = random === undefined ? null : random;
    }
  }

  function copyRandomList(head: Node | null): Node | null {
    // Create a map to store the mapping between original nodes and their copies.
    let nodeMap = new Map<Node, Node>();

    // Create a dummy node to serve as the new list's head.
    let newHead = new Node(0);

    // Initialize iterators for the original and new lists.
    let originalNode = head;
    let newNode = newHead;

    // Iterate through the original list to create a copy of each node.
    while (originalNode !== null) {
      // Create a new node with the same value as the original node.
      let newNodeCopy = new Node(originalNode.val);

      // Connect the new node to the new list.
      newNode.next = newNodeCopy;

      // Update the mapping in the nodeMap.
      nodeMap.set(originalNode, newNodeCopy);

      // Move to the next node in the original list.
      originalNode = originalNode.next;

      // Move to the next node in the new list.
      newNode = newNodeCopy;
    }

    // Reset the iterators to the beginning of the lists.
    originalNode = head;
    newNode = newHead.next!;

    // Iterate through the original list to set the random pointers of the new nodes.
    while (originalNode !== null) {
      // Get the corresponding copied node from the nodeMap.
      let copiedNode = nodeMap.get(originalNode);

      // If the original node has a random pointer, set the copied node's random pointer.
      if (originalNode.random !== null) {
        let copiedRandomNode = nodeMap.get(originalNode.random);
        copiedNode!.random = copiedRandomNode!;
      }

      // Move to the next nodes in both the original and new lists.
      originalNode = originalNode.next;
      newNode = newNode.next!;
    }

    // Return the head of the new list (excluding the dummy node).
    return newHead.next;
  }
}
