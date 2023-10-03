const test = 'A man, a plan, a canal: Panama';

/**
 * Checks if a given string is a palindrome by formatting it to ignore non-alphanumeric characters and be case-insensitive.
 * Then, it uses two pointers, one starting from the beginning and the other from the end of the formatted string,
 * moving towards the center while comparing characters. If all characters match, it returns `true` indicating a palindrome;
 * otherwise, it returns `false`.
 *
 * Time Complexity: O(n), where n is the length of the formatted string.
 * Space Complexity: O(n), due to the formatted string.
 *
 * @param {string} s - The input string to check for palindrome.
 * @return {boolean} - True if the input is a palindrome, false otherwise.
 */
function isPalindromeOriginal(s: string): boolean {
  const formatted = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  let left = 0;
  let right = formatted.length - 1;

  while (left < right) {
    if (formatted.charAt(left) === formatted.charAt(right)) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}

// Time Complexity: O(N) - Linear time complexity where N is the length of the input string.
// Space Complexity: O(1) - Constant space complexity as it uses a fixed amount of extra space.

function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters from the beginning.
    while (left < right && !isAlphanumeric(s.charAt(left))) {
      left++;
    }

    // Skip non-alphanumeric characters from the end.
    while (right > left && !isAlphanumeric(s.charAt(right))) {
      right--;
    }

    if (s.charAt(left).toLowerCase() === s.charAt(right).toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}

function isAlphanumeric(char: string): boolean {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Numeric (0-9)
    (code >= 65 && code <= 90) || // Upper alpha (A-Z)
    (code >= 97 && code <= 122) // Lower alpha (a-z)
  );
}

console.log(isPalindrome(test));
