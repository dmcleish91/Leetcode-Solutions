// class TrieNode {
//   children: Map<string, TrieNode>;
//   endOfWord: boolean;

//   constructor() {
//     this.children = new Map<string, TrieNode>();
//     this.endOfWord = false;
//   }
// }

class WordDictionary {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
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
    function dfs(index: number, node: TrieNode) {
      let current = node;

      for (let i = index; i < word.length; i++) {
        const element = word.charAt(i);

        if (element === '.') {
          for (const child of current.children.values()) {
            if (dfs(i + 1, child)) {
              return true;
            }
          }
          return false;
        } else {
          if (!current.children.has(element)) {
            return false;
          } else {
            current = current.children.get(element);
          }
        }
      }
      return current.endOfWord;
    }
    return dfs(0, this.root);
  }
}
