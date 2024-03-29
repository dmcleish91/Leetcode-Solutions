// Time Complexity: O(n)
// - 'n' is the length of the input strings 's' and 't'.
// - The loops iterate through each character in the strings once.
// - Both the loops perform constant time operations (Map operations).
// - The 'compareMaps' function also iterates through the keys of the maps in O(n) time.
// - Thus, the overall time complexity is linear, proportional to the length of the strings.

// Space Complexity: O(n)
// - 'k' is the number of unique characters in the input strings 's' and 't'.
// - In the worst case, if all characters are unique, both maps could store all 'n' characters.
// - Therefore, the space used by the maps is proportional to the number of unique characters.

function compareMaps(map1: Map<string, number>, map2: Map<string, number>): boolean {
  for (const [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) {
      return false;
    }
  }
  return true;
}

function isAnagram242(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  // Create maps to store character frequencies in both strings.
  const countMap = new Map<string, number>();

  // Populate the maps with character frequencies for string 's'.
  for (let index = 0; index < s.length; index++) {
    if (countMap.get(s.charAt(index)) === undefined) {
      countMap.set(s.charAt(index), 1);
    } else {
      countMap.set(s.charAt(index), countMap.get(s.charAt(index))! + 1);
    }
  }

  // Populate the maps with character frequencies for string 't'.
  for (let index = 0; index < t.length; index++) {
    if (countMap.get(t.charAt(index)) === undefined) {
      return false;
    } else {
      countMap.set(t.charAt(index), countMap.get(t.charAt(index))! - 1);
    }
  }

  for (const [k, v] of countMap) {
    if (v !== 0) {
      return false;
    }
  }
  return true;
}

function isAnagramOptimal(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charCount = new Array<number>(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    charCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    charCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  for (let count of charCount) {
    if (count !== 0) return false;
  }

  return true;
}

const s242 = 'anagram';
const t242 = 'nagaram';

console.log(isAnagram242(s242, t242));
