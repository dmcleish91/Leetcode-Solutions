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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let currentNode = head;

  while (currentNode) {
    while (currentNode.next && currentNode.next.val === currentNode.val) {
      currentNode.next = currentNode.next.next;
    }
    currentNode = currentNode.next;
  }

  return head;
}
