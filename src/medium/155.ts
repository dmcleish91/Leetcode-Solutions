class MinStack {
  stack: number[] = [];
  minStack: number[] = [];
  constructor() {}

  push(val: number): void {
    this.stack.push(val);

    if (this.minStack.length === 0 || val < this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    } else {
      this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

const testArray: number[] = [];
console.log(1 < testArray[testArray.length - 1]);
