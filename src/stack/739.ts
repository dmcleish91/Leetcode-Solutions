function dailyTemperatures(temperatures: number[]): number[] {
  // the solution requires any days that don't have greater temps be init to 0
  const solution: number[] = new Array(temperatures.length).fill(0);
  const stack: [number, number][] = [];

  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];

    // if the stack has an item and the current temp is greater than the temp at the top of the stack
    // we are going to pop the stack and calculate the position and push into the answer array
    while (stack.length !== 0 && temperature > stack[stack.length - 1][0]) {
      const tempPosition = stack.pop();
      if (tempPosition) {
        solution[tempPosition[1]] = i - tempPosition[1];
      }
    }

    stack.push([temperature, i]);
  }

  return solution;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailyTemperatures(temperatures));
