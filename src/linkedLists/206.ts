class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Time Complexity: O(n) - where 'n' is the number of nodes in the linked list
// Space Complexity: O(1) - constant space is used to reverse the linked list in-place
function reverseList(head: ListNode | null): ListNode | null {
  // If the input list is empty (null), return null as there's nothing to reverse.
  if (head === null) return null;

  // Initialize two pointers: 'current' and 'prev'.
  let current: ListNode | null = head;  // 'current' points to the current node being processed.
  let prev: ListNode | null = null;     // 'prev' points to the previous node in the reversed list.

  // Traverse the linked list, reversing the direction of each node's 'next' pointer.
  while (current !== null) {
    // Store a reference to the next node to avoid losing it during the reversal.
    const nextNode: ListNode | null = current.next;
    
    // Reverse the direction of 'current' node's 'next' pointer to point to 'prev'.
    current.next = prev;
    
    // Move 'prev' and 'current' pointers one step forward in the list.
    prev = current;
    current = nextNode;
  }

  // 'prev' now points to the head of the reversed list.
  return prev;
}

