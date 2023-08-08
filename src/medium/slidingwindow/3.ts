// This function finds the length of the longest substring without repeating characters.
// The time complexity of this solution is O(n), where n is the length of the string.
// This is because we need to iterate over the string once to find the longest substring.
// The space complexity of this solution is O(n), where n is the length of the string.
// This is because we need to store the character set, which can have up to n elements.

function lengthOfLongestSubstring(s: string): number {
  // This variable stores the characters that have been seen so far in the substring.
  // We use a set because it is a fast way to check if a character is already in the set.
  const characterSet = new Set();

  // The left and right pointers track the start and end indexes of the current substring.
  let leftPointer = 0;

  let result = 0;

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    // While the current character is already in the character set,
    // that means it is a repeating character.
    // So we remove the leftmost character from the character set and update leftPointer.
    // This ensures that we only consider substrings that do not contain repeating characters.
    while (characterSet.has(s.charAt(rightPointer))) {
      characterSet.delete(s.charAt(leftPointer));
      leftPointer++;
    }

    characterSet.add(s.charAt(rightPointer));
    result = Math.max(result, rightPointer - leftPointer + 1);
  }

  // Return the length of the longest substring found.
  return result;
}

const test3 = 'pwwkew';

console.log(lengthOfLongestSubstring(test3));
