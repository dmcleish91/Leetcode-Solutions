class TrieNode {
  children: Map<string, TrieNode>;
  endOfWord: boolean;

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.endOfWord = false;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let current = this.root;
    for (const c of word) {
      if (!current.children.has(c)) {
        current.children.set(c, new TrieNode());
      }
      current = current.children.get(c);
    }
    current.endOfWord = true;
  }

  search(word: string): boolean {
    let current = this.root;

    for (const c of word) {
      if (current.children.has(c)) {
        current = current.children.get(c);
      } else {
        return false;
      }
    }

    return current.endOfWord;
  }

  startsWith(prefix: string): boolean {
    let current = this.root;

    for (const c of prefix) {
      if (current.children.has(c)) {
        current = current.children.get(c);
      } else {
        return false;
      }
    }

    return true;
  }
}
