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
 Do not return anything, modify head in-place instead.
 */

/**
 * Reorders a singly linked list in-place.
 * The code starts by finding the middle of the linked list using the "slow" and "fast" pointers.
 * The "slow" pointer advances one step at a time, while the "fast" pointer advances two steps at a time.
 * When the "fast" pointer reaches the end of the list, the "slow" pointer will be at the middle node.
 * This is done to split the linked list into two halves.
 *
 * After finding the middle, the code proceeds to reverse the second half of the linked list.
 * It initializes a "second" pointer to the node following the middle
 * and uses a "previous" pointer to reverse the direction of the pointers in the second half.
 * It also breaks the link between the first and second halves by setting the "next" pointer
 * of the middle node (slow.next) to null.
 *
 * Finally, the code merges the two halves of the linked list.
 * It uses "first" and "second" pointers to alternate between nodes from the first half
 * and the reversed second half, effectively interweaving the two halves to reorder the list as required.
 *
 * @param {ListNode | null} head - The head of the linked list to be reordered.
 * @returns {void}
 */
function reorderList(head: ListNode | null): void {
  // Find the middle of the linked list using the slow and fast pointers.
  let slow = head;
  let fast = head!.next;
  while (fast && fast.next !== null) {
    slow = slow!.next;
    fast = fast!.next.next;
  }

  // Now, 'slow' points to the middle of the linked list.

  // Reverse the second half of the linked list.
  let second = slow!.next;
  slow!.next = null; // Break the link between the first and second halves.
  let previous = null;
  while (second !== null) {
    let temp = second.next;
    second.next = previous;
    previous = second;
    second = temp;
  }

  // Now, 'previous' points to the reversed second half.

  // Merge the two halves of the linked list.
  let first = head;
  second = previous;
  while (second !== null) {
    let firstTemp = first!.next;
    let secondTemp = second.next;
    first!.next = second;
    second.next = firstTemp;

    first = firstTemp;
    second = secondTemp;
  }
}
