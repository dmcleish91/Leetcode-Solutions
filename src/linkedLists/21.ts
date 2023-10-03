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

// Time Complexity: O(m + n), where m and n are the lengths of `list1` and `list2` because we iterate through both lists once.
// Space Complexity: O(1), as the algorithm uses a constant amount of extra space for the `dummyHead` and `mergedList` pointers.
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // Create a dummy head node for the merged list.
  let mergedList = new ListNode();
  const dummyHead = mergedList;

  // Iterate through both input lists as long as there are nodes in both.
  while (list1 !== null && list2 !== null) {
    // Compare the values of the current nodes in list1 and list2.
    if (list1?.val < list2?.val) {
      // Append the smaller node to mergedList.
      mergedList.next = list1;
      list1 = list1.next;
    } else {
      mergedList.next = list2;
      list2 = list2.next;
    }

    // Move the mergedList pointer to the last added node.
    mergedList = mergedList.next;
  }

  // Append any remaining nodes in list1 and list2.
  if (list1 !== null) {
    mergedList.next = list1;
    mergedList = mergedList.next;
  }

  if (list2 !== null) {
    mergedList.next = list2;
    mergedList = mergedList.next;
  }

  // Return the merged list starting from the dummy head's next node.
  return dummyHead.next;
}
