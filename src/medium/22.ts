function generateParenthesis(n: number): string[] {
  const stack: string[] = [];
  const answer: string[] = [];

  function backtrack(open: number, closed: number) {
    if (open === closed && closed === n) {
      answer.push(stack.join(''));
      return;
    }

    if (open < n) {
      stack.push('(');
      backtrack(open + 1, closed);
      stack.pop();
    }

    if (closed < open) {
      stack.push(')');
      backtrack(open, closed + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);
  return answer;
}

console.log(generateParenthesis(3));
