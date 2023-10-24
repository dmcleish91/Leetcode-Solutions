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
