const test = 'A man, a plan, a canal: Panama';

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
