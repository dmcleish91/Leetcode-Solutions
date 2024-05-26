// Time Complexity: O(n)
// - The loop iterates through each character in the input string once.
// - The operations inside the loop (push, pop, and comparisons) are constant time.
// - Thus, the time complexity is linear, proportional to the number of characters in the input.

// Space Complexity: O(n)
// - The stack can grow up to the size of the input string in the worst case.
// - Other auxiliary data structures used (mapping, character array) occupy constant space.
// - Overall, space complexity is proportional to the length of the input string.
function isValid(s: string): boolean {
  // Create a map to store closing brackets as keys and their corresponding opening brackets as values
  const hashmap = new Map<string, string>();
  hashmap.set(']', '[');
  hashmap.set('}', '{');
  hashmap.set(')', '(');

  // Create an empty stack to store opening brackets
  const stack: string[] = [];

  // Loop through each character in the input string
  for (const value of s) {
    // If the current character is a closing bracket
    if (hashmap.has(value)) {
      // Pop the top element from the stack
      const open = stack.pop();
      // If the corresponding opening bracket for the current closing bracket doesn't match the popped value
      if (hashmap.get(value) !== open) {
        // Return false because the brackets are not properly matched
        return false;
      }
    } else {
      // If the current character is an opening bracket, push it onto the stack
      stack.push(value);
    }
  }

  // After looping through all characters, if there are still elements in the stack, return false
  // Otherwise, return true indicating all brackets are properly matched
  return stack.length === 0;
}
