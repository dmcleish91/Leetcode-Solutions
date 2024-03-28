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
  s = s.toLowerCase();

  let formatted = '';

  for (const char of s) {
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      formatted += char;
    }
  }

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
    while (left < right && !isAlphaNumericCharacter(s.charAt(left))) {
      left++;
    }

    while (right > left && !isAlphaNumericCharacter(s.charAt(right))) {
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

function isAlphaNumericCharacter(char: string): boolean {
  const code = char.charCodeAt(0);
  // if the code falls in any of the below ranges we return true
  return (
    (code >= 48 && code <= 57) || // numeric (0-9)
    (code >= 65 && code <= 90) || // upper alpha (A-Z)
    (code >= 97 && code <= 122) // lower alpha (a-z)
  );
}

console.log(isPalindrome(test));
