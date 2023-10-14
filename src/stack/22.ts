// Time Complexity: O(2^n), where 'n' is the input value.
// The algorithm generates 2^n valid combinations of parentheses.
// Space Complexity: O(n), where 'n' is the input value.
// The space is used for the stack and answer array.

function generateParenthesis(n: number): string[] {
  const stack: string[] = []; // Initialize a stack to keep track of parentheses.
  const answer: string[] = []; // Initialize an array to store valid combinations.

  function backtrack(open: number, closed: number) {
    if (open === closed && closed === n) {
      // If we've used all the open and close parentheses, add the combination to the answer.
      answer.push(stack.join(''));
      return;
    }

    if (open < n) {
      stack.push('('); // Try adding an open parenthesis.
      backtrack(open + 1, closed); // Recursively explore possibilities with one more open parenthesis.
      stack.pop(); // Backtrack by removing the open parenthesis we added.
    }

    if (closed < open) {
      stack.push(')'); // Try adding a close parenthesis only if there are open parentheses to match.
      backtrack(open, closed + 1); // Recursively explore possibilities with one more close parenthesis.
      stack.pop(); // Backtrack by removing the close parenthesis we added.
    }
  }

  backtrack(0, 0); // Start the backtracking process with zero open and close parentheses.
  return answer; // Return the list of valid combinations.
}
