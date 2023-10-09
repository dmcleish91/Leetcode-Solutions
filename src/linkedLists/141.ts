// Time Complexity: O(n)
// Space Complexity: O(n)
function hasCycle(head: ListNode | null): boolean {
  // Create a Set to store visited nodes
  const dupDict = new Set<ListNode>();

  // Traverse the linked list
  while (head) {
    // If the current node is already in the Set, there is a cycle, so return false
    if (dupDict.has(head)) {
      return false;
    }
    // Add the current node to the Set
    dupDict.add(head);
    // Move to the next node
    head = head.next;
  }

  // If we reach the end of the list without finding a cycle, return true
  return true;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
function hasCycleSF(head: ListNode | null): boolean {
  // Check for edge cases: empty list or a list with only one node
  if (head === null || head.next === null) {
    return false;
  }

  // Initialize two pointers: slow and fast
  let slow = head;
  let fast = head;

  // Traverse the list with two pointers
  while (fast !== null && fast.next !== null) {
    // Move slow one step at a time
    slow = slow.next!;
    // Move fast two steps at a time
    fast = fast.next.next!;
    // If the slow and fast pointers meet, there is a cycle, so return true
    if (slow === fast) {
      return true;
    }
  }

  // If we reach the end of the list without finding a cycle, return false
  return false;
}
