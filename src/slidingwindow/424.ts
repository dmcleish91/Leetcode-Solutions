// Time Complexity: O(N), where N is the length of the input string 's'.
// Space Complexity: O(1), as the space used by 'charMap' is constant.
function characterReplacement(s: string, k: number): number {
  let leftPointer = 0;
  let result = 0;
  const charMap = new Map<string, number>();

  // Initialize a window with two pointers, leftPointer and rightPointer.
  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    // Update charMap with the frequency of characters in the current window.
    if (charMap.get(s.charAt(rightPointer)) === undefined) {
      charMap.set(s.charAt(rightPointer), 1);
    } else {
      charMap.set(s.charAt(rightPointer), charMap.get(s.charAt(rightPointer))! + 1);
    }

    // Check if the number of characters to be replaced (in the window) exceeds k.
    while (rightPointer - leftPointer + 1 - Math.max(...charMap.values()) > k) {
      // If it does, shrink the window from the left side.
      charMap.set(s.charAt(leftPointer), charMap.get(s.charAt(leftPointer))! - 1);
      leftPointer++;
    }

    // Update the result with the maximum window size seen so far.
    result = Math.max(rightPointer - leftPointer + 1, result);
  }

  return result;
}

console.log(characterReplacement("AABABBA", 1));
