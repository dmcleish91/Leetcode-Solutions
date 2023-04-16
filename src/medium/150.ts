function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const operators = ['+', '-', '*', '/'];

  for (let i = 0; i < tokens.length; i++) {
    const element = tokens[i];

    if (operators.includes(element)) {
      let rightValue = stack.pop();
      let leftValue = stack.pop();
      let answer = 0;
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
          answer = Math.trunc(leftValue! / rightValue!);
          break;
        default:
          break;
      }
      stack.push(answer);
    } else {
      stack.push(parseInt(element));
    }
  }

  return stack.pop()!;
}

const tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];

console.log(evalRPN(tokens));
