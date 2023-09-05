// Time Complexity: O(n) - n is the number of nodes in the linked list
// Space Complexity: O(1) - Constant space used, no additional data structures
function deleteDuplicates(head: ListNode | null) {
  // Initialize a pointer to traverse the list
  let currentNode = head;

  // Traverse the list
  while (currentNode) {
    // Check for duplicates and skip them
    while (currentNode.next && currentNode.next.val === currentNode.val) {
      currentNode.next = currentNode.next.next;
    }

    // Move to the next node
    currentNode = currentNode.next;
  }

  // Return the modified linked list with duplicates removed
  return head;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(1);
const node3 = new ListNode(2);
const node4 = new ListNode(3);
const node5 = new ListNode(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let currentNode: ListNode | null = node1;
let previousNode: ListNode | null = null;

while (currentNode) {
  while (currentNode.next && currentNode.next.val === currentNode.val) {
    currentNode.next = currentNode.next.next;
  }
  currentNode = currentNode.next;
}
