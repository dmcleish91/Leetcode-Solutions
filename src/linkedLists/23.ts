// Time Complexity: O(N*log(k)), where N is the total number of nodes in all linked lists,
// and k is the number of linked lists.
// Space Complexity: O(k), for the mergedList array.

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null;
  }

  let mergedList: (ListNode | null)[] = [];

  // Continue merging until there's only one list left.
  while (lists.length > 1) {
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      const sortedList = mergeLists(l1, l2);
      mergedList.push(sortedList);
    }
    lists = mergedList; // Update the lists array with the merged lists.
    mergedList = []; // Clear the mergedList for the next round.
  }

  return lists[0]; // Return the final merged list.
}

function mergeLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head = new ListNode();
  let dummy = head;

  // Merge two sorted linked lists into one.
  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      head.next = l2;
      l2 = l2.next;
    } else {
      head.next = l1;
      l1 = l1.next;
    }
    head = head.next;
  }

  // Append any remaining nodes from l1 and l2.
  if (l1) {
    head.next = l1;
  }

  if (l2) {
    head.next = l2;
  }

  return dummy.next; // Return the merged list.
}
