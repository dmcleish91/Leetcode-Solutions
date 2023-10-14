// Time Complexity O(n)
// Space Complexity O(1)
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  // Create a dummy node as the previous node for the first group.
  let dummy = new ListNode(0, head);
  let groupPrev = dummy;

  while (true) {
    // Get the kth node in the current group.
    let kth = getKth(groupPrev, k);
    if (!kth) {
      break; // If there are fewer than 'k' nodes left, break out of the loop.
    }
    let groupNext = kth.next; // Store the next node outside the group.

    // Reverse the current group.
    let prev = groupNext; // Initialize 'prev' with the next node.
    let current = groupPrev.next; // Start reversing from the first node in the group.

    while (current !== groupNext) {
      if (current) {
        // Reverse the direction of the current node's next pointer.
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
      }
    }

    // We need to update the dummy reference to correctly return the head
    let temp = groupPrev.next; // Store the first node in the reversed group.
    groupPrev.next = kth; // Update the 'groupPrev' to point to the last node in the reversed group.
    if (temp) {
      groupPrev = temp; // Move 'groupPrev' to the beginning of the next group.
    }
  }

  return dummy.next; // Return the new head of the reversed linked list.
}

// This function moves the current pointer 'k' steps forward in the linked list.
function getKth(current: ListNode | null, k: number) {
  while (current && k > 0) {
    current = current.next;
    k--;
  }
  return current; // Return the kth node or null if not found.
}

// D -> 1 -> 2 -> 3 -> 4 -> 5
// D -> 2 -> 1 -> 3 -> 4 -> 5
