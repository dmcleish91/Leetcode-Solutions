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
  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();

  // Populate the maps with character frequencies for string 's'.
  for (let index = 0; index < s.length; index++) {
    if (sMap.get(s.charAt(index)) === undefined) {
      sMap.set(s.charAt(index), 1);
    } else {
      sMap.set(s.charAt(index), sMap.get(s.charAt(index))! + 1);
    }
  }

  // Populate the maps with character frequencies for string 't'.
  for (let index = 0; index < t.length; index++) {
    if (tMap.get(t.charAt(index)) === undefined) {
      tMap.set(t.charAt(index), 1);
    } else {
      tMap.set(t.charAt(index), tMap.get(t.charAt(index))! + 1);
    }
  }

  // Compare the character frequency maps of both strings.
  return compareMaps(sMap, tMap);
}

const s242 = 'anagram';
const t242 = 'nagaram';

console.log(isAnagram242(s242, t242));
