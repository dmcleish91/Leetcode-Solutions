class LRUNode {
  key: number;
  val: number;
  next: LRUNode | null;
  prev: LRUNode | null;
  constructor(key?: number, val?: number) {
    this.key = key === undefined ? 0 : key;
    this.val = val === undefined ? 0 : val;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  capacity: number; // Maximum number of key-value pairs the cache can hold.
  cache: Map<number, LRUNode>; // A map to store key-value pairs for quick access.
  left: LRUNode; // The least recently used node (dummy node).
  right: LRUNode; // The most recently used node (dummy node).
  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map<number, LRUNode>();
    this.left = new LRUNode(0, 0);
    this.right = new LRUNode(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  // Remove a node from the doubly linked list.
  remove(node: LRUNode) {
    let prev = node.prev;
    let next = node.next;

    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
  }

  // Insert a node at the end of the doubly linked list.
  insert(node: LRUNode) {
    let prev = this.right.prev;
    let next = this.right;
    next.prev = node;

    if (prev) {
      prev.next = node;
    }

    node.next = next;
    node.prev = prev;
  }

  // Get the value associated with a key.
  get(key: number): number {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      if (node) {
        this.remove(node); // Remove the node from its current position.
        this.insert(node); // Move the node to the end of the list (most recently used).
        return node.val; // Return the value associated with the key.
      }
    }
    return -1; // Key not found in the cache.
  }

  // Put a key-value pair into the cache.
  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      if (node) {
        this.remove(node); // Remove the existing node from its current position.
      }
    }

    this.cache.set(key, new LRUNode(key, value)); // Create a new node and add it to the cache.
    let nsn = this.cache.get(key);

    if (nsn) {
      this.insert(nsn); // Insert the new node at the end of the list.
    }

    if (this.cache.size > this.capacity) {
      let lru = this.left.next; // Find the least recently used node.
      if (lru) {
        this.remove(lru); // Remove the least recently used node from the list.
        this.cache.delete(lru.key); // Remove the corresponding key from the cache.
      }
    }
  }
}
