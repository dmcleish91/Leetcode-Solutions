// Time Complexity: O(n)
// - The loop iterates through each character in the input string once.
// - The operations inside the loop (push, pop, and comparisons) are constant time.
// - Thus, the time complexity is linear, proportional to the number of characters in the input.

// Space Complexity: O(n)
// - The stack can grow up to the size of the input string in the worst case.
// - Other auxiliary data structures used (mapping, character array) occupy constant space.
// - Overall, space complexity is proportional to the length of the input string.
function isValid(s: string): boolean {
  const closingToOpening: { [key: string]: string } = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  const stack: string[] = [];
  const chars = s.split('');

  // Iterate through each character in the array.
  for (let i = 0; i < chars.length; i++) {
    const element = chars[i];

    // If the current character is a closing parenthesis we pop and check if its valid
    // Or if its a opening we push it onto the stack
    if (element in closingToOpening) {
      const pop = stack.pop();

      // If the popped element doesn't match the corresponding opening parenthesis,
      // the nesting is invalid, and we return false.
      if (closingToOpening[element] === pop) {
        continue;
      } else {
        return false;
      }
    } else {
      stack.push(element);
    }
  }

  return stack.length === 0;
}

const sq = '()[]{}';

console.log(isValid(sq));
