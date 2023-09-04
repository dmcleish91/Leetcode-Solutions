// Time Complexity: O(n^2 * k)
// - 'n' is the number of elements in the input array.
// - 'k' is the average length of strings.
// - The main loop runs for each element in the input array, and for each element,
//   there's a loop that iterates through existing groups to check anagram.
// - In the worst case, all elements are anagrams, and the inner loop iterates 'n' times.
//   Additionally, the 'isAnagram' function's time complexity is O(k), as it involves
//   splitting strings and performing 'indexOf' operations.
// - Thus, the overall time complexity is O(n^2 * k).

// Space Complexity: O(n)
// - In the worst case, if all elements are unique, the 'hash' map could store all 'n' elements.
// - The 'first' array in 'isAnagram' function consumes space proportional to the length of strings,
//   but it doesn't scale with the input size since it's based on individual string lengths.
// - Therefore, the space used by the map is the dominant factor, resulting in O(n) space complexity.
function groupAnagrams(strs: string[]): string[][] {
  const hashMap = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    let doesExist = false;
    const item = strs[i];

    for (const [key, value] of hashMap.entries()) {
      if (isAnagram(item, key)) {
        value.push(item);
        doesExist = true;
      }
    }

    if (!doesExist) {
      hashMap.set(item, [item]);
    }
  }

  return [...hashMap.values()];
}

function isAnagram(s: string, t: string) {
  if (s.length !== t.length) return false;

  const charCount = new Map<string, number>();

  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!charCount.has(char)) {
      return false;
    }
    charCount.set(char, charCount.get(char)! - 1);
  }

  for (const count of charCount.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}

//console.log(groupAnagrams(['eat', 'ate', 'dog', 'pog']));

const value = 'bear';
const countArray = new Array(2).fill(0);
for (const char of value) {
  let countPosition = char.charCodeAt(0) - 'a'.charCodeAt(0);
  countArray[countPosition]++;
}

console.log(countArray);
