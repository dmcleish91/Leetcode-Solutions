// Time Complexity: O(max(N, M)), where N and M are the lengths of the input linked lists l1 and l2.
// In the worst case, we traverse the longer list completely.

// Space Complexity: O(max(N, M)), the space used for the result linked list is proportional to the length of the longer input list.
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // Create a dummy node to simplify the code and hold the result
  let dummy = new ListNode();
  let current = dummy;

  let carry = 0; // Initialize a variable to store the carry value

  // Loop through both input linked lists or carry value if present
  while (l1 || l2 || carry) {
    // Extract the values from the current nodes, default to 0 if node is null
    const valueOne = l1?.val || 0;
    const valueTwo = l2?.val || 0;

    // Calculate the sum of the current digits and the carry value
    let result = valueOne + valueTwo + carry;
    carry = Math.floor(result / 10); // Determine the new carry value

    // Create a new node with the current digit of the sum
    current.next = new ListNode(result % 10);

    // Update the current pointer to the newly created node
    current = current.next;

    // Move to the next nodes in the input linked lists if they exist
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next; // Return the result linked list (starting from the next of the dummy node)
}
