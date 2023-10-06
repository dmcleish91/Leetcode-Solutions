/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Removes the Nth node from the end of a linked list.
 *
 * Time complexity: O(N), where N is the number of nodes in the list.
 * Space complexity: O(1), as we only use a constant amount of extra space.
 *
 * @param head The head of the linked list.
 * @param n The position of the node to remove from the end (1-indexed).
 * @returns The head of the modified linked list.
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // Create a dummy node with a reference to the head of the list.
  let dummy = new ListNode(undefined, head);

  // Initialize two pointers: left and right.
  let left = dummy;
  let right = head;

  // Move the right pointer n nodes ahead of the left pointer.
  for (let i = 0; i < n; i++) {
    right = right!.next;
  }

  // Move both the left and right pointers until right reaches the end of the list.
  while (right != null) {
    left = left.next!;
    right = right.next;
  }

  // Now, the left pointer is pointing to the node just before the one to be removed.
  // So, update the next pointer of the left node to skip the Nth node.
  left.next = left.next!.next!;

  // Return the modified list, starting from the dummy node's next.
  return dummy.next;
}
