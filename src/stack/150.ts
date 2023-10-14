// Time Complexity: O(n), where n is the number of elements in the input tokens.
// Space Complexity: O(n), as we use a stack to store operands.
function evalRPN(tokens: string[]): number {
  // Create a stack to store operands.
  const stack: number[] = [];
  // Define the valid operators.
  const operators = ['+', '-', '*', '/'];

  // Loop through the input tokens.
  for (let i = 0; i < tokens.length; i++) {
    const element = tokens[i];

    // If the current element is an operator, perform the operation.
    if (operators.includes(element)) {
      // Pop the top two values from the stack as operands.
      let rightValue = stack.pop();
      let leftValue = stack.pop();
      let answer = 0;

      // Perform the operation based on the operator.
      switch (element) {
        case '+':
          answer = leftValue! + rightValue!;
          break;
        case '-':
          answer = leftValue! - rightValue!;
          break;
        case '*':
          answer = leftValue! * rightValue!;
          break;
        case '/':
          // Use Math.trunc to get the integer division result.
          answer = Math.trunc(leftValue! / rightValue!);
          break;
        default:
          break;
      }

      // Push the result back to the stack.
      stack.push(answer);
    } else {
      // If the current element is not an operator, convert it to an integer and push it onto the stack.
      stack.push(parseInt(element));
    }
  }

  // The final result is the only element left on the stack.
  return stack.pop()!;
}

console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
