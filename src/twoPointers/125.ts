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
function isPalindrome(s: string): boolean {
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

console.log(isPalindrome(test));
